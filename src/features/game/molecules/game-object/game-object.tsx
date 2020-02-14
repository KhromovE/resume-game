import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
`

export const GameObject: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>
