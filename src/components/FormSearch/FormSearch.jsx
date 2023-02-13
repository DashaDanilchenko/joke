import { useState } from "react"
import FromCategories from "./FromCategories"
import Random from "./Random"
import Search from "./Search"



const FormSearch = () => {

  const baseUrl = 'https://api.chucknorris.io/jokes/'

  const [joke, setJoke] = useState ([])
  const [categoriesInput, setCategoriesInput] = useState ('')


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
    if (id === "random") {
      getJoke()
    }
    if (id === "from_categories") {
      document.querySelector("#btn_container").classList.remove("none")
      getJoke(`${baseUrl}/random?category=sport`)
    } 
    if (id === "search") {
      document.querySelector("#input_container").classList.remove("none")
      getJoke(`${baseUrl}/search?query=stop`)
    } 
  }

 function getJoke(url = `${baseUrl}/random`) {
    fetch(url)
    .then(date => date.json())    
    .then(joke => joke.result ? joke.result : setJoke(joke))
}

  console.log(joke)

  function look (str) {
    setCategoriesInput(str)
  }

  console.log(categoriesInput)
  
  
  return (
    <form>
       <Random check={check} />
       <FromCategories check={check} look={look}/>
       <Search check={check} look={look}/>
       <button type="button">Get a joke</button>
    </form>
  )
}

export default FormSearch