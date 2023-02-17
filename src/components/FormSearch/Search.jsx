import InputText from "./InputText"

const Search = ({check, setInput, input}) => {
  return (
    <div className="border_radio">
        <label htmlFor="search" className="border_search">
          <label className="radio_buttons">
            <input className="radio" type="radio" id="search" name="search" onClick={() => check("search")}/>
            <span className="on_radio"></span>
          </label>
          Search
        </label>
        <InputText setInput={setInput} input={input}/>
    </div>
  )
}

export default Search