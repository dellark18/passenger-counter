// intialize the count as 0co
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
function increment() {
    count += 1
    countEl.innerHTML = count
}

function save() {
    let countStr = count + " - "
    saveEl.innerHTML += countStr
    countEl.innerHTML = 0
    count = 0
}
 