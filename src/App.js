import React, { useState } from 'react'

const App = props => {
  console.log('App loading')

  const [states, setStates] = useState(props)

  return (
    <>
      <p>
        現在の{states.name}は、{states.price}円です。
      </p>
      <div>
        <button onClick={() => setStates({ ...states, price: states.price + 1 })}>+1</button>
        <button onClick={() => setStates({ ...states, price: states.price - 1 })}>-1</button>
        <button onClick={() => setStates(props)}>reset</button>
      </div>
      <div>
        <input value={states.name} onChange={e => setStates({ ...states, name: e.target.value })} />
      </div>
    </>
  )
}

App.defaultProps = {
  name: 'バナナ',
  price: 100
}

export default App
