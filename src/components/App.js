import React, { useReducer } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import AppContext from '../contexts/AppContext'
import reducer from '../reducers'
import EventForm from './EventForm'
import EventList from './EventList'

const App = () => {
  const initialState = {
    events: []
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <h4>イベント作成フォーム</h4>
        <EventForm />
        <h4>イベント一覧</h4>
        <EventList />
      </div>
    </AppContext.Provider>
  )
}

export default App
