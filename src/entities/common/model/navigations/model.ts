import { createEvent } from 'effector-root'
import qs from 'query-string'

import { history } from 'shared/lib/history'

export const historyPush = createEvent<string>('pushHistory')
export const setSearchUrl = createEvent<Record<string, any>>('setSearchUrl')

historyPush.watch((to) => history.push(to))

/* UPDATE URL QUERY */
setSearchUrl.watch((search) => {
  if (search !== undefined && search !== null) {
    const pathname = history.location.pathname
    const query = qs.stringify(search)

    history.push({
      pathname,
      search: `?${query}`,
    })
  }
})
