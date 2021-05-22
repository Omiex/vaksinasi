import React from 'react'
import Form from './Form'
import { CSSTransitionGroup } from 'react-transition-group'
import './Modal.css'

class Modal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			show: props.show
		}

		this.toggleModal = this.toggleModal.bind(this)
	}

	toggleModal(event) {
		if (event) {
			event.preventDefault()
		}
		this.setState({
			show: !this.state.show
		})
	}

	componentWillReceiveProps(newProps) {
		
	}

	render() {
		return (
			<div
				id="modal"
				className={`h-full w-full top-0 right-0 flex items-center justify-center fixed z-10 ${this.state.show ? 'hidden' : ''}`}
			>
				<div
					onClick={this.toggleModal}
					className="h-screen w-screen fixed z-0 bg-black opacity-70"
				></div>
				<div>
					<Form modalOpen={this.toggleModal}/>
				</div>
			</div>
		)
	}
}

export default Modal
