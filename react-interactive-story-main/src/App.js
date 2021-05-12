import { useState } from 'react'
import Title from './components/Title'
import Content from './components/Content'
import ChoiceList from './components/ChoiceList'
import story from './story'


function App() {
	const [chapterId, setChapterId] = useState(1)
  const [choiceHistory, setChoiceHistory] = useState([])
	const chapter = story.find(chapter => chapter.id === chapterId)

  const selectChoice = (id, choice) => {
    setChapterId(id)
    // Si l'etat futur dépend de notre état actuel, alors on doit passer par une fonction pour mettre à jour et retourner ce nouvel état. Sinon, on risque des incohérences dans notre application
    setChoiceHistory((previousChoices) => {
      // Gráce à cette fonction, j'ai accès à la valeur courante de choiceHistory de façon synchrone avec previousChoices
      // Je dois ensuite retourner le nouveau tableau mis à jour
      // ...previousChoices me permet de faire une copie de toutes les anciennes valeurs du tableau previousChoices
      return [...previousChoices, choice]
    })
  }

  const onReset = () => {
    // Lors du click du boutton reset, on appelera cette fonction qui affichera de nouveau le chapitre 1 et effacera l'historique des choix précédents
    setChapterId(1)
    setChoiceHistory([])
  }

	if (!chapter) {
		return <p>Oops, chapitre correspondant manquant!</p>
	}

  // Mettre en place un reset - niveau 1
  // Mettre en place "revenir en arrière" - niveau 2
  // Faire un historique des choix - niveau 3

  // Bonus: mettre le prénom de l'utilisateur - niveau 3

	const text = chapter.content
	const book = chapter.title
	const chapterName = chapter.chapter
	const choices = chapter.choices
	return (
		<main className="flex min-h-screen">
      <section className="w-1/2 bg-purple-600 text-white p-6">
        <Title book={book} chapter={chapterName} />
        <Content text={text} />
        <button
          className="border-2 border-white rounded px-2"
          onClick={onReset}
        >Reset</button>
        {
          choiceHistory.map((choice, index) => <p key={index}>{choice}</p>)
        }
      </section>
      <section className="w-1/2 bg-gray-100 p-6">
			  <ChoiceList choices={choices} callback={selectChoice} />
      </section>
		</main>
	)
}

export default App
