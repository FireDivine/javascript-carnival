// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')
let cellsArray = document.getElementsByTagName('td')
//let randomIndex="", randomIndex=""
let mole = document.createElement('img')
mole.src = 'mole.png'
mole.id = 'mole'
let count = 0
let counter = document.getElementById('count')
counter.innerHTML = 'Count: ' + count
console.log(cellsArray.length)

function assign() {
  randomIndex = RandomMoleCell(cellsArray.length - 1)
  randomCell = cellsArray[randomIndex]
  showMole()
}
var randomIndex = RandomMoleCell(cellsArray.length - 1)
var randomCell = cellsArray[randomIndex]
console.log(randomCell)
showMole()

for (let i = 0; i < cellsArray.length; i++) {
  cellsArray[i].onclick = whackedMole
}
//5x5 grid
//store ref to the cells in the table

/*randomly select a cell for a mole to appear */
function RandomMoleCell(max) {
  return (bob = Math.floor(Math.random() * max))
}

function showMole() {
  // let mole = document.createElement('img')
  // mole.src = 'mole.png'
  // mole.id = 'mole'
  randomCell.appendChild(mole)
}
function whackedMole(e) {
  let gotta = e.target
  var audio = new Audio()
  audio.src = 'whack-audio.wav'
  audio.play()

  counter.innerHTML = 'Count:' + ++count
  // console.log('gotta')
  randomCell.removeChild(mole)
  assign()
}
