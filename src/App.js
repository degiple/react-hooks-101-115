import React, { useState } from 'react'

const App = props => {
  console.log('App start')

  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  const reset = () => {
    setPrice(props.name)
    setPrice(props.price)
  }

  return (
    <>
      <p>
        現在の{name}は、{price}です。
      </p>
      <div>
        <button onClick={() => setPrice(price + 1)}>+1</button>
        <button onClick={() => setPrice(price - 1)}>-1</button>
        <button onClick={reset}>reset</button>
      </div>
      <div>
        <input value={name} onChange={e => setName(e.target.value)} />
      </div>
    </>
  )
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App
