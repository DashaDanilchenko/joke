import FromCategories from "./FromCategories"
import Random from "./Random"
import Search from "./Search"

const FormSearch = () => {


  function uncheck() {
    document.getElementById("random").checked = false;
    document.getElementById("from_categories").checked = false;
    document.getElementById("search").checked = false;
  }

  function check(id) {
    uncheck()
    document.getElementById(`${id}`).checked = true;
    console.log(`${id}`)
  }
  
  
  return (
    <form>
       <Random check={check} />
       <FromCategories check={check} />
       <Search check={check} />
       <button type="button">Get a joke</button>
    </form>
  )
}

export default FormSearch