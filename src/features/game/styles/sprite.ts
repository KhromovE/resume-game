import styled, { css, FlattenSimpleInterpolation, AnyStyledComponent } from 'styled-components'

import { Point } from '../../../lib/createGameObject'

export const styledSprite = (sprite: AnyStyledComponent): AnyStyledComponent => styled(sprite)<
  Point
>`
  position: absolute;

  ${({ x, y }): FlattenSimpleInterpolation => css`
    left: ${x}px;
    top: ${y}px;
  `}
`
