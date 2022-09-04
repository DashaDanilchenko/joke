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
btnJoke.addEventListener('click', createJoke)

function createJoke() {
    event.preventDefault()
    createCard(joke)
}

let joke = {}

function reset() {
    btnOff.remove()
    arrBtn.forEach(btn => btn.classList.remove('on'))
    caterogies.classList.add('collapse')
    inputInput.classList.add('collapse')
}

function activeRandom() {
    reset()
    btnRandom.append(btnOff)
    btnRandom.classList.add('on')
    jokeRandom()
}

async function jokeRandom() {
    joke = await fetch('https://api.chucknorris.io/jokes/random')
    .then(date => date.json())

}

const arrCaterogies = caterogies.querySelectorAll('div')

let  category
function seeCaterogie() {
    category = this.innerHTML
    arrCaterogies.forEach(c => c.classList.remove('caterogies_hover'))
    this.classList.add('caterogies_hover')
    jokeCaterogies(category)
}

arrCaterogies.forEach(c => c.addEventListener('click', seeCaterogie))

function activeCaterogies() {
    reset()
    btnCaterogies.append(btnOff)
    btnCaterogies.classList.add('on')
    caterogies.classList.remove('collapse')
}

async function jokeCaterogies(category) {
    joke = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then(date => date.json())
}

function activeWord() {
    reset()
    btnWord.append(btnOff)
    btnWord.classList.add('on')
    inputInput.classList.remove('collapse')
}

async function seeWord() {
    let word = this.value
    await jokeWord(word)
}

inputInput.addEventListener('mouseout', seeWord)
async function jokeWord(query) {
    await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
    .then(date => date.json())
    .then(date => {
        let num = Math.random()*1000
        let index = date.total 
        let i = Math.ceil(num%index)
        joke = date.result[i]
    })
}

btnRandom.addEventListener('click', activeRandom)
btnCaterogies.addEventListener('click', activeCaterogies)
btnWord.addEventListener('click', activeWord)

const containerCards = document.querySelector('.container_cards')

function createCard({created_at, id, url, value, categories}) {
    const card = document.createElement('div')
    containerCards.append(card)
    let created = new Date(String(created_at))
    let hours = parseInt((Date.now() - created) / (1000 * 60 * 60 * 24), 10)
    card.innerHTML = `<div class="card">
    <div class="icon">
        <div class="circle"><i class="fa-sharp fa-solid fa-comment gray"></i></div>
    </div>
    <div class="info">    
        <div class="hard"><i class="fa-regular fa-heart red"></i></div>
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
const b = card.querySelector('.celebrity')
if (b.innerHTML === '') {
    b.classList.add('collapse') 
    }
}
