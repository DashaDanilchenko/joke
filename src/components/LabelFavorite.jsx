
import { BiX, BiMenu } from 'react-icons/bi'
import styles from '../styles/LabelFavorite.module.css'

  const LabelFavorite = ({setOnStyles, onStyles}) => {

  function closeBtn() {
    setOnStyles(false)
  }

  function menuBtn() {
    setOnStyles(true)
  }

  return (
    <div className={styles.favorite_btn}>
      <div
        className={`${styles.btn} ${onStyles ? '' : styles.none}`}
        onClick={() => closeBtn()}
      >
        <BiX />
      </div>
      <div
        className={`${styles.btn} ${onStyles ? styles.none : ''}`}
        onClick={() => menuBtn()}
      >
        <BiMenu />
      </div>
      <p className={styles.favorite_text}>Favorite</p>
    </div>
  )
}

export default LabelFavorite
