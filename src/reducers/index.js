import { combineReducers } from 'redux'
import { ADD_REMINDER, DELETE_REMINDER, DELETE_ALL } from '../actions'
import { reminder, deleteReminderById } from './helpers'
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies'


export function reminders(state = [], action) {
  state = read_cookie('reminders');
  let reminders = null

  switch(action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)]
      bake_cookie('reminders', reminders)
      return reminders

    case DELETE_REMINDER:
      reminders = deleteReminderById(state, action.id)
      bake_cookie('reminders', reminders)
      return reminders

    case DELETE_ALL:
      delete_cookie('reminders')
      return []

  default:
    return state
  }
}

const rootReducer = combineReducers({ reminders })

export default rootReducer
