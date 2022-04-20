// * Dom Elements
const startButton = document.querySelector('.start')

startButton.addEventListener('click', startGame)

function startGame() {
  createGrid()
  console.log('hello')
  setInterval(move, 600)
  document.addEventListener('keydown', killAliens)
  setInterval(dropBomb, 1500)
  addAllAliens()
}

function gameOver() {
  document.querySelector('.grid').innerHTML = 'Game Over!   Your score was: ' + number
  clearInterval(move)
  clearInterval(dropBomb)
  removeAllAliens()
  removeShip()
}

const nextButton = document.createElement('div')


function youWin() {
  document.querySelector('.grid').innerHTML = 'You win! Would you like to challenge the boss?'
  nextButton.innerHTML = "Challenge me"
  grid.appendChild(nextButton)
  clearInterval(move)
  clearInterval(dropBomb)
  removeShip()
  removeAllAliens()
}

const grid = document.querySelector('.grid')
const cells = []

// * grid variables
let width = 16
let height = 12
let cellCount = width * height

let shipPosition = 184

function addShip() {
  cells[shipPosition].classList.add('spaceship')
}

function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    grid.appendChild(cell)
    // cell.innerHTML =
    cells.push(cell)
  }
  addShip()
}


function removeShip() {
  cells[shipPosition].classList.remove('spaceship')
}

//move Spaceship()
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
const deadAliens = []

function addAllAliens() {
  const addAlien1 = () => {
    for (let i = 0; i < 10; i++) {
      if (!deadAliens.includes(i)) {
        cells[allAliens[i]].classList.add('alien')
      }
    }
  }
  const addAlien2 = () => {
    for (let i = 10; i < 20; i++) {
      if (!deadAliens.includes(i)) {
        cells[allAliens[i]].classList.add('alien2')
      }
    }
  }
  const addAlien3 = () => {
    for (let i = 20; i < 30; i++) {
      if (!deadAliens.includes(i)) {
        cells[allAliens[i]].classList.add('parasite')
      }
    }
  }
  addAlien1()
  addAlien2()
  addAlien3()
}


function removeAllAliens() {
  const removeAlien1 = () => {
    for (let i = 0; i < 10; i++) {
      cells[allAliens[i]].classList.remove('alien')
    }
  }
  const removeAlien2 = () => {
    for (let i = 10; i < 20; i++) {
      cells[allAliens[i]].classList.remove('alien2')
    }

  }
  const removeAlien3 = () => {
    for (let i = 20; i < 30; i++) {
      cells[allAliens[i]].classList.remove('parasite')
    }
  }
  removeAlien1()
  removeAlien2()
  removeAlien3()
}

let direction = 1
let goingRight = true

const move = () => {
  const leftWall = allAliens[0] % width === 0
  const rightWall = allAliens[allAliens.length - 1] % width === 15
  const floor = allAliens[allAliens.length - 1] / height > 14.7

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
  if (floor) {
    gameOver()
  }
  for (let i = 0; i < allAliens.length; i++) {
    allAliens[i] += direction
  }
  addAllAliens()
}


//Shoot and kill aliens
let number = 0


function killAliens(event) {
  console.log(event.code)
  if (event.code === 'KeyW') {
    const shipPos = document.querySelector('.spaceship')
    let laserPosition = cells.indexOf(shipPos) - width
    cells[laserPosition].classList.add('laser')
    const score = document.querySelector('.score')
    const shoot = setInterval(() => {
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
        const posAlien = allAliens.indexOf(laserPosition)
        deadAliens.push(posAlien)
        clearInterval(shoot)
        number += 10
        console.log(deadAliens)
      }
      if (deadAliens.length === 30) {
        youWin()
      }
    }, 500)
    score.innerHTML = "Score: " + number
  }
}


// function dropBomb

const dropBomb = () => {

  function randomAlien(allAliens) {
    let numbers = allAliens[Math.floor(Math.random() * allAliens.length)] 
    if (numbers > allAliens.length * (2 / 3)) {
      return numbers
    }
  }

  let bombPosition = randomAlien(allAliens)
  bombPosition += width
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
    if (bombPosition > cells.length) {
      cells[bombPosition].classList.remove('bomb')
    }
  }, 900)

}

//! level 2

nextButton.addEventListener('click', startLevel2)

function startLevel2() {
  cells.splice(0, cells.length)
  width = 16
  height = 17
  cellCount = width * height
  shipPosition = 264
  console.log('hello')
  createGrid()
  addBigAlien()
  setInterval(moveBA, 500)
  document.addEventListener('keydown', killBigAlien)
  setInterval(dropMoreBomb, 2000)
}

//grid variables

//! need to declare new left wall and right wall 
// document.addEventListener('keydown', (event) => {
//   const key = event.code
//   removeShip()
//   if (key === 'ArrowLeft' && 256 < shipPosition) {
//     shipPosition -= 1
//   } else if (key === 'ArrowRight' && shipPosition < 271) {
//     shipPosition += 1
//   }
//   addShip()
// })

const bigAlien = [
  6, 12, 23, 27, 38, 39, 40, 41, 42, 43, 44, 
  53, 54, 56, 57, 58, 60, 61, 
  68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 
  84, 86, 87, 88, 89, 90, 91, 92, 94, 
  100, 102, 108, 110, 
  119, 120, 122, 123]
const deadBigAlien = []

function addBigAlien() {
  for (let i = 0; i < bigAlien.length; i++) {
    if (!deadBigAlien.includes(i)) {
      cells[bigAlien[i]].classList.add('bigAlien')
    }
  } 
}


function removeBigAlien() {
  for (let i = 0; i < bigAlien.length; i++) {
    cells[bigAlien[i]].classList.remove('bigAlien')
  }
}

const moveBA = () => {
  const leftWall = bigAlien[0] % width === 0
  const rightWall = bigAlien[bigAlien.length - 1] % width === 15
  const floor = bigAlien[bigAlien.length - 1] / height > 16

  removeBigAlien()
  if (rightWall && goingRight) {
    for (let i = 0; i < bigAlien.length; i++) {
      bigAlien[i] += width + 1
      direction = -1
      goingRight = false
    }
  }
  if (leftWall && !goingRight) {
    for (let i = 0; i < bigAlien.length; i++) {
      bigAlien[i] += width - 1
      direction = 1
      goingRight = true
    }
  }
  if (floor) {
    gameOver()
  }
  for (let i = 0; i < bigAlien.length; i++) {
    bigAlien[i] += direction
  }
  addBigAlien()
}

function killBigAlien(event) {
  console.log(event.code)
  if (event.code === 'KeyW') {
    const shipPos = document.querySelector('.spaceship')
    let laserPosition = cells.indexOf(shipPos) - width
    cells[laserPosition].classList.add('laser')
    const score = document.querySelector('.score')
    const shoot = setInterval(() => {
      cells[laserPosition].classList.remove('laser')
      laserPosition -= width
      cells[laserPosition].classList.add('laser')
      if (cells[laserPosition].classList.contains('bigAlien')) {
        cells[laserPosition].classList.remove('bigAlien')
        const posAlien = bigAlien.indexOf(laserPosition)
        deadBigAlien.push(posAlien)
        clearInterval(shoot)
        number += 15
      }
      // if (deadBigAlien.length === 47) {
      //   youWin()
      // }
    }, 500)
    score.innerHTML = "Score: " + number
  }
}

const dropMoreBomb = () => {

  function randomAlien(bigAlien) {
    let numbers = bigAlien[Math.floor(Math.random() * bigAlien.length)]
    if (numbers > bigAlien.length * (5 / 6)) {
      return numbers
    }
  }
  let bombPosition = randomAlien(bigAlien)
  bombPosition += width
  cells[bombPosition].classList.add('bomb')
  setInterval(() => {
    cells[bombPosition].classList.remove('bomb')
    bombPosition += width
    cells[bombPosition].classList.add('bomb')
    if (shipPosition === bombPosition) {
      cells[shipPosition].classList.remove('spaceship')
      // return gameOver();
      //!GAMEOVER
    }
    if (bombPosition > 272) {
      cells[bombPosition].classList.remove('bomb')
    }
  }, 500)
}