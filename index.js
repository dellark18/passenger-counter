// let bonusPoints = 50
// bonusPoints = bonusPoints + 50

// console.log(bonusPoints)

// intialize the count as 0
let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
function increment() {
    count = count + 1
    countEl.innerHTML = count
}
// change the count-el in the HTML to reflect the new count
