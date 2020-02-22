import React, { useContext } from 'react'
import { DELETE_EVENT, ADD_OPERATION_LOG } from '../actions'
import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utills'

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext)
  const handleClickDeleteButton = () => {
    let id = event.id
    const result = window.confirm(
      `イベントID:${id}を本当に削除しても宜しいでしょうか？`
    )
    if (result) {
      dispatch({ type: DELETE_EVENT, id })
      dispatch({
        type: ADD_OPERATION_LOG,
        description: `イベントID${id}を削除しました`,
        operation_dt: timeCurrentIso8601()
      })
    }
  }
  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleClickDeleteButton}
        >
          削除
        </button>
      </td>
    </tr>
  )
}

export default Event
