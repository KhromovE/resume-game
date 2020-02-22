type Ticker = {
  add: Function
}

export const createTicker = (time = 200): Ticker => {
  const request = () => {}

  return {
    add,
  }
}
