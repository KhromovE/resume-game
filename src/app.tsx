import React from 'react'
import { Stage } from '@inlet/react-pixi'

type Options = {
  backgroundColor?: number
}

const options: Options = {
  backgroundColor: 0xffffff,
}

export const App: React.SFC = () => (
  <Stage width={window.innerWidth} height={window.innerHeight} options={options} />
)
