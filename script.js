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

let arrLikeJoke = []
let storage = JSON.parse(localStorage.getItem('arrLikeJoke')) || []

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
          <i class="fa-regular fa-heart like red" id="${id}"></i>
          <i class="fa-solid fa-heart no_like red delete" id="${id}"></i>
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
    const btnLike = template.querySelector('.like')
    btnLike.addEventListener('click', () => {
        arrLikeJoke.push(joke)
        createCardLike()
})
    console.log(template.innerHTML)
    console.log(btnLike)
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

    const arrBtnNotLike = document.querySelectorAll('.no_like')
    arrBtnNotLike.forEach(i => i.addEventListener('click', deleteArrLike))
}

const favoritesJokes = [] // если меняется, то отрисовать новый и шутку тоже пометить лайком
async function pushArrLike() {
    this.nextElementSibling.classList.remove('delete')
    this.classList.add('delete')
    arrAllJoke.forEach(joke => { // joke это шутка в массиве всех шуток
        for(let key in joke) {
            if(joke[key] === this.id) {
                arrLikeJoke.push(joke)
            }
        }
    })
    await saveMemory()
    await createCardLike()
}

async function deleteArrLike() {
    this.previousElementSibling.classList.remove('delete')
    this.classList.add('delete')
    arrLikeJoke.filter(joke => {
        for(let key in joke) {
            if(joke[key] === this.id) {
                const index = arrLikeJoke.indexOf(joke)
                arrLikeJoke.splice(index, 1)
            }
        }
    })
    await saveMemory()
    await createCardLike()
}

export async function createCardLike() {
    console.log(arrLikeJoke)
    containerCardsLike.innerHTML = `${
    arrLikeJoke.map((i) => {
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
    
    arrLikeJoke.filter(joke => {
        for(let key in joke) {
            if(joke[key] === this.id) {
                const index = arrLikeJoke.indexOf(joke)
                arrLikeJoke.splice(index, 1)
            }
        }
    })
    await saveMemory()
    await createCardLike()
}

async function saveMemory() {
    localStorage.setItem('arrLikeJoke', JSON.stringify(arrLikeJoke))
}

document.addEventListener("DOMContentLoaded",async function(){
    if (storage) {
        arrLikeJoke = storage 
        await  createCardLike()
    }
   })

const btnDelete = document.querySelector('.remove')

async function clearContainer () {
    arrLikeJoke = []
    storage = []
    await  createCardLike()
}
   btnDelete.addEventListener('click', clearContainer)
