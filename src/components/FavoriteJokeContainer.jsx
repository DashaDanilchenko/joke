
import styles from '../styles/FavoriteJokeContainer.module.css'
import JokeFavorite from "./JokeFavorite"
import LabelFavorite from './LabelFavorite'

const FavoriteJokeContainer = ({jokeFavorite, deleteJoke, setFavoriteContainer, favoriteContainer}) => {

  return (
    <div className={`${styles.favorite} ${favoriteContainer? styles.block_screen: styles.none}`}>
      <p className={styles.favorite_text}>Favorite</p>
      <div className={styles.label_container}>
        <LabelFavorite setFavoriteContainer={setFavoriteContainer} favoriteContainer={favoriteContainer}/>
      </div>
      <JokeFavorite jokeFavorite = {jokeFavorite} deleteJoke ={ deleteJoke}/>
    </div>
  )
}

export default FavoriteJokeContainer