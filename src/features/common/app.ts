import * as PIXI from 'pixi.js'

export const app = new PIXI.Application({
  antialias: true,
  transparent: false,
  resolution: 1,
  backgroundColor: 0xffffff,
  autoDensity: true,
})
app.renderer.view.style.position = 'absolute'
app.renderer.view.style.display = 'block'
app.renderer.resize(window.innerWidth, window.innerHeight)

document.body.appendChild(app.view)
