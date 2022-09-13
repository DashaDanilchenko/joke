import {reset} from './script.js'
import {inputInput} from './api.js'

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