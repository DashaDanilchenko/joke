import { BiHeart } from "react-icons/bi"
import styles from '../styles/CartJoke.module.css'

const CartFavoriteJoke = ({item, jokeFavorite, deleteJoke}) => {

    const { id, value, categories } = item

  return (

    <div className={styles.card}>
    <div className={styles.info}>    
    <div className={styles.hard}>
    <button type="button" className={styles.like_button}>
        <BiHeart className={styles.red} onClick = {() => deleteJoke(jokeFavorite, id)}/>        
    </button>
    </div>
        <div className={styles.text}>{value}</div>
            <div className={styles.text_info}>                           
                 {!!`${categories}` && <div className={styles.celebrity}>{categories}</div>}
             </div>
         </div> 
     </div> 
  )
}

export default CartFavoriteJoke