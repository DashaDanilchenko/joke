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

let searchedJokes = []

export function reset() {
    btnOff.remove()
    arrBtn.forEach(btn => btn.classList.remove('on'))
    caterogies.classList.add('collapse')
    searchInput.classList.add('collapse')
    searchedJokes = []
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
    searchedJokes = await getJoke(url)
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
    const cards =  searchedJokes.map(createJokeCard)
    containerCards.innerHTML = ''
    containerCards.append(...cards)

}

function isFavorite(jokeId) {
    return !!favoritesJokes.find(({id}) => id === jokeId)
}
export  function renderFavoritesJokes() {
     const cards =  favoritesJokes.map(createJokeCard)
    containerCardsLike.innerHTML = ''
    containerCardsLike.append(...cards)
    const b = document.querySelector('.celebrity')
}

function saveFavoriteJokes() {
    localStorage.setItem('favoritesJokes', JSON.stringify(favoritesJokes))
}

document.addEventListener("DOMContentLoaded",  function(){
    if (storage) {
        favoritesJokes = storage 
         renderFavoritesJokes()
    }
   })

const btnDelete = document.querySelector('.remove')

function clearContainer () {
    favoritesJokes = []
    storage = []
     renderFavoritesJokes()
}
   btnDelete.addEventListener('click', clearContainer)
