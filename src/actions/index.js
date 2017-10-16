export const ADD_REMINDER = 'ADD_REMINDER'
export const DELETE_REMINDER = 'DELETE_REMINDER'

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
