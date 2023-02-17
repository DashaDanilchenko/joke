const ButtonCategories = ({item, setCategories}) => {
  return (
    <button className="button_categories" type="button" onClick={() => setCategories(item)}>{item}</button>
  )
}

export default ButtonCategories