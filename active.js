import {reset, searchInput} from './script.js'

export const btnRandom = document.querySelector('#random')
export const btnCaterogies = document.querySelector('#from_caterogies')
export const btnWord = document.querySelector('#word')

export const arrBtn = [btnRandom, btnCaterogies, btnWord]

btnRandom.addEventListener('click', activeRandom)
btnCaterogies.addEventListener('click', activeCaterogies)
btnWord.addEventListener('click', activeWord)

export const caterogies = document.querySelector('.caterogies')

export const btnOff = document.createElement('div')
btnOff.classList.add('off_radio')

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

export let  category
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
        searchInput.classList.remove('collapse')
    }
