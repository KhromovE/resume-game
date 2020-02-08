import * as React from 'react'
import { Stage } from '@inlet/react-pixi'

import { Map } from '../../features/game'
import { SceneTemplate } from '../../ui/templates'

type Options = {
  backgroundColor?: number
}

const options: Options = {
  backgroundColor: 0xffffff,
}

export const Main: React.SFC = () => (
  <SceneTemplate>
    <Stage width={920} height={955} options={options}>
      <Map />
    </Stage>
  </SceneTemplate>
)
