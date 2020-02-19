import React, { useReducer } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import AppContext from '../contexts/AppContext'
import reducer from '../reducers'
import EventForm from './EventForm'
import EventList from './EventList'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <h4>イベント作成フォーム</h4>
        <EventForm state={state} dispatch={dispatch} />
        <h4>イベント一覧</h4>
        <EventList state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  )
}

export default App
