import React from 'react'
import styled from 'styled-components'

import { Map } from '../../features/game'
import { SceneTemplate } from '../../ui/templates'

const Stage = styled.div`
  width: 920px;
  height: 955px;
  color: var(--main-bg-color);
`

export const Main: React.FC = () => (
  <SceneTemplate>
    <Stage>
      <Map />
    </Stage>
  </SceneTemplate>
)
