import { useState } from "react"
import JokeContainer from './components/JokeContainer';
import FavoriteJokeContainer from './components/FavoriteJokeContainer';
import './App.css';

function App() {

  const [jokeFavorite, setJokeFavorite] = useState ([])
  const [favoriteContainer, setFavoriteContainer] = useState(false)

function addJoke (arr, id) {

  const jokeItem = arr.find(item => item.id === id)
  setJokeFavorite([...jokeFavorite, jokeItem])
}

function deleteJoke (arr, id) {
  setJokeFavorite(arr.filter((todo) => todo.id !== id))
}

console.log(jokeFavorite)

  return (
    <div className="App">
      <JokeContainer addJoke={addJoke} jokeFavorite={jokeFavorite} deleteJoke={deleteJoke} setFavoriteContainer={setFavoriteContainer} favoriteContainer={favoriteContainer}/>
      <div className={favoriteContainer? 'block': ''}></div>
      <FavoriteJokeContainer jokeFavorite={jokeFavorite} deleteJoke={deleteJoke} setFavoriteContainer={setFavoriteContainer} favoriteContainer={favoriteContainer}/>
    </div>
  );
}

export default App;
