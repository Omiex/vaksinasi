import React from 'react'
// import './App.css';
import CardsStack from './components/CardsStack'
import Modal from './components/Modal'
import Waktu from './components/Waktu'

class App extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
			apiResponse: '',
			modalOpen: false
		}

		this.toggleModal = this.toggleModal.bind(this)
	}

	callAPI() {
    fetch(`http://${window.location.host}:3000/testAPI`)
    .then(res => res.text())
    .then(res => this.setState({ apiResponse: res }));
	}

	toggleModal() {
		this.setState({
			modalOpen: !this.state.modalOpen
		})
	}

	componentDidMount() {
    this.callAPI();
	}

	render() {
		return (
		  <div className="bg-black h-screen w-screen fixed">
	  		<div className="bg-fixed bg-center bg-cover fixed z-0 w-full h-screen opacity-50" style={{backgroundImage: 'url(img/office-wallpaper-hd-26.jpg)'}}>
	  		</div>
				<div className="h-screen relative z-10 overflow-y-auto">
			  	<div className="container h-screen mx-auto px-5 text-white">
			  		<div id="top" className="h-1/3 pt-5 flex flex-col">
		  				<nav className="h-10 flex justify-between items-stretch">
		  					<h1 id="nav-title" className="self-center text-lg">
		  						Data Vaksinasi Covid-19
		  					</h1>
		  					<div id="nav-menu" className="flex self-center uppercase space-x-10 text-sm">
		  						<div>LOC SURYADARMA</div>
		  					</div>
		  				</nav>
		  				<div className="flex flex-grow self-center">
		  					<p className="self-center"><Waktu /></p>
		  				</div>
		  			</div>

						<CardsStack />

						<div id="bottom" className="h-1/3 flex items-center justify-center">
							<button type="button" name="button" onClick={this.toggleModal} className="bg-red-500 py-3 px-8 text-sm uppercase rounded shadow">Daftar</button>
						</div>
		  		</div>

					<Modal show={this.state.modalOpen} />

				</div>
	  	</div>
	  )
	}
}

export default App;
