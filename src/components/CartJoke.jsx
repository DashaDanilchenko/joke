import { BiMessageAltDetail, BiHeart, BiChevronRight } from "react-icons/bi"
import styles from '../styles/CartJoke.module.css'

const CartJoke = (item, {addJoke, joke}) => {

    const { created_at, id, url, value, categories } = item
    let created = new Date(String(created_at))
    let hours = parseInt((Date.now() - created) / (1000 * 60 * 60), 10)

  return (
   
       <div className={styles.card}>
          <div className={styles.icon}>
              <div className={styles.circle}><BiMessageAltDetail/></div>
          </div>
          <div className={styles.info}>    
          <div className={styles.hard}>
          <button type="button" className={styles.like_button} onClick = {() => console.log(joke)}>
          <BiHeart className={styles.red} id={id}/> 
           {/* {!!jokeFavorite.find((i) => i.id === id)
                ? <BiHeart className={styles.red} id={id}/> 
                : <BiHeart id={id}/>  
            } */}
          </button>
          </div>
              <div className={styles.id}>ID: <a href={url}>{id}</a>
                  <BiChevronRight/>
              </div>
              <div className={styles.text}>{value}</div>
                  <div className={styles.text_info}>   
                       <div className={styles.date}>Last update: <span>{hours} hours ago</span></div>                        
                       <div className={styles.celebrity}>{categories}</div>
                   </div>
               </div> 
           </div> 
    
  )
}

export default CartJoke