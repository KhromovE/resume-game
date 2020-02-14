import { createStore, Store, Event } from 'effector'

export type GameObject = {
  x: number
  y: number
  width: number
  height: number
  marker: number
}

const gameObjectFactory = (startFrom = 0): Function => {
  let marker = startFrom

  return ({ x, y, width, height }: GameObject, cb: Event<GameObject>): Store<GameObject> => {
    const store = createStore({ x, y, width, height, marker })

    marker += 1

    store.watch(value => {
      cb(value)
    })

    return store
  }
}

export const createGameObject = gameObjectFactory()
