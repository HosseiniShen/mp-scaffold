let lastTime = 0

export function requestAnimationFrame (callback) {
  let currTime = new Date().getTime()
  let timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
  let id = setTimeout(function () {
    callback(currTime + timeToCall)
  }, timeToCall)
  lastTime = currTime + timeToCall
  return id
}

export function cancelAnimationFrame (id) {
  clearTimeout(id)
}
