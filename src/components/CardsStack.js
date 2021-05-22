import React from 'react'
import Card from './Card'

class CardsStack extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			queue1: 158,
			queue2: 15,
			finish: 1575,
		}
		this.checkQueue = this.checkQueue.bind(this)
	}

	checkQueue() {
		var data = {
			newQueue1: 158,
			newQueue2: 15,
			newFinish: 1573,
		}

		this.setState(state => ({
			queue1: data.newQueue1,
			queue2: data.newQueue2,
			finish: data.newFinish
		}))
	}

	componentDidMount() {
		this.addInterval = setInterval( () => this.checkQueue(), 1000)
	}

	componentWillUnmount() {
		clearInterval(this.addInterval)
	}

	render() {
		return (
			<div id="middle" className="lg:h-1/3 lg:flex items-center justify-center">
				<Card title='Antrian Gedung Biru' value={this.state.queue1} color="blue" />
				<Card title='Antrian Gedung Merah' value={this.state.queue2} color="red" />
				<Card title='Sudah Divaksin' value={this.state.finish} color="yellow" />
			</div>
		)
	}

}

export default CardsStack
