function Card(props) {
	const headerStyle = `card-header bg-gradient-to-r from-${props.color}-500 to-${props.color}-600 -mb-8 mx-4 h-16 relative z-10 rounded-lg shadow-lg flex items-center justify-center`
	const bodyStyle = "card-body bg-white text-4xl text-gray-700 pt-6 h-28 rounded-lg shadow-lg flex items-center justify-center"

	return (
		<div className="sm:w-96 mx-auto lg:w-1/3 p-5">
			<div className={headerStyle}>
				<h1>{props.title}</h1>
			</div>
			<div className={bodyStyle}>
				{props.value}
			</div>
		</div>
	)
}

export default Card
