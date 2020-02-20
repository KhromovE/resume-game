import React from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { Point } from '../../../../lib/createGameObject'

type ContentProps = {
  top: number
  left: number
}

const Wrapper = styled(React.Fragment)<ContentProps>`
  & > svg {
    position: absolute;

    ${({ left, top }): FlattenSimpleInterpolation => css`
      left: ${left}px;
      top: ${top}px;
    `}
  }
`

export const GameObject: React.FC<Point> = ({ x, y, children }) => (
  <Wrapper top={y} left={x}>
    {children}
  </Wrapper>
)
