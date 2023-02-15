import InputText from "./InputText"

const Search = ({check, setInput, input}) => {
  return (
    <div>
        <label>
        <input type="radio" id="search" name="search" onClick={() => check("search")}/>
          Search</label>
        <InputText setInput={setInput} input={input}/>
    </div>
  )
}

export default Search