import { useState } from 'react'

const Button = ({ name, callback }) => {
	return (
		<button onClick={callback}>{name}</button>
	)
}

const Compteur = () => {
	// const [ valeurCourante, updateValeurCourante ] = useState(valeurInitiale)
	const [count, setCount] = useState(0)

	const updateCount = (x) => {
		setCount(count + x)
	}

	return (
		<div>
			<h1>Page Compteur</h1>
			<p>Valeur du compteur: {count}</p>
			<Button name="Incrémenter" callback={() => updateCount(1)} />
			<Button name="Décrémenter" callback={() => updateCount(-1)} />
		</div>
	)
}

export default Compteur