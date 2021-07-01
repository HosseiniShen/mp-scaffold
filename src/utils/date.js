/**
 * 格式化时间(2 -> 02)
 * @param {*} timeNum 
 * @returns 
 */
export function prettify (timeNum) {
  return `0${ timeNum }`.slice(-2)
}
