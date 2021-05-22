import React from 'react'
import Input from './Input'

class Form extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			nik: '',
			division: '',
			toggleModal: props.modalOpen
		}

		this.saveForm = this.saveForm.bind(this)
	}

	getFormData(form) {
		let fields = form.querySelectorAll('input')
		let data = {}

		fields.forEach((field, i) => {
			data[field.name] = field.value
		});

		return data
	}

	saveForm(event) {
		event.preventDefault()
		let data = this.getFormData(event.target)

		try {
			fetch(`http://${window.location.host}:3000/api/participant`, {
				method: 'POST',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify(data)
			})
			.then(response => response.json())
			.then((data) => {
				if (data.name) {
					alert(`${data.name} telah disimpan`)
					this.state.toggleModal()
				} else {
					alert(data.message)
				}
			})
		} catch (error) {
			alert(`${error}`)
		}
	}

	render() {
		return (
			<div className="w-96 max-w-lg mx-2 bg-white p-5 relative rounded-lg shadow-sm text-gray-700">
				<h1 className="text-lg font-bold mb-8">Input Biodata</h1>
				<form onSubmit={this.saveForm}>
					<Input name="name" label="Nama" autoselect="true" required={ true } />
					<Input name="nik" label="ID" required={ true } />
					<Input name="division" label="Divisi" required={ true } />
					<div className="flex space-x-3 justify-end">
						<button
							type="submit"
							className="rounded shadow px-5 py-2 duration-100 bg-indigo-500 hover:bg-indigo-400 uppercase text-white text-sm"
						>Save</button>
						<button
							onClick={this.state.toggleModal}
							className="rounded shadow px-5 py-2 duration-100 bg-gray-600 hover:bg-gray-500 uppercase text-white text-sm"
						>Cancel</button>
					</div>
				</form>
			</div>
		)
	}
}

export default Form
