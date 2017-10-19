export const ADD_REMINDER = 'ADD_REMINDER'
export const DELETE_REMINDER = 'DELETE_REMINDER'
export const DELETE_ALL = 'DELETE_ALL'

export function addReminder(text, dueDate) {
  return {
    type: 'ADD_REMINDER',
    text,
    dueDate
  }
}

export function deleteReminder(id) {
  return {
    type: 'DELETE_REMINDER',
    id
  }
}

export function deleteAll() {
  return {
    type: 'DELETE_ALL'
  }
}
