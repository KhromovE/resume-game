import { sample, combine } from 'effector'
import { mergeRight, reduce } from 'ramda'

import { createGameObject } from '../../../lib/createGameObject'
import { createDirection } from '../../../lib/createDirection'
import { createTicker } from '../../../lib/createTicker'
import { changeCharacterPosition, moveCharacter } from './map.events'

export const $tableObject = createGameObject({ x: 0, y: 0, width: 87, height: 91 })
export const $laptopObject = createGameObject({ x: 410, y: 15, width: 87, height: 91 })
export const $characterObject = createGameObject({
  x: 0,
  y: 0,
  width: 131,
  height: 76,
}).on(changeCharacterPosition, (state, payload) => mergeRight(state, payload))

const { $direction } = createDirection()
const ticker = createTicker()

ticker.add(moveCharacter)

sample({
  source: combine({ character: $characterObject, direction: $direction }),
  clock: moveCharacter,
  fn: ({ character, direction }) =>
    reduce(
      (acc, item) => {
        let newCharacter = acc || character
        // R.when(R.always(R.equals(item, 'right')), R.always(newCharacter))
        if (item === 'right') {
          newCharacter = {
            ...newCharacter,
            x: newCharacter.x + 1,
            y: newCharacter.y - 1,
          }
        }

        if (item === 'up') {
          newCharacter = {
            ...newCharacter,
            x: newCharacter.x - 1,
            y: newCharacter.y - 1,
          }
        }

        if (item === 'down') {
          newCharacter = {
            ...newCharacter,
            x: newCharacter.x + 1,
            y: newCharacter.y + 1,
          }
        }

        if (item === 'left') {
          newCharacter = {
            ...newCharacter,
            x: newCharacter.x - 1,
            y: newCharacter.y + 1,
          }
        }

        return newCharacter
      },
      character,
      direction,
    ),
  target: $characterObject,
})

sample({
  source: $characterObject,
  clock: $direction.updates,
  fn: store => {
    return store
  },
  target: changeCharacterPosition,
})
