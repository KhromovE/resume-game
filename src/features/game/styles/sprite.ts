import styled, { AnyStyledComponent } from 'styled-components'
import { props, compose, reduce, subtract, min } from 'ramda'

import { GameObject } from '../../../lib/createGameObject'

type Props = {
  object: GameObject
}

type Attrs = {
  style: {
    left: string
    top: string
  }
}

const cordToPx = (num: number): string => `${num}px`
const takeSide = compose(
  reduce<number, number>(min, Infinity),
  props<keyof GameObject, number>(['width', 'height']),
)

const prepareStyle = ({ object }: Props): Attrs => {
  const side = takeSide(object)
  const x = subtract(object.x, side)
  const y = subtract(object.y, side)

  return {
    style: {
      left: cordToPx(x),
      top: cordToPx(y),
    },
  }
}
// compose<GameObject, number>(
//   min,
//   props<keyof GameObject>(['width', 'height']),
// )

export const styledSprite = (sprite: React.FC): AnyStyledComponent =>
  styled(sprite).attrs(prepareStyle)<GameObject>`
    position: absolute;
  `
