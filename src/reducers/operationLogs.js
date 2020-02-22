import { ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS } from '../actions'

const operationLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      const operation_log = {
        description: action.description,
        operation_dt: action.operation_dt
      }
      return [operation_log, ...state]
    case DELETE_ALL_OPERATION_LOGS:
      return []
    default:
      return state
  }
}

export default operationLogs
