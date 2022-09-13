export const inputInput = document.querySelector('.input')

export let joke = {}
export let arrJoke = []

export async function jokeRandom() {
    joke = await fetch('https://api.chucknorris.io/jokes/random')
    .then(date => date.json())
}

export async function jokeCaterogies(category) {
    joke = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then(date => date.json())
}

export async function seeWord() {
    let word = inputInput.value
    await jokeWord(word)
}

async function jokeWord(query) {
    await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
    .then(date => date.json())
    .then(date => {arrJoke = date.result})
}