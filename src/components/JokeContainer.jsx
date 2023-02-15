import { useState } from "react"
import FormSearch from './FormSearch/FormSearch'
import styles from '../styles/JokeContainer.module.css'
import Joke from './Joke'

const JokeContainer = ({addJoke, jokeFavorite, deleteJoke}) => {

  const baseUrl = 'https://api.chucknorris.io/jokes/'

  const [joke, setJoke] = useState ([])
  const [categories, setCategories] = useState ('')
  const [input, setInput] = useState ('')

  function getJoke(url = `${baseUrl}/random`) {
    fetch(url)
    .then(date => date.json())    
    .then(joke => joke.result ? setJoke(joke.result) : setJoke([joke]))
}
 
  function searchJoke() {
      let url;

    if (document.querySelector('#from_categories').checked === true) {
      if (!categories) {
        return alert('Select a category!')
      }
        url = `${baseUrl}/random?category=${categories}`
    }
    if (document.querySelector('#search').checked === true) {
      if (!input) {
        return alert('Select a word!')
      }
        url = `${baseUrl}/search?query=${input}`
    }
    getJoke(url)
    setCategories('')
    setInput('')
  }


  return (
    <div className={styles.container}>
       <p>MSI 2020</p> 
       <h2>Hey !</h2>
       <p>Let`s try find a joke for you:</p>
       <FormSearch setInput={setInput} setCategories={setCategories} searchJoke={searchJoke} input={input}/>
       <Joke joke = {joke} addJoke = {addJoke} jokeFavorite={jokeFavorite} deleteJoke={deleteJoke}/>
    </div>
  )
}

export default JokeContainer