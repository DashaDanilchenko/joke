import { useState } from "react"
import JokeContainer from './components/JokeContainer';
import FavoriteJokeContainer from './components/FavoriteJokeContainer';
import './App.css';

function App() {

  const [jokeFavorite, setJokeFavorite] = useState ([])

function addJoke (arr, id) {

  const jokeItem = arr.find(item => item.id === id)
  setJokeFavorite([...jokeFavorite, jokeItem])
}

console.log(jokeFavorite)

  return (
    <div className="App">
      <JokeContainer addJoke={addJoke} jokeFavorite={jokeFavorite}/>
      <FavoriteJokeContainer />
    </div>
  );
}

export default App;
