import React, { useState, useEffect } from 'react'

const App = props => {
  //console.log('App loading')

  const [states, setStates] = useState(props)
  const { name, price } = states

  useEffect(() => {
    console.log('Always useEffect')
  })

  useEffect(() => {
    console.log('Only useEffect')
  }, [])

  useEffect(() => {
    console.log('This callback is for name only')
  }, [name])

  return (
    <>
      <p>
        現在の{states.name}は、{states.price}円です。
      </p>
      <button onClick={() => setStates({ ...states, price })}>+1</button>
      <button onClick={() => setStates({ ...states, price })}>-1</button>
      <button onClick={() => setStates(props)}>reset</button>
      <input value={name} onChange={e => setStates({ ...states, name: e.target.value })} />
    </>
  )
}

App.defaultProps = {
  name: 'バナナ',
  price: 100
}

export default App
