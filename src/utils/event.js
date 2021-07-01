/**
 * 节流
 * @param {*} fn 
 * @param {*} wait 
 * @returns 
 */
export function throttle (fn, wait) {
  let timeout = null
  let prev = 0
  return function (...args) {
      const context = this;
      let now = Date.now()
      let remain = wait - (now - prev)
      if (remain <= 0) {
          clearTimeout(timeout)
          timeout = null
          prev = now
          fn.apply(context, args)
      } else if (!timeout) {
          timeout = setTimeout(() => {
              prev = Date.now()
              timeout = null
              fn.apply(context, args)
          }, remain)
      }
      
  }
}
