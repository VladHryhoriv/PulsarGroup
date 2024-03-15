import axios, { AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios'

type TMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

const getApi = (): string | undefined => process.env.REACT_APP_API_URL

interface RequestConfig<Data = any> {
  url: string
  headers?: { [key: string]: string }
  config?: AxiosRequestConfig
  unsetContentType?: boolean
  method: TMethod
  body?: Data
  cancelToken?: CancelToken
}

type Token = {
  token: string
}

export type AuthorizedRequest<T = unknown> = {
  [key in keyof T]: T[key]
} & Token

const logRequest = (requestConfig: RequestConfig) => {
  if (localStorage.getItem('scrapeit-api-debug')) {
    /* eslint-disable no-console */

    console.groupCollapsed(
      `🏓 API:%c %c${requestConfig.method}%c URL: ${requestConfig.url}`,
      '',
      'background: skyblue; color: black',
      ''
    )
    console.log('request:', requestConfig)
    console.groupEnd()
    /* eslint-enable no-console */
  }
}

const contentTypeFromOptions = (options: RequestConfig) => {
  if (options && options.body && options.body instanceof FormData) {
    return 'multipart/form-data'
  }
  if (options && options.headers && options.headers['Content-Type']) {
    return options.headers['Content-Type']
  }

  return typeof options.body === 'object'
    ? 'application/json'
    : (options.headers && options.headers['Content-Type']) || ''
}

const createContentType = (
  options: RequestConfig
): Headers | string[][] | Record<string, string> | undefined => {
  const header = contentTypeFromOptions(options)

  return header ? { 'Content-Type': header } : {}
}

const createAuthorization = (
  token?: string | null
): Headers | string[][] | Record<string, string> | undefined =>
  token ? { Authorization: `bearer ${token}` } : {}

/**
 * @param method
 *
 * @description POST GET DELETE PUT
 *
 *
 * @param url
 *
 * @param body
 *
 *
 * @example
 * ```javascript
 * await request({ url: `/users`, method: 'GET' });
 * ```
 **/

export const request = <RequestData = unknown, ResponseData = unknown>(
  request: RequestConfig<RequestData>,
  token?: string
): Promise<ResponseData> => {
  const url =
    request.url[0] === '/'
      ? request.url.slice(1, request.url.length)
      : request.url

  const apiUrl = getApi()

  if (!apiUrl) {
    throw Error('Cannot find api')
  }

  const baseUrl =
    apiUrl[apiUrl?.length - 1] === '/'
      ? apiUrl.slice(0, apiUrl.length - 1)
      : apiUrl

  const formattedUrl = `${baseUrl}/${url}`

  const headers: any = {
    ...createContentType(request),
    ...createAuthorization(token),
    ...request.headers,
    Accept: '*/*',
  }

  if (process.env.NODE_ENV === 'development') {
    logRequest({ headers, ...request })
  }

  const requestConfig: AxiosRequestConfig = {
    method: request.method,
    url: formattedUrl,
    headers,
    data: request.body,
    cancelToken: request.cancelToken,
    ...request.config,
  }

  const response = axios(requestConfig).then(
    (response: AxiosResponse<ResponseData>) => response.data
  )

  return response
}
