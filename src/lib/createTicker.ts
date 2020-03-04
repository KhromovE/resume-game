import { curry } from 'ramda'

type Ticker = {
  add: Function
  remove: Function
}

const addToList = curry((list: Set<Function>, cb: Function): void => {
  list.add(cb)
})
const removeFromList = curry((list: Set<Function>, cb: Function): void => {
  list.delete(cb)
})

export const createTicker = (): Ticker => {
  const cbList = new Set<Function>()
  const add = addToList(cbList)
  const remove = removeFromList(cbList)

  const tick = (): void => {
    cbList.forEach(cb => cb())
    requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)

  return {
    add,
    remove,
  }
}
