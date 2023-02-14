import CartJoke from "./CartJoke"


const Joke = ({joke}) => {
  return (
    <div>
      {joke.map((item) => <CartJoke key={item.id} {...item}/>)}
    </div>
  )
}

export default Joke