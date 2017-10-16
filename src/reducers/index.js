import { combineReducers } from 'redux'
import { ADD_REMINDER, DELETE_REMINDER } from '../actions'
import { reminder, deleteReminderById } from './helpers'


export function reminders(state = [], action) {
  switch(action.type) {
    case ADD_REMINDER:
      return [...state, reminder(action)]

    case DELETE_REMINDER:
      return deleteReminderById(state, action.id)
      
  default:
    return state
  }
}

const rootReducer = combineReducers({ reminders })

export default rootReducer
