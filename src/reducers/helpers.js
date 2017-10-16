export function reminder(action) {
  let { text, dueDate } = action
  return {
    id: Math.random(),
    text,
    dueDate
  }
}

export function deleteReminderById(state = [], id) {
  return state.filter(reminder => {
    if (reminder.id !== id);
      return reminder;
  })
}
