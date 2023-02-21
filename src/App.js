import { useEffect, useState } from "react"
import JokeContainer from './components/JokeContainer';
import FavoriteJokeContainer from './components/FavoriteJokeContainer';
import './App.css';
import './normalize.css'

function App() {

  const [jokeFavorite, setJokeFavorite] = useState (() => {
    return (JSON.parse(localStorage.getItem('jokeFavorite'))) || [] }
  )
  
  const [onStyles, setOnStyles] = useState(false)

  useEffect (() => {
      localStorage.setItem('jokeFavorite', JSON.stringify(jokeFavorite))
  }, [jokeFavorite])


function addJoke (arr, id) {
  const jokeItem = arr.find(item => item.id === id)
  setJokeFavorite([...jokeFavorite, jokeItem])
}

function deleteJoke (arr, id) {
  setJokeFavorite(arr.filter((todo) => todo.id !== id))
}

  return (
    <div className="App">
      <JokeContainer addJoke={addJoke} jokeFavorite={jokeFavorite} deleteJoke={deleteJoke} setOnStyles={setOnStyles}/>
      <div className={onStyles? 'block': ''}></div>
      <FavoriteJokeContainer jokeFavorite={jokeFavorite} deleteJoke={deleteJoke} setOnStyles={setOnStyles} onStyles={onStyles}/>
    </div>
  );
}

export default App;