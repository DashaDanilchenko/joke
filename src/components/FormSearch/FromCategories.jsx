import { useEffect, useState } from "react"
import ButtonCategories from "./ButtonCategories"

const FromCategories = ({check, setCategories}) => {

  const [categoriesArr, setCategoriesArr] = useState ([])
  const [error, setError] = useState ('')
  const [isLoading, setIsLoading] = useState (true)

  useEffect  (() => {
    fetch('https://api.chucknorris.io/jokes/categories')
    .then(data => data.json())
    .then(data => setCategoriesArr(data))
    .catch(error => setError(error.massage))
    .finally(() => setIsLoading(false))
  }, [])

  if (error) {
    return <h1>Error: {error}</h1>
}

  return (
    <div>
        <label>
          <input type="radio" id="from_categories" name="from_categories" onClick={() => check("from_categories")}/>
        from Categories</label>
        <div className="none" id="btn_container">
          {(isLoading && <h1>Loading...</h1>) ||  categoriesArr.map((item, index) => <ButtonCategories key={index} item={item} setCategories={setCategories}/>)}
        </div>
    </div>
  )
}

export default FromCategories