// const state = {
//     getJokeUrl: ``
// }

export async function getJoke() {
    return await fetch(state.getJokeUrl)
    .then(date => date.json())    
}

export async function getRandomJoke() {
   return await fetch('https://api.chucknorris.io/jokes/random')
    .then(date => date.json())
}

export async function getJokeByCategory(category) {
    return  await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then(date => date.json())
}

export async function getJokeBySearch(query) {
    return await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
    .then(data => data.json())
    .then(({result}) =>  result)
}
