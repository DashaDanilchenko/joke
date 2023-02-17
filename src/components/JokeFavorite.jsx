import CartFavoriteJoke from "./CartFavoriteJoke"

const JokeFavorite = ({jokeFavorite, deleteJoke}) => {
  return (
    <div className="joke_favorite">
       {jokeFavorite.map((item) => <CartFavoriteJoke key={item.id} item = {item} jokeFavorite={jokeFavorite}  deleteJoke = {deleteJoke}/>)}
    </div>
  )
}

export default JokeFavorite