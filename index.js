// intialize the count as 0co
let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
function increment() {
    count += 1
    countEl.innerHTML = count
}

function save() {
    console.log(count)
}
