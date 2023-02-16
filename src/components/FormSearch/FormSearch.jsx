import FromCategories from "./FromCategories"
import Random from "./Random"
import Search from "./Search"



const FormSearch = ({setCategories, setInput, input}) => {

  function addNone() {
    document.querySelector("#btn_container").classList.add("none")
    document.querySelector("#input_container").classList.add("none")
  }

  function uncheck() {
    document.getElementById("random").checked = false;
    document.getElementById("from_categories").checked = false;
    document.getElementById("search").checked = false;
  }

  function check(id) {
    uncheck()
    addNone()
    document.getElementById(`${id}`).checked = true;

    if (id === "from_categories") {
      document.querySelector("#btn_container").classList.remove("none")
    } 

    if (id === "search") {
      document.querySelector("#input_container").classList.remove("none")
    } 
  }
  
  return (
    <form>
       <Random check={check} />
       <FromCategories check={check} setCategories={setCategories}/>
       <Search check={check} setInput={setInput} input={input}/>
    </form>
  )
}

export default FormSearch