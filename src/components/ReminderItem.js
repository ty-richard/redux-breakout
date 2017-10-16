import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteReminder } from '../actions'

class ReminderItem extends Component {
  deleteReminder(id) {
    this.props.deleteReminder(id)
  }

  render() {
    console.log('reminderItem props',this.props.reminders);
    return (
      <div className='reminder-list col-sm-5'>
        <ul className='list-group'>
          {
            this.props.reminders.map(reminder => {
              return (
                <li
                  key={ reminder.id }
                  className='list-group-item'>
                  <div className='list-item'>
                    { reminder.text }
                  </div>
                  <div
                    className='list-item delete-button'
                    onClick={ () => this.deleteReminder(reminder.id) }>
                    &#x2715;
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { deleteReminder })(ReminderItem)
