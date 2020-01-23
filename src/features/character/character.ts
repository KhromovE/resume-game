import * as PIXI from 'pixi.js'

import { app } from '../common'
import characterSpritesheet from '../../assets/character/character.json'
import character from '../../assets/character/character.png'

function setup(loader: PIXI.Loader, resources: Partial<Record<string, PIXI.LoaderResource>>): void {
  const texture = resources.character.texture.baseTexture
  const sheet = new PIXI.Spritesheet(texture, characterSpritesheet)
  sheet.parse(textures => {
    const character = new PIXI.Sprite(textures['character0.png'])
    character.position.set(100, 100)
    app.stage.addChild(character)
  })
}

PIXI.Loader.shared.add('character', character).load(setup)
