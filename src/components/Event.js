import React from 'react'

// const Event = props => {
//   const dispatch = props.dispatch
//   const event = props.event
const Event = ({ dispatch, event }) => {
  //
  const handleClickDeleteButton = () => {
    const result = window.confirm(
      `イベントID:${event.id}を本当に削除しても宜しいでしょうか？`
    )
    if (result) dispatch({ type: 'DELETE_EVENT', id: event.id })
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

// {state.map((event, index) => {
//   const handleClickDeleteButton = () => {
//     dispatch({
//       type: 'DELETE_EVENT',
//       id: event.id
//     })
//   }
//   return (
//     <tr key={index}>
//       <td>{event.id}</td>
//       <td>{event.title}</td>
//       <td>{event.body}</td>
//       <td>
//         <button
//           type="button"
//           className="btn btn-danger"
//           onClick={handleClickDeleteButton}
//         >
//           削除
//         </button>
//       </td>
//     </tr>
//   )
// })}
