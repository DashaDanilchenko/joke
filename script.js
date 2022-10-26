import { arrBtn, caterogies, category, btnOff, btnRandom, btnCaterogies, btnWord} from './active.js'
import {   getJoke} from './api.js'
import { baseUrl } from './config';

export const searchInput = document.querySelector('.input')
const jokeSearch = document.querySelector('.search')
const jokeFavourite = document.querySelector('.favourite')

const btnSee = document.querySelector('.see_favourite')
const btnClose = document.querySelector('.close_favourite')

btnSee.addEventListener('click', seeFavourite)
btnClose.addEventListener('click', closeFavourite)

function seeFavourite() {
    jokeSearch.classList.add('joke_search')
    jokeFavourite.classList.remove('none_average')
}
function closeFavourite() {
    jokeSearch.classList.remove('joke_search')
    jokeFavourite.classList.add('none_average')
}

const btnJoke = document.querySelector('.btn_joke')

btnJoke.addEventListener('click', createJoke)

let arrAllJoke = []

export function reset() {
    btnOff.remove()
    arrBtn.forEach(btn => btn.classList.remove('on'))
    caterogies.classList.add('collapse')
    searchInput.classList.add('collapse')
    arrAllJoke = []
    renderJokes()
}

async function searchJoke() {
    let url;
    if (btnCaterogies.className.includes('on')) {
        if (!category) {
            alert('Select a category!')
        }
        url = `${baseUrl}/random?category=${category}`
    }
    if (btnWord.className.includes('on')) {
        const searchQuery = searchInput.value
        url = `${baseUrl}/search?query=${searchQuery}`
    }
    arrAllJoke = await getJoke(url)
}

async function createJoke() {
    event.preventDefault()
    await searchJoke()
    await renderJokes()
}

const containerCards = document.querySelector('.container_cards')
const containerCardsLike = document.querySelector('.container_cards_like')

let favoritesJokes = []
let storage = JSON.parse(localStorage.getItem('favoritesJokes')) || []

function toggleFavorite(joke) {
     if (isFavorite(joke.id)) {
            favoritesJokes = favoritesJokes.filter(({id}) => id !== joke.id)
        } else {
            favoritesJokes.push(joke)
        }
}

function toggleFavoriteAndRenderJokes(joke) {
        toggleFavorite(joke)
        saveFavoriteJokes()
        renderFavoritesJokes()
        renderJokes()
}

function createJokeCard(joke) {
    const { created_at, id, url, value, categories } = joke
    let created = new Date(String(created_at))
    let hours = parseInt((Date.now() - created) / (1000 * 60 * 60), 10)
    const template = document.createElement('div')
    template.innerHTML = `<div class="card">
          <div class="icon">
              <div class="circle"><i class="fa-sharp fa-solid fa-comment gray"></i></div>
          </div>
          <div class="info">    
          <div class="hard icon_hard ${id}">
          <button class="like-button">
            ${
            isFavorite(id)
              ? '<i class="fa-solid fa-heart no_like red" id="${id}"></i>'
              : '<i class="fa-regular fa-heart like red" id="${id}"></i>' 
             }
          </button>
          </div>
              <div class="id">ID: <a href="${url}">${id}</a>
                  <i class="fa-solid fa-arrow-up-right-from-square blue"></i>
              </div>
              <div class="text">${value}</div>
              <div class="text_info">   
                  <div class="date">Last update: <span>${hours} hours ago</span></div>                        
                  <div class="celebrity">${categories}</div>
              </div>
          </div> 
      </div> `
    const btnLike = template.querySelector('.like-button')
    btnLike.addEventListener('click', () => toggleFavoriteAndRenderJokes(joke))
    return template.firstChild}

export function renderJokes() {
    const cards =  arrAllJoke.map(createJokeCard)
    containerCards.innerHTML = ''
    containerCards.append(...cards)

const b = document.querySelector('.celebrity')
if (b.innerHTML === '') {
    b.classList.add('collapse') 
    }

    // const arrBtnLike = document.querySelectorAll('.like')
    // arrBtnLike.forEach(i => i.addEventListener('click', pushArrLike)) 

    // const arrBtnNotLike = document.querySelectorAll('.no_like')
    // arrBtnNotLike.forEach(i => i.addEventListener('click', deleteArrLike))
}

 // если меняется, то отрисовать новый и шутку тоже пометить лайком
async function pushArrLike() {
    this.nextElementSibling.classList.remove('delete')
    this.classList.add('delete')
    arrAllJoke.forEach(joke => { // joke это шутка в массиве всех шуток
        for(let key in joke) {
            if(joke[key] === this.id) {
                favoritesJokes.push(joke)
            }
        }
    })
     saveFavoriteJokes()
    await renderFavoritesJokes()
}

async function deleteArrLike() {
    this.previousElementSibling.classList.remove('delete')
    this.classList.add('delete')
    favoritesJokes.filter(joke => {
        for(let key in joke) {
            if(joke[key] === this.id) {
                const index = favoritesJokes.indexOf(joke)
                favoritesJokes.splice(index, 1)
            }
        }
    })
     saveFavoriteJokes()
    await renderFavoritesJokes()
}

function isFavorite(jokeId) {
    return !!favoritesJokes.find(({id}) => id === jokeId)
}
export async function renderFavoritesJokes() {
    console.log(favoritesJokes)
    containerCardsLike.innerHTML = `${
    favoritesJokes.map((i) => {
        let created = new Date(String(i.created_at))
        let hours = parseInt((Date.now() - created) / (1000 * 60 * 60), 10)
      return `<div class="card">
      <div class="icon">
          <div class="circle"><i class="fa-sharp fa-solid fa-comment gray"></i></div>
      </div>
      <div class="info">    
          <div class="hard" ><i class="fa-solid fa-heart del_like red" id="${i.id}"></i></div>
          <div class="id">ID: <a href="${i.url}">${i.id}</a>
              <i class="fa-solid fa-arrow-up-right-from-square blue"></i>
          </div>
          <div class="text">${i.value}</div>
          <div class="text_info">   
              <div class="date">Last update: <span>${hours} hours ago</span></div>                        
              <div class="celebrity">${i.categories}</div>
          </div>
      </div> 
  </div> `}).join('') 
}`
const b = document.querySelector('.celebrity')
if (b.innerHTML === '') {
    b.classList.add('collapse') 
    }

    const arrBtnNotLike = document.querySelectorAll('.del_like')
    arrBtnNotLike.forEach(i => i.addEventListener('click', deleteArrLikeFavor))
}

async function deleteArrLikeFavor() {
    let indexHeard = this.id
    const arrHeard = document.querySelectorAll('.icon_hard')
    arrHeard.forEach(i => {
        if (i.className.includes(indexHeard)) {
            i.firstElementChild.classList.remove('delete')
            
            i.lastElementChild.classList.add('delete')
        }
    })
    
    favoritesJokes.filter(joke => {
        for(let key in joke) {
            if(joke[key] === this.id) {
                const index = favoritesJokes.indexOf(joke)
                favoritesJokes.splice(index, 1)
            }
        }
    })
     saveFavoriteJokes()
    await renderFavoritesJokes()
}

function saveFavoriteJokes() {
    localStorage.setItem('favoritesJokes', JSON.stringify(favoritesJokes))
}

document.addEventListener("DOMContentLoaded",async function(){
    if (storage) {
        favoritesJokes = storage 
        await  renderFavoritesJokes()
    }
   })

const btnDelete = document.querySelector('.remove')

async function clearContainer () {
    favoritesJokes = []
    storage = []
    await  renderFavoritesJokes()
}
   btnDelete.addEventListener('click', clearContainer)
