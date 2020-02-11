import React from 'react'
import styled from 'styled-components'

type Props = {
  background: React.ReactNode
}

const Wrapper = styled.div`
  position: relative;
`

const Content = styled.div`
  position: absolute;
  left: 0;
  top: 0;
`

export const GameField: React.SFC<Props> = ({ children, background }) => (
  <Wrapper>
    {background}
    <Content>{children}</Content>
  </Wrapper>
)

// styled.div`
//   position: absolute;
// `
