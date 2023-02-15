import CartJoke from "./CartJoke"


const Joke = ({joke, addJoke, jokeFavorite, deleteJoke}) => {
  return (
    <div>
      {joke.map((item) => <CartJoke key={item.id} item = {item} addJoke = {addJoke} jokeFavorite={jokeFavorite} joke = {joke} deleteJoke = {deleteJoke}/>)}
    </div>
  )
}

export default Joke