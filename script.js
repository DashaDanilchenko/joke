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
}

function activeCaterogies() {
    reset()
    btnCaterogies.append(btnOff)
    btnCaterogies.classList.add('on')
    caterogies.classList.remove('collapse')
}

function activeWord() {
    reset()
    btnWord.append(btnOff)
    btnWord.classList.add('on')
    inputInput.classList.remove('collapse')
}

btnRandom.addEventListener('click', activeRandom)
btnCaterogies.addEventListener('click', activeCaterogies)
btnWord.addEventListener('click', activeWord)