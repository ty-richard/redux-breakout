import React, { Component } from 'react'
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap'
import ReminderItem from './ReminderItem'
import { addReminder } from '../actions'
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
		let { text, dueDate } = this.state
		this.props.addReminder(text, dueDate)
	}
	render() {
		return (
			<div className='app'>
				<div className='title'>Reminder Pro</div>
				{' '}
				<Form inline>
					<FormGroup>
						<FormControl
							type='text'
							placeholder='I have too...'
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
			</div>
		)
	}
}

function mapStateToProps(state) {
	return state
}

export default connect(mapStateToProps, { addReminder })(App)
