import InputText from "./InputText"

const Search = ({check}) => {
  return (
    <div>
        <label>
        <input type="radio" id="search" name="search" onClick={() => check("search")}/>
          Search</label>
        <InputText />
    </div>
  )
}

export default Search