import React from 'react'
import { Stage } from '@inlet/react-pixi'

type Options = {
  transparent?: boolean
}

const options: Options = {
  transparent: true,
}

export const App: React.SFC = () => (
  <Stage width={window.innerWidth} height={window.innerHeight} options={options} />
)
