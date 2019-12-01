import { Application } from 'pixi.js'

const app = new Application({
    width: 256,
    height: 256,
    antialias: true,
    transparent: false,
    resolution: 1,
    backgroundColor: 0x061639,
})

document.body.appendChild(app.view)
