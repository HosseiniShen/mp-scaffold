/**
 * Parse query
 * @param {*} url 
 * @returns 
 */
export function parseQuery (url) {
  if (!url) return null
  url = decodeURIComponent(url)
  let query = url.split('?')[1]
  if (!query) return null

  const ret = Object.create(null)
  query.split('&').forEach(param => {
    const [ key, value ] = param.split('=')
    if (key) {
      ret[key] = value || null
    }
  })
  return ret
}
