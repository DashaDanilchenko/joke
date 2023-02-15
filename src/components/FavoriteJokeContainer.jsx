import styles from '../styles/FavoriteJokeContainer.module.css'
import JokeFavorite from "./JokeFavorite"
import LabelFavorite from "./LabelFavorite"

const FavoriteJokeContainer = ({jokeFavorite, deleteJoke}) => {
  return (
    <div className={styles.favorite}>
      <LabelFavorite />
      <JokeFavorite jokeFavorite = {jokeFavorite} deleteJoke ={ deleteJoke}/>
    </div>
  )
}

export default FavoriteJokeContainer