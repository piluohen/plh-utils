
export const local = {
  get: key => JSON.parse(localStorage.getItem(key)),
  set: (key, data) => localStorage.setItem(key, JSON.stringify(data)),
  remove: key => localStorage.removeItem(key),
  clear: () => localStorage.clear()
}

export const session = {
  get: key => JSON.parse(sessionStorage.getItem(key)),
  set: (key, data) => sessionStorage.setItem(key, JSON.stringify(data)),
  remove: key => sessionStorage.removeItem(key),
  clear: () => sessionStorage.clear()
}



export default {
  local, session
}