import { useState } from "react"
import FromCategories from "./FromCategories"
import Random from "./Random"
import Search from "./Search"



const FormSearch = () => {

  const baseUrl = 'https://api.chucknorris.io/jokes/'

  const [arrJoke, setArrJoke] = useState ([])
  const [joke, setJoke] = useState ({})

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
      getJoke(`${baseUrl}/random`)
    }
    if (id === "from_categories") {
      document.querySelector("#btn_container").classList.remove("none")
      getJoke(`${baseUrl}/random?category=sport`)
    } 
    if (id === "search") {
      document.querySelector("#input_container").classList.remove("none")
      getArrJoke(`${baseUrl}/search?query=stop`)
    } 
  }

  function getJoke(url) {
    fetch(url)
        .then(date => date.json())    
        .then(joke => setJoke(joke))
  }

  console.log(joke)


  function getArrJoke(url) {
    fetch(url)
        .then(date => date.json())    
        .then(joke => setArrJoke(joke))
  }

  console.log(arrJoke)
  
  
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