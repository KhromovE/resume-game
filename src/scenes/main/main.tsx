import React from 'react'
// import { Stage } from '@inlet/react-pixi'
import styled from 'styled-components'

import { Map } from '../../features/game'
import { SceneTemplate } from '../../ui/templates'

const Stage = styled.div`
  width: 920px;
  height: 955px;
`

export const Main: React.SFC = () => (
  <SceneTemplate>
    <Stage>
      <Map />
    </Stage>
  </SceneTemplate>
)
