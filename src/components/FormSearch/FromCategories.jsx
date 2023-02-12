const FromCategories = ({check}) => {
  return (
    <div>
        <input type="radio" id="from_categories" name="from_categories" onClick={() => check("from_categories")}/>
        <label for="from_categories">from Categories</label>
    </div>
  )
}

export default FromCategories