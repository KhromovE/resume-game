import React from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

type ContentProps = {
  top: number
  left: number
}

const Wrapper = styled.div<ContentProps>`
  position: absolute;

  ${({ left, top }): FlattenSimpleInterpolation => css`
    left: ${left}px;
    top: ${top}px;
  `}
`

type Props = {
  x: number
  y: number
}

export const GameObject: React.FC<Props> = ({ x, y, children }) => (
  <Wrapper top={y} left={x}>
    {children}
  </Wrapper>
)
