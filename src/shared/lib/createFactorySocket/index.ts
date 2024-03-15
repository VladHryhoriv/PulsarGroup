import {
  Store,
  Effect,
  createEffect,
  createEvent,
  Event,
  createStore,
  merge,
  guard,
  sample,
  forward,
} from 'effector'

type Status = 'closed' | 'open' | 'error'
interface createSocketResponseProps<P> {
  disconnect: Event<any>
  connect: Event<string>
  $status: Store<Status>
  onMessage: Event<PayoadSocket<P>>
}

interface FactorySocket<S> {
  token: Store<S>
}

type PayoadSocket<P> = {
  event: 'chat' | 'clientError'
  payload: P
}

export const createFactorySocket = <S = unknown>({
  token,
}: FactorySocket<S>) => {
  return <P = unknown>(channel: string): createSocketResponseProps<P> => {
    let socket: any
    const wsURL = `${process.env.REACT_APP_SOCKET}?jwt=${token.getState()}`

    const awaitingMap = new Map()

    function cleanSocket() {
      socket.onopen = null
      socket.onclose = null
      socket.onerror = null
      socket.onmessage = null
    }

    const open = createEvent('open')
    const closed = createEvent<any>('closed')
    const error = createEvent<Error>('error')

    const onMessageSocket = createEvent('message')
    const onMessage = createEvent<PayoadSocket<P>>('message')

    const connect = createEvent<string>('connect')

    const connectFx = createEffect<string, void, Error>('connectFx').use(
      async (workspaceId: string) => {
        try {
          console.log(
            '%c WS: Try to connect on %s',
            'color: #2c3e50; font-size: 12px; font-weight: 700',
            `${wsURL}&workspaceId=${workspaceId}`
          )
          if (wsURL) {
            socket = new WebSocket(`${wsURL}&workspaceId=${workspaceId}`)
          }
        } catch (e) {
          throw new Error(e.message)
        }

        socket.onopen = (event: any) => open(event)
        socket.onclose = ({ wasClean, code, reason }: any) =>
          closed({ wasClean, code, reason })
        socket.onerror = (err: any) => error(err)
        socket.onmessage = (msg: any) => onMessageSocket(msg)
      }
    )
    const disconnect = createEvent<any>('disconnect')

    disconnect.watch(() => {
      if (process.env.NODE_DEV === 'development') {
        console.log(
          '%c WS: websocket connection is disconnect',
          'color: #ff6b6b; font-size: 12px; font-weight: 700'
        )
      }
      socket.close()
    })

    guard({
      source: onMessageSocket.map(({ data }: any) => {
        const payload = JSON.parse(data)
        return payload
      }),
      filter: (payload) => payload.event === channel,
      target: onMessage,
    })

    open.watch(() => {
      if (process.env.NODE_DEV === 'development') {
        console.log(
          '%c WS: Connect ready',
          'color: #2c3e50; font-size: 12px; font-weight: 700'
        )
      }
    })

    closed.watch(({ code, reason }) => {
      if (process.env.NODE_DEV === 'development') {
        console.log(
          '%c WS: [close] Connection is closed %s',
          'color: #ff6b6b; font-size: 12px; font-weight: 700',
          `code=${code} reason=${reason}`
        )
      }
    })

    error.watch((err: Error) => {
      if (process.env.NODE_DEV === 'development') {
        console.error(`[error] ${err.message}`)
      }
    })

    merge([closed, error]).watch(() => cleanSocket())

    const $status = createStore<'closed' | 'open' | 'error'>('closed')
      .on(open, () => 'open')
      .on(closed, () => 'closed')
      .on(error, () => 'error')

    $status.watch((state) => {
      if (process.env.NODE_DEV === 'development') {
        console.log(`websocket is ${state}`)
      }
    })

    const sampleOpen = sample({
      source: $status,
      clock: connect,
      fn: (status, params) => ({ status, workspaceId: params }),
    })

    const guardOpen = guard({
      source: sampleOpen,
      filter: ({ status }) => status !== 'open',
    })

    forward({
      from: guardOpen.map(({ workspaceId }) => workspaceId),
      to: connectFx,
    })

    return {
      disconnect,
      connect,
      $status,
      onMessage,
    }
  }
}
