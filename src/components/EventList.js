import React, { useContext } from 'react'
import Event from './Event'
import AppContext from '../contexts/AppContext'

const EventList = () => {
  const { state } = useContext(AppContext)
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>タイトル</th>
          <th>ボディ</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {state.map((event, index) => {
          return <Event key={index} event={event} />
        })}
      </tbody>
    </table>
  )
}

export default EventList
