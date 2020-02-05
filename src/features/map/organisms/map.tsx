import * as React from 'react'
import { Container, Graphics, useApp } from '@inlet/react-pixi'
import { Point } from 'pixi.js'

const obsp = new Point(1, 0.5)

export const Map: React.SFC = () => {
  const {
    screen: { width, height },
  } = useApp()

  return (
    <Container scale={obsp} position={[width / 2, height / 2]}>
      <Graphics
        preventRedraw
        rotation={Math.PI / 4}
        draw={(g): void => {
          // clear the graphics
          g.clear()
          // start drawing
          g.beginFill(0xff3300)
          g.lineStyle(1, 0xffd900, 1)

          g.moveTo(0, 50)
          g.lineTo(250, 50)
          g.lineTo(100, 100)
          g.lineTo(0, 50)
          g.endFill()
        }}
      />
    </Container>
  )
}
