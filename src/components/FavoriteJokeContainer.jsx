
import styles from '../styles/FavoriteJokeContainer.module.css'
import JokeFavorite from "./JokeFavorite"
import LabelFavorite from './LabelFavorite'

const FavoriteJokeContainer = ({jokeFavorite, deleteJoke, setFavoriteContainer, favoriteContainer}) => {

  return (
    <div className={`${styles.favorite} ${favoriteContainer? '': styles.none}`}>
      <p className={styles.favorite_text}>Favorite</p>
      <LabelFavorite setFavoriteContainer={setFavoriteContainer}/>
      <JokeFavorite jokeFavorite = {jokeFavorite} deleteJoke ={ deleteJoke}/>
    </div>
  )
}

export default FavoriteJokeContainer