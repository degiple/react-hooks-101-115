import React from 'react'

const OperationLog = ({ operationLog }) => {
  return (
    <tr>
      <td>{operationLog.description}</td>
      <td>{operationLog.operation_dt}</td>
    </tr>
  )
}

export default OperationLog
