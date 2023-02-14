import CartJoke from "./CartJoke"


const Joke = ({joke, addJoke, jokeFavorite}) => {
  return (
    <div>
      {joke.map((item) => <CartJoke key={item.id} item = {item} addJoke = {addJoke} jokeFavorite={jokeFavorite} joke = {joke}/>)}
    </div>
  )
}

export default Joke