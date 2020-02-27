import * as R from 'ramda'

type Ticker = {
  add: Function
  remove: Function
}

const addToList = R.curry((list: Set<Function>, cb: Function): void => {
  list.add(cb)
})
const removeFromList = R.curry((list: Set<Function>, cb: Function): void => {
  list.delete(cb)
})

export const createTicker = (time = 200): Ticker => {
  const cbList = new Set<Function>()
  const add = addToList(cbList)
  const remove = removeFromList(cbList)

  setInterval(() => {
    cbList.forEach(cb => cb())
  }, time)

  return {
    add,
    remove,
  }
}
