import React, { Component } from 'react'
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap'
import ReminderItem from './ReminderItem'
import { addReminder, deleteAll } from '../actions'
import { connect } from 'react-redux'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: '',
			dueDate:''
		}
	}

	addReminder() {
		this.props.addReminder(this.state.text, this.state.dueDate)
		this.setState({
			text: '',
			dueDate: ''
		})
		document.getElementById("reminder-form").reset();
	}

	deleteAll() {
		this.props.deleteAll()
	}

	render() {
		return (
			<div className='app'>
				<div className='title'>Reminder Pro</div>
				{' '}
				<Form id='reminder-form'inline>
					<FormGroup>
						<FormControl
							type='text'
							placeholder='I have to...'
							onChange={event => this.setState({ text: event.target.value })}
						></FormControl>
					</FormGroup>
					{' '}
					<FormGroup>
						<FormControl
							type='datetime-local'
							onChange={event => this.setState({ dueDate: event.target.value })}
						></FormControl>
					</FormGroup>
					{' '}
					<Button
						bsStyle='success'
						onClick={ () => this.addReminder() }>
						Add Reminder
					</Button>
				</Form>
				<ReminderItem />
				{
					this.props.reminders.length > 1 ?
						<Button bsStyle='danger' onClick={ () => this.deleteAll() }>Delete All</Button>
					:
					<div></div>
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return state
}

export default connect(mapStateToProps, { addReminder, deleteAll })(App)
