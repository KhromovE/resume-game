import * as PIXI from 'pixi.js'

const app = new PIXI.Application({
    width: 256,
    height: 256,
    antialias: true,
    transparent: false,
    resolution: 1,
    backgroundColor: 0x061639,
    autoDensity: true,
})
app.renderer.view.style.position = 'absolute'
app.renderer.view.style.display = 'block'
app.renderer.resize(window.innerWidth, window.innerHeight)

document.body.appendChild(app.view)
