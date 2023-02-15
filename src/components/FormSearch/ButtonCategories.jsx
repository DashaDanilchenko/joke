const ButtonCategories = ({item, setCategories}) => {
  return (
    <button type="button" onClick={() => setCategories(item)}>{item}</button>
  )
}

export default ButtonCategories