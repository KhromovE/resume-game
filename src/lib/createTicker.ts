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

// const ticker = (time: number): void => {
//   const tick = () => {

//   }
//   setTimeout(() => {

//   }, time)
// }

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
