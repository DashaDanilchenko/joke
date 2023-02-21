
import styles from '../styles/FavoriteJokeContainer.module.css'
import JokeFavorite from "./JokeFavorite"
import LabelFavorite from './LabelFavorite'

const FavoriteJokeContainer = ({jokeFavorite, deleteJoke, setOnStyles, onStyles}) => {

  return (
    <div className={`${styles.favorite} ${onStyles? '': styles.none}`}>
      <p className={styles.favorite_text}>Favorite</p>
      <div className={styles.label_container}>
        <LabelFavorite setOnStyles={setOnStyles} onStyles={onStyles}/>
      </div>
      <JokeFavorite jokeFavorite = {jokeFavorite} deleteJoke ={ deleteJoke}/>
    </div>
  )
}

export default FavoriteJokeContainer