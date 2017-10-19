import React, { Component } from 'react'
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: '',
			dueDate:''
		}
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
						bsStyle='success'>
						Add Reminder
					</Button>
				</Form>
			</div>
		)
	}
}

export default App
