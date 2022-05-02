import notInBoth from "./utilities/difference.js"

const arrayOne = [1, 2, 3]
const arrayTwo = [2, 3, 4]

const p = document.querySelector("#target")

p.textContent = `The difference between ${arrayOne} and ${arrayTwo} is ${notInBoth(arrayOne, arrayTwo)}`