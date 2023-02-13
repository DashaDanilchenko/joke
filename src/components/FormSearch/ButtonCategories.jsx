const ButtonCategories = ({item, look}) => {
  return (
    <button type="button" onClick={() => look(item)}>{item}</button>
  )
}

export default ButtonCategories