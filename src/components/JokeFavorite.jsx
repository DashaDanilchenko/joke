import CartFavoriteJoke from "./CartFavoriteJoke"

const JokeFavorite = ({jokeFavorite, deleteJoke}) => {
  return (
    <div>
       {jokeFavorite.map((item) => <CartFavoriteJoke key={item.id} item = {item} jokeFavorite={jokeFavorite}  deleteJoke = {deleteJoke}/>)}
    </div>
  )
}

export default JokeFavorite