
import JokeFavorite from "./JokeFavorite"
import LabelFavorite from "./LabelFavorite"

const FavoriteJokeContainer = ({jokeFavorite, deleteJoke}) => {
  return (
    <div>
      <LabelFavorite />
      <JokeFavorite jokeFavorite = {jokeFavorite} deleteJoke ={ deleteJoke}/>
    </div>
  )
}

export default FavoriteJokeContainer