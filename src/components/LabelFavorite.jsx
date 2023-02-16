import { useState } from 'react'
import { BiX, BiMenu } from 'react-icons/bi'
import styles from '../styles/LabelFavorite.module.css'

  const LabelFavorite = ({setFavoriteContainer}) => {
  const [close, setClose] = useState(true)

  function closeBtn() {
    setClose(true)
    setFavoriteContainer(false)
  }

  function menuBtn() {
    setClose(false)
    setFavoriteContainer(true)
  }

  return (
    <div className={styles.favorite_btn}>
      <div
        className={`${styles.btn} ${close ? styles.none : ''}`}
        onClick={() => closeBtn()}
      >
        <BiX />
      </div>
      <div
        className={`${styles.btn} ${close ? '' : styles.none}`}
        onClick={() => menuBtn()}
      >
        <BiMenu />
      </div>
      <p className={styles.favorite_text}>Favorite</p>
    </div>
  )
}

export default LabelFavorite
