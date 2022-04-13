//! STILL TO DO- 
//! 1) Remove laser after hit alien
//! 2) Moving aliens left and right
//! 3) Start page 

// const rightWall = [15, 31, 47, 63, 79, 95, 111, 127, 143, 159, 175, 191]
// const aliens = document.querySelectorAll('.alien')
// aliens.forEach((alien) => {
//   const index = []
//   index.push(cells.indexOf(alien))
//   console.log(index)
//   removeAllAliens()
//   setInterval(() => {
//     if (rightWall.includes(index.length - 1 )) {
//     for (let i = 0; i < 10; i++) {
//       allAliens[i] -= 1
//   }
//  } else {
//   for (let i = 0; i < 10; i++) {
//     allAliens [i] += 1
//   }
// }
//   addAllAliens()
// }, 500)
// })

const intervalId = setInterval(() => {
  if (numTimesRun === 5) {
    clearInterval(intervalId)
  } else {
    numTimesRun += 1
  }
}, 2000)
// - run code for 2 secs then want to clear and switch direction 


//     for (let i = 0; i < 30; i++) {
//       allAliens[i] += 1
//     }
//     addAllAliens()
//   } else if (rightEdge) {
//     for (let i = 0; i < 30; i++) {
//       allAliens[i] -= 1
//     }
//   }
//   addAllAliens()
  
// }
// setInterval(() => {
//   const laserPosition = document.querySelectorAll('.laser')
//   laserPosition.forEach((laser) => {
//     const allLasers = cells.indexOf(laser)
//     console.log(allLasers)
//     const alienPosition = document.querySelectorAll('.alien')
//     alienPosition.forEach((alien) => {
//       const alltheAliens = cells.indexOf(alien)
//       if (cells[allLasers] === cells[alltheAliens]) {
//         cells[allLasers].classList.remove('alien')
//       }
//     })
//   })

// }, 1000)

// const alien3 = document.querySelectorAll('.parasite')
// alien3.forEach((alien) => {
//   const alienPosition = cells.indexOf(alien)
//   if (laserPosition === alienPosition) {
//     cells[alienPosition].classList.remove('parasite')
//     number += 10
//     cells[alienPosition].classList.remove('laser')
//   }
// })
// const alien2 = document.querySelectorAll('.alien2')
// alien2.forEach((alien) => {
//   const alienPosition = cells.indexOf(alien)
//   if (laserPosition === alienPosition) {
//     cells[alienPosition].classList.remove('alien2')
//     number += 10
//     cells[alienPosition].classList.remove('laser')
//   }
// })
// const aliens = document.querySelectorAll('.alien')
// aliens.forEach((alien) => {
//   const alienPosition = cells.indexOf(alien)
//   if (laserPosition === alienPosition) {
//     // cells[alienPosition].classList.remove('alien')
//     removeAlien1()
//     number += 10
//     cells[alienPosition].classList.remove('laser')
//   }
// })

// setInterval(() => {
//   const aliens = document.querySelectorAll('.alien')
//   const alien2 = document.querySelectorAll('.alien2')
//   const alien3 = document.querySelectorAll('.parasite')

//   aliens.forEach((alien) => {
//     let alienPosition = cells.indexOf(alien)
//     cells[alienPosition].classList.remove('alien')
//     alienPosition += width
//     cells[alienPosition].classList.add('alien')
//     if (alienPosition > 175) {
//       cells[alienPosition].classList.remove('alien')
//     }
//   })

//   alien2.forEach((alien) => {
//     let alienPosition = cells.indexOf(alien)
//     cells[alienPosition].classList.remove('alien2')
//     alienPosition += width
//     cells[alienPosition].classList.add('alien2')
//     if (alienPosition > 175) {
//       cells[alienPosition].classList.remove('alien2')
//     }
//   })
//   alien3.forEach((alien) => {
//     let alienPosition = cells.indexOf(alien)
//     cells[alienPosition].classList.remove('parasite')
//     alienPosition += width
//     cells[alienPosition].classList.add('parasite')
//     if (alienPosition > 175) {
//       cells[alienPosition].classList.remove('parasite')
//     }
//   })

// }, 3000)

  // const parasites = document.querySelectorAll('.parasite')
  // const nachos = document.querySelectorAll('.alien')
  // const alien2s = document.querySelectorAll('.alien2')
  // const allAliens = []
  // parasites.forEach((alien) => {
  //   const parasitePositions = cells.indexOf(alien)
  //   allAliens.push(parseInt(parasitePositions))
  // })
  // nachos.forEach((alien) => {
  //   const parasitePositions = cells.indexOf(alien)
  //   allAliens.push(parseInt(parasitePositions))
  // })
  // alien2s.forEach((alien) => {
  //   const parasitePositions = cells.indexOf(alien)
  //   allAliens.push(parseInt(parasitePositions))
  // })

  // function move(direction) {
  //   switch (direction) {
  //     case 'right': {
  //       if (rowPosition < width - 1) {
  //         cells[alienPosition].classList.remove('alien')
  //         alienPosition += 1
  //         cells[alienPosition].classList.add('alien')
  //       }
  //       break
  //     } 
  //     case 'left': {
  //       if (if (rowPosition > 0) {
  //         cells[alienPosition].classList.remove('alien')
  //         alienPosition -= 1
  //         cells[alienPosition].classList.add('alien')
  //       }
  //       break
  //     }
  //   }  
  //   if (leftWall.includes(alienPosition)) {
  //     direction = 'right'
  //   }
  //   if (rightWall.includes(alienPosition)) {
  //     direction = 'left'
  //   }
  // }

  // move()


// Move aliens left right 
// setInterval(() => {
//   const aliens = document.querySelectorAll('.alien')
//   aliens.forEach((alien) => {
//     let alienPosition = cells.indexOf(alien) 
//     cells[alienPosition].classList.remove('alien')
//     alienPosition -= 1
//     cells[alienPosition].classList.add('alien')
//     if (alienPosition === 0) {
//       alienPosition += 1 
//       cells[alienPosition].classList.add('alien')
//     }
//   })
// }, 1000)

// Move aliens left right 
// setInterval(() => {
//   const aliens = document.querySelectorAll('.alien')
//   aliens.forEach((alien) => {
//     let alienPosition = cells.indexOf(alien) 
//     if (alienPosition === 0) {
//       cells[alienPosition].classList.remove('alien')
//       alienPosition += 1 
//       cells[alienPosition].classList.add('alien')
//     }
//   })
// }, 1000)




// aliens.forEach((alien) => {
//   let alienPosition = cells.indexOf(alien) 
//   cells[alienPosition].classList.remove('alien')
//   alienPosition += width
//   cells[alienPosition].classList.add('alien')
// })

    // setInterval(() => {
    //   const rowPosition = alienPosition % width
    //   if (rowPosition > 0) {
    //     cells[alienPosition].classList.remove('alien')
    //     alienPosition += 1
    //     cells[alienPosition].classList.add('alien')
    //   } else if (rowPosition < width - 1) {
    //     cells[alienPosition].classList.remove('alien')
    //     alienPosition -= 2
    //     cells[alienPosition].classList.add('alien')
    //   }           
    // }, 500)
    // })
        