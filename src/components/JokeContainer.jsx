import FormSearch from './FormSearch/FormSearch'
import styles from '../styles/JokeContainer.module.css'
import Joke from './Joke'

const JokeContainer = () => {
  return (
    <div className={styles.container}>
       <p>MSI 2020</p> 
       <h2>Hey !</h2>
       <p>Let`s try find a joke for you:</p>
       <FormSearch />
       <Joke />
    </div>
  )
}

export default JokeContainer