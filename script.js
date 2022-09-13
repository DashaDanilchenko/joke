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

const btnRandom = document.querySelector('#random')
const btnCaterogies = document.querySelector('#from_caterogies')
const btnWord = document.querySelector('#word')

const arrBtn = [btnRandom, btnCaterogies, btnWord]

const caterogies = document.querySelector('.caterogies')
const inputInput = document.querySelector('.input')

const btnOff = document.createElement('div')
btnOff.classList.add('off_radio')

const btnJoke = document.querySelector('.btn_joke')

btnRandom.addEventListener('click', activeRandom)
btnCaterogies.addEventListener('click', activeCaterogies)
btnWord.addEventListener('click', activeWord)
btnJoke.addEventListener('click', createJoke)

let arrAllJoke = []

function reset() {
    btnOff.remove()
    arrBtn.forEach(btn => btn.classList.remove('on'))
    caterogies.classList.add('collapse')
    inputInput.classList.add('collapse')
    arrAllJoke = []
    createCard()
}

function activeRandom() {
    reset()
    btnRandom.append(btnOff)
    btnRandom.classList.add('on')
}

function activeCaterogies() {
    reset()
    btnCaterogies.append(btnOff)
    btnCaterogies.classList.add('on')
    caterogies.classList.remove('collapse')
}

const arrCaterogies = caterogies.querySelectorAll('div')

let  category
function seeCaterogie() {
    category = this.innerHTML
    arrCaterogies.forEach(c => c.classList.remove('caterogies_hover'))
    this.classList.add('caterogies_hover')
}

arrCaterogies.forEach(c => c.addEventListener('click', seeCaterogie))

function activeWord() {
    reset()
    btnWord.append(btnOff)
    btnWord.classList.add('on')
    inputInput.classList.remove('collapse')
}

let joke = {}
let arrJoke = []

async function jokeRandom() {
    joke = await fetch('https://api.chucknorris.io/jokes/random')
    .then(date => date.json())
}

async function jokeCaterogies(category) {
    joke = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then(date => date.json())
}

async function seeWord() {
    let word = inputInput.value
    await jokeWord(word)
}

async function jokeWord(query) {
    await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
    .then(date => date.json())
    .then(date => {arrJoke = date.result})
    console.log(arrJoke)
}

async function searchJoke() {
    if (btnRandom.className.includes('on')) {
       await jokeRandom()
       arrAllJoke.push(joke)
    }
    if (btnCaterogies.className.includes('on')) {
        if (!category) {
            alert('Select a category!')
        }
       await jokeCaterogies(category)
       arrAllJoke.push(joke)
    }
    if (btnWord.className.includes('on')) {
       await seeWord()
       arrAllJoke = arrJoke
    }
}

async function createJoke() {
    event.preventDefault()
    await searchJoke()
    await createCard()
}

const containerCards = document.querySelector('.container_cards')
const containerCardsLike = document.querySelector('.container_cards_like')
const containerCardsLikesave = document.querySelector('.container_cards_save')
let arrLikeJoke = []
let storage = JSON.parse(localStorage.getItem('arrLikeJoke')) || []

function arrAllLikeJoke() {
    arrLikeJoke.forEach(jokel => {
        storage.forEach(jokeSt => {
            if(jokel !== jokeSt) {
                arrLikeJoke.push(jokeSt)  
            }
        })
    })
}

async function createCard() {
   
    containerCards.innerHTML = `${
        arrAllJoke.map((i) => {
            let created = new Date(String(i.created_at))
            let hours = parseInt((Date.now() - created) / (1000 * 60 * 60), 10)
          return `<div class="card">
          <div class="icon">
              <div class="circle"><i class="fa-sharp fa-solid fa-comment gray"></i></div>
          </div>
          <div class="info">    
          <div class="hard icon_hard ${i.id}">
          <i class="fa-regular fa-heart like red" id="${i.id}"></i>
          <i class="fa-solid fa-heart no_like red delete" id="${i.id}"></i>
          </div>
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

    const arrBtnLike = document.querySelectorAll('.like')
    arrBtnLike.forEach(i => i.addEventListener('click', pushArrLike)) 

    const arrBtnNotLike = document.querySelectorAll('.no_like')
    arrBtnNotLike.forEach(i => i.addEventListener('click', deleteArrLike))
}

async function pushArrLike() {
    this.nextElementSibling.classList.remove('delete')
    this.classList.add('delete')
    arrAllJoke.forEach(joke => {
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

async function createCardLike() {containerCardsLike.innerHTML = `${
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