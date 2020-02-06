import * as React from 'react'
import { Stage } from '@inlet/react-pixi'

import { Map } from '../../features/game'

type Options = {
  backgroundColor?: number
}

const options: Options = {
  backgroundColor: 0xffffff,
}

export const Main: React.SFC = () => (
  <Stage width={window.innerWidth} height={window.innerHeight} options={options}>
    <Map />
  </Stage>
)
