// * Dom Elements
const startButton = document.querySelector('.start')

// startButton.addEventListener('click', startGame)

function gameOver() {
  document.querySelector('.grid').innerHTML = 'Game Over! Your score was: ' + document.querySelector('.scoreNum').innerHTML
}
// function youWin() {
//   document.querySelector('.grid').innerHTML = 'You win!'
// }

// function startGame() {
const grid = document.querySelector('.grid')
const cells = []

// * grid variables
const width = 16
const height = 12
const cellCount = width * height

let shipPosition = 184

function addShip() {
  cells[shipPosition].classList.add('spaceship')
}

function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    cell.textContent = i
    grid.appendChild(cell)
    cells.push(cell)
  }
  addShip()
}
createGrid()


function removeShip() {
  cells[shipPosition].classList.remove('spaceship')
}

// move Spaceship()
document.addEventListener('keydown', (event) => {
  const key = event.code
  removeShip()
  if (key === 'ArrowLeft' && 176 < shipPosition) {
    shipPosition -= 1
  } else if (key === 'ArrowRight' && shipPosition < 191) {
    shipPosition += 1
  }
  addShip()
})

//Add alien
const allAliens = [
  3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
  35, 36, 37, 38, 39, 40, 41, 42, 43, 44]

function addAlien1() {
  for (let i = 0; i < 10; i++) {
    cells[allAliens[i]].classList.add('alien')
  }
}
function addAlien2() {
  for (let i = 10; i < 20; i++) {
    cells[allAliens[i]].classList.add('alien2')
  }
}

function addAlien3() {
  for (let i = 20; i < 30; i++) {
    cells[allAliens[i]].classList.add('parasite')
  }
}

function addAllAliens() {
  addAlien1()
  addAlien2()
  addAlien3()
}
addAllAliens()

function removeAlien1() {
  for (let i = 0; i < 10; i++) {
    cells[allAliens[i]].classList.remove('alien')
  }
}
function removeAlien2() {
  for (let i = 10; i < 20; i++) {
    cells[allAliens[i]].classList.remove('alien2')
  }
}
function removeAlien3() {
  for (let i = 20; i < 30; i++) {
    cells[allAliens[i]].classList.remove('parasite')
  }
}
function removeAllAliens() {
  removeAlien1()
  removeAlien2()
  removeAlien3()
}


let direction = 1
let goingRight = true

const move = setInterval(() => {
  const leftWall = allAliens[0] % width === 0
  const rightWall = allAliens[allAliens.length - 1] % width === 15
  
  removeAllAliens()
  if (rightWall && goingRight) {
    for (let i = 0; i < allAliens.length; i++) {
      allAliens[i] += width + 1
      direction = -1
      goingRight = false
    }
  }
  if (leftWall && !goingRight) {
    for (let i = 0; i < allAliens.length; i++) {
      allAliens[i] += width - 1
      direction = 1
      goingRight = true
    }
  }
  for (let i = 0; i < allAliens.length; i++) {
    allAliens[i] += direction
  }
  addAllAliens()
}, 500)


function moveDown() {
  removeAllAliens()
  for (let i = 0; i < 30; i++) {
    allAliens[i] += width
  }
  addAllAliens()
}

//Shoot and kill aliens
let number = 0
document.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    const shipPos = document.querySelector('.spaceship')
    let laserPosition = cells.indexOf(shipPos) - width
    cells[laserPosition].classList.add('laser')
    const score = document.querySelector('.scoreNum')
    setInterval(() => {
      cells[laserPosition].classList.remove('laser')
      laserPosition -= width
      cells[laserPosition].classList.add('laser')
      if (cells[laserPosition].classList.contains('alien') ||
        cells[laserPosition].classList.contains('alien2') ||
        cells[laserPosition].classList.contains('parasite')) {
        cells[laserPosition].classList.remove('alien')
        cells[laserPosition].classList.remove('alien2')
        cells[laserPosition].classList.remove('parasite')
        cells[laserPosition].classList.remove('laser')
        number += 10
      }
       
    }, 500)
    
    score.innerHTML = number
  }
  
})

// function moveLaser() {
//   setInterval(() => {
//     cells[laserPosition].classList.remove('laser')
//     laserPosition -= width
//     cells[laserPosition].classList.add('laser')
//     // if (cells[laserPosition].classList.contains('alien') ||
//     //   cells[laserPosition].classList.contains('alien2') ||
//     //   cells[laserPosition].classList.contains('parasite')) {
//     //   cells[laserPosition].classList.remove('alien')
//     //   cells[laserPosition].classList.remove('alien2')
//     //   cells[laserPosition].classList.remove('parasite')
//     //   cells[laserPosition].classList.remove('laser')
//       // clearInterval()
//       number += 10

//   }, 500)



// function dropBomb

setInterval(() => {

  function randomAlien(allAliens) {
    return allAliens[Math.floor(Math.random() * allAliens.length)]
  }
  let bombPosition = randomAlien(allAliens)
  bombPosition += width
  if (cells[bombPosition].classList !== 'parasite' || cells[bombPosition].classList !== 'alien' || cells[bombPosition].classList !== 'alien2') {
    cells[bombPosition].classList.add('bomb')
    setInterval(() => {
      cells[bombPosition].classList.remove('bomb')
      bombPosition += width
      cells[bombPosition].classList.add('bomb')
      if (shipPosition === bombPosition) {
        cells[shipPosition].classList.remove('spaceship')
        return gameOver();
        //!GAMEOVER
      }
      if (bombPosition > 190) {
        cells[bombPosition].classList.remove('bomb')
      }
    }, 1000)
  }
}, 1000)

// }

