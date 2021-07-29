export const wordFormConverter = (word, number) => {
  let wordForm
  if (number === 1) {
    wordForm = word
  } else {
    wordForm = `${word}s`
  }
  return wordForm
}
