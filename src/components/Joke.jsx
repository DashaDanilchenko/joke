import CartJoke from "./CartJoke"


const Joke = ({joke}, {addJoke}) => {
  return (
    <div>
      {joke.map((item) => <CartJoke key={item.id} {...item} addJoke = {addJoke} joke = {joke}/>)}
    </div>
  )
}

export default Joke