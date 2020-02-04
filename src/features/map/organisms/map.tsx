import * as React from 'react'
import { Stage, Container, Graphics } from '@inlet/react-pixi'
import { Point } from 'pixi.js'

type Options = {
  backgroundColor?: number
}

const options: Options = {
  backgroundColor: 0xffffff,
}

const obsp = new Point(1, 0.5)

export const Map: React.SFC = () => {
  const stageRef = React.useRef(null)

  return (
    <Stage width={window.innerWidth} height={window.innerHeight} options={options} ref={stageRef}>
      <Container scale={obsp} position={[window.innerWidth / 2, window.innerHeight / 2]}>
        <Graphics
          preventRedraw
          rotation={Math.PI / 4}
          draw={(g): void => {
            // clear the graphics
            g.clear()
            // start drawing
            g.beginFill(0xff3300)
            g.lineStyle(4, 0xffd900, 1)

            g.moveTo(50, 50)
            g.lineTo(250, 50)
            g.lineTo(100, 100)
            g.lineTo(50, 50)
            g.endFill()

            g.lineStyle(2, 0x0000ff, 1)
            g.beginFill(0xff700b, 1)
            g.drawRect(50, 150, 120, 120)

            g.lineStyle(2, 0xff00ff, 1)
            g.beginFill(0xff00bb, 0.25)
            g.drawRoundedRect(150, 100, 300, 100, 15)
            g.endFill()

            g.lineStyle(0)
            g.beginFill(0xffff0b, 0.5)
            g.drawCircle(470, 90, 60)
            g.endFill()
          }}
        />
      </Container>
    </Stage>
  )
}
