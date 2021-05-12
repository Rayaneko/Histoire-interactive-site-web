import styles from './choiceList.module.css'

const ChoiceList = ({ choices, callback }) => {
	return (
		<div className="flex flex-col h-full">
			{
				choices.map((choice, index) => {
					return (
						<p
							className={"border-2 border-purple-600 rounded h-1/4 m-2 p-4 hover:text-white hover:bg-purple-600 cursor-pointer " + styles.choice}
							key={index}
							onClick={() => callback(choice.target, choice.content)}
						>
							{choice.content}
						</p>
					)
				})
			}
		</div>
	)
}

export default ChoiceList