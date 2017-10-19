import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteReminder } from '../actions'
import moment from 'moment'

class ReminderItem extends Component {
  deleteReminder(id) {
    this.props.deleteReminder(id)
  }

  render() {
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
                    <div>{ reminder.text }</div>
                    <div><em>{ moment(new Date(reminder.dueDate)).fromNow() }</em></div>
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
