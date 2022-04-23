// * Dom Elements


const startButton = document.querySelector('.start')

startButton.addEventListener('click', startGame)

function startGame() {
  setInterval(move, 800)
  document.addEventListener('keydown', killAliens)
  setInterval(dropBomb, 2500)
}

function gameOver() {
  document.querySelector('.grid').innerHTML = 'Game Over!   Your score was: ' + number
  clearInterval(move)
  clearInterval(dropBomb)
  removeAllAliens()
  removeShip() 
  body.classList.add('gameover')
}

const nextButton = document.createElement('div')
nextButton.innerHTML = 'Level 2 Start'
const nextLevel = document.querySelector('.nextLevel')

function youWin() {
  nextLevel.innerHTML = 'You win! Would you like to challenge the boss?'
  nextLevel.appendChild(nextButton)
  deadAliens.push('1')
  end = true
  clearInterval(move)
  clearInterval(dropBomb)
  removeAllAliens()
}

const body = document.querySelector('body')

function finalWin() {
  grid.innerHTML = 'Was too easy anyway'
  body.classList.add('end')
}

const grid = document.querySelector('.grid')
const cells = []

// * grid variables
const width = 16
const height = 15
const cellCount = width * height

let shipPosition = 232

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
createGrid()

function removeShip() {
  cells[shipPosition].classList.remove('spaceship')
}

//move Spaceship()

document.addEventListener('keydown', (event) => {
  const key = event.code
  removeShip()
  if (key === 'ArrowLeft' && 224 < shipPosition) {
    shipPosition -= 1
  } else if (key === 'ArrowRight' && shipPosition < 239) {
    shipPosition += 1
  }
  addShip()
})


//Add alien
const allAliens = [
  3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
  35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  67, 68, 69, 70, 71, 72, 73, 74, 75, 76
]
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
  const addAlien4 = () => {
    for (let i = 30; i < 40; i++) {
      if (!deadAliens.includes(i)) {
        cells[allAliens[i]].classList.add('pink')
      }
    }
  }
  const addAlien5 = () => {
    for (let i = 40; i < allAliens.length; i++) {
      if (!deadAliens.includes(i)) {
        cells[allAliens[i]].classList.add('turq')
      }
    }
  }
  addAlien1()
  addAlien2()
  addAlien3()
  addAlien4()
  addAlien5()
}
addAllAliens()

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
  const removeAlien4 = () => {
    for (let i = 30; i < 40; i++) {
      cells[allAliens[i]].classList.remove('pink')
    }
  }
  const removeAlien5 = () => {
    for (let i = 40; i < allAliens.length; i++) {
      cells[allAliens[i]].classList.remove('turq')
    }
  }
  removeAlien1()
  removeAlien2()
  removeAlien3()
  removeAlien4()
  removeAlien5()
}

let direction = 1
let goingRight = true

const move = () => {
  const leftWall = allAliens[0] % width === 0
  const rightWall = allAliens[allAliens.length - 1] % width === 15
  const floor = allAliens[allAliens.length - 1] / height > 14.9

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
  if (floor && end === false) {
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
        cells[laserPosition].classList.contains('parasite') ||
        cells[laserPosition].classList.contains('turq') ||
        cells[laserPosition].classList.contains('pink')) {
        cells[laserPosition].classList.remove('alien')
        cells[laserPosition].classList.remove('alien2')
        cells[laserPosition].classList.remove('parasite')
        cells[laserPosition].classList.remove('laser')
        cells[laserPosition].classList.remove('pink')
        cells[laserPosition].classList.remove('turq')
        const posAlien = allAliens.indexOf(laserPosition)
        deadAliens.push(posAlien)
        clearInterval(shoot)
        number += 10
      }
      if (deadAliens.length === 50) {
        youWin()
        clearInterval(dropBomb)
        removeAllAliens()
      }
    }, 500)
    if (deadAliens.length === 50) {
      clearInterval(shoot)
    }
    score.innerHTML = "Score: " + number
  }
}

let end = false 

// function dropBomb
const removedBombs = []
const dropBomb = () => {
  function randomAlien(allAliens) {
    let numbers = allAliens[(Math.floor(Math.random() * allAliens.length))]
    return numbers
  }

  if (end === true) {
    return
  } else {
  
    let bombPosition = randomAlien(allAliens)
    if ((bombPosition < cells.length) && (!(removedBombs.includes(bombPosition)))) {
      cells[bombPosition].classList.add('bomb')
    }
    setInterval(() => {
      if ((bombPosition < cells.length) && (!(removedBombs.includes(bombPosition)))) {

        cells[bombPosition].classList.remove('bomb')
        bombPosition += width
        if ((bombPosition < cells.length) && (!(removedBombs.includes(bombPosition)))) {
          cells[bombPosition].classList.add('bomb')
        }
        if (shipPosition === bombPosition && end === false) {
          cells[shipPosition].classList.remove('spaceship')
          return gameOver()
        }
      } else if (bombPosition > cells.length) {
        removedBombs.push(cells[bombPosition])
      }
      //   //!GAMEOVER
    }, 700)
  }
}

//! level 2

nextButton.addEventListener('click', startLevel2)

function startLevel2() {
  nextLevel.innerHTML = ''
  addBigAlien()
  setInterval(moveBA, 500)
  document.addEventListener('keydown', killBigAlien)
  setInterval(dropMoreBomb, 2000)
}

//grid variables

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
  const floor = bigAlien[bigAlien.length - 1] / height >= 15

  removeBigAlien()
  for (let i = 0; i < bigAlien.length; i++) {
    bigAlien[i] += 1
  }
  // if (floor) {
  //   gameOver()
  // }
  addBigAlien()
}

function killBigAlien(event) {
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
        cells[laserPosition].classList.remove('laser')
        const posAlien = bigAlien.indexOf(laserPosition)
        deadBigAlien.push(posAlien)
        clearInterval(shoot)
        number += 15
      }
      if (deadBigAlien.length === 46) {
        finalWin()
      }
    }, 500)
    score.innerHTML = "Score: " + number
  }
}
// console.log(bigAlien.length)
const dropMoreBomb = () => {

  function randomAlien(bigAlien) {
    let numbers = bigAlien[(Math.floor(Math.random() * bigAlien.length))]
    return numbers
  }
  let bombPosition = randomAlien(bigAlien)
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
  }, 500)
}

