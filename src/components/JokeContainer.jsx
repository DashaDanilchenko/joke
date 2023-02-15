import { useState } from "react"
import FormSearch from './FormSearch/FormSearch'
import styles from '../styles/JokeContainer.module.css'
import Joke from './Joke'

const JokeContainer = ({addJoke, jokeFavorite, deleteJoke}) => {

  const baseUrl = 'https://api.chucknorris.io/jokes/'

  const [joke, setJoke] = useState ([])
  const [categoriesInput, setCategoriesInput] = useState ('')

  function look (str) {
    setCategoriesInput(str)
  }

  console.log(categoriesInput)

  function getJoke(url = `${baseUrl}/random`) {
    fetch(url)
    .then(date => date.json())    
    .then(joke => joke.result ? setJoke(joke.result) : setJoke([joke]))
}

  console.log(joke)

  
  function searchJoke() {

    if (document.querySelector('#random').checked !== true) {
      if (!categoriesInput) {
        console.log('Select a category!')
      }
  }
    let url;

    if (document.querySelector('#from_categories').checked === true) {
        url = `${baseUrl}/random?category=${categoriesInput}`
    }
    if (document.querySelector('#search').checked === true) {
        url = `${baseUrl}/search?query=${categoriesInput}`
    }
    getJoke(url)
  }


  return (
    <div className={styles.container}>
       <p>MSI 2020</p> 
       <h2>Hey !</h2>
       <p>Let`s try find a joke for you:</p>
       <FormSearch look={look} searchJoke={searchJoke}/>
       <Joke joke = {joke} addJoke = {addJoke} jokeFavorite={jokeFavorite} deleteJoke={deleteJoke}/>
    </div>
  )
}

export default JokeContainer