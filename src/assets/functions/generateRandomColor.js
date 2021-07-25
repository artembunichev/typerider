const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
const getColorFromFirstLetter = (firstLetter) => {
  let r, b, g, color
  r = getRandom(128, 251)
  if (r === 251) {
    let randomNumber = getRandom(1, 2)
    if (randomNumber === 1) {
      g = getRandom(128, 251)
      b = 128
    } else {
      g = 128
      b = getRandom(128, 251)
    }
  } else if (r > 128) {
    let randomNumber = getRandom(1, 2)
    if (randomNumber === 1) {
      g = 251
      b = 128
    } else {
      g = 128
      b = 251
    }
  } else if (r === 128) {
    let randomNumber = getRandom(1, 2)
    if (randomNumber === 1) {
      g = getRandom(128, 251)
      b = 251
    } else {
      g = 251
      b = getRandom(128, 251)
    }
  }
  if (firstLetter === 1) {
    color = `rgb(${r},${g},${b})`
  } else if (firstLetter === 2) {
    color = `rgb(${g},${b},${r})`
  } else if (firstLetter === 3) {
    color = `rgb(${b},${g},${r})`
  } else if (firstLetter === 4) {
    color = `rgb(${b},${r},${g})`
  } else if (firstLetter === 5) {
    color = `rgb(${r},${b},${g})`
  } else {
    color = `rgb(${g},${r},${b})`
  }
  return color
}

export const generateRandomColor = () => {
  let color
  const firstLetter = getRandom(1, 6)
  color = getColorFromFirstLetter(firstLetter)
  return color
}
