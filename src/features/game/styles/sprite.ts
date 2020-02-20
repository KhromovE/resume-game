import styled, { css, FlattenSimpleInterpolation, StyledComponent } from 'styled-components'

import { Point } from '../../../lib/createGameObject'

export const styledSprite = sprite => styled(sprite)<Point>`
  position: absolute;

  ${({ x, y }): FlattenSimpleInterpolation => css`
    left: ${x}px;
    top: ${y}px;
  `}
`
