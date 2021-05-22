import React from 'react'
import './Input.css'

class Input extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			label: props.label,
			name: props.name,
			required: props.required,
			value: '',
			active: '',
		}

		this.active = this.active.bind(this)
		this.blur = this.blur.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		event.preventDefault()
		this.setState({value: event.target.value})
	}

	active(event) {
		event.preventDefault()
		this.setState({active: 'input-active'})
	}

	blur(event) {
		event.preventDefault()
		if (!this.state.value) {
			this.setState({active: ''})
		}
	}

	render() {
		return (
			<div className="relative mb-5">
				<label htmlFor={ this.state.name } className={ this.state.active }>
					{ this.state.label }
				</label>
				<input required={ this.state.required }
					onFocus={ this.active }
					onBlur={ this.blur }
					onChange={ this.handleChange }
					id={ this.state.name }
					type="text"
					name={ this.state.name }
					value={ this.state.value }
					className="relative z-10 bg-transparent border border-gray-400 rounded py-2 px-3 w-full"
				/>
			</div>
		)
	}
}

export default Input
