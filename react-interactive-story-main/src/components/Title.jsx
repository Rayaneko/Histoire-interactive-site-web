const Title = ({ book, chapter }) => {
	return (
		<>
			<h1 className="text-4xl text-center mb-10">{book}</h1>
			<h2 className="text-2xl mb-5">{chapter}</h2>
		</>
	)
}

export default Title