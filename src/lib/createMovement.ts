import { createStore, createEvent, Store } from 'effector'

type Direction = {
  up: boolean
  right: boolean
  down: boolean
  left: boolean
}

type Returned = {
  $direction: Store<Direction>
}

const press = () => {}
const release = () => {}

export const createKeyBoardServie = (): Returned => {
  const buttonPushed = createEvent()
  const $direction = createStore<Direction>({ up: false, right: false, down: false, left: false })

  document.addEventListener('keydown', press)
  document.addEventListener('keydown', release)

  return {
    $direction,
  }
}

let up = false
let right = false
let down = false
let left = false
const x = window.innerWidth / 2 - 130 / 2
const y = window.innerHeight / 2 - 130 / 2
document.addEventListener('keydown', press)
function press(e) {
  if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */) {
    up = true
  }
  if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */) {
    right = true
  }
  if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */) {
    down = true
  }
  if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */) {
    left = true
  }
}
document.addEventListener('keyup', release)
function release(e) {
  if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */) {
    up = false
  }
  if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */) {
    right = false
  }
  if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */) {
    down = false
  }
  if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */) {
    left = false
  }
}
// function gameLoop() {
//   const div = document.querySelector('div')
//   if (up) {
//     y -= 10
//   }
//   if (right) {
//     x += 10
//   }
//   if (down) {
//     y += 10
//   }
//   if (left) {
//     x -= 10
//   }
//   div.style.left = `${x}px`
//   div.style.top = `${y}px`
//   window.requestAnimationFrame(gameLoop)
// }
// window.requestAnimationFrame(gameLoop)
