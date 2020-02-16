import React, { useState } from 'react'

const App = () => {
  const initialState = 0
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const increment2 = () => setCount(prevCount => prevCount + 1)
  const decrement2 = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1)
    }
  }

  const reset = () => setCount(initialState)
  const double = () => setCount(prevCount => prevCount * 2)
  const three = () => {
    setCount(prevCount => (prevCount % 3 === 0 ? prevCount / 3 : prevCount))
  }

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
        <button onClick={double}>×２</button>
        <button onClick={three}>３の倍数の時だけ、３で割る</button>
      </div>
    </>
  )
}

export default App
