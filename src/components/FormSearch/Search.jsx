const Search = ({check}) => {
  return (
    <div>
        <input type="radio" id="search" name="search" onClick={() => check("search")}/>
        <label for="search">Search</label>
    </div>
  )
}

export default Search