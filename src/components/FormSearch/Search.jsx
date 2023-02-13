import InputText from "./InputText"

const Search = ({check, look}) => {
  return (
    <div>
        <label>
        <input type="radio" id="search" name="search" onClick={() => check("search")}/>
          Search</label>
        <InputText look={look}/>
    </div>
  )
}

export default Search