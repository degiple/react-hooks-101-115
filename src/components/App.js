import React, { useReducer, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import AppContext from '../contexts/AppContext'
import reducer from '../reducers'
import EventForm from './EventForm'
import EventList from './EventList'
import OperationLogList from './OperationLogList'

const APP_KEY = 'appWithRedux'

const App = () => {
  const localState = localStorage.getItem(APP_KEY)
  const initialState = localState
    ? JSON.parse(localState)
    : {
        events: [],
        operationLogs: []
      }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <h4>イベント作成フォーム</h4>
        <EventForm />
        <h4>イベント一覧</h4>
        <EventList />
        <h4>操作ログ一覧</h4>
        <OperationLogList />
      </div>
    </AppContext.Provider>
  )
}

export default App
