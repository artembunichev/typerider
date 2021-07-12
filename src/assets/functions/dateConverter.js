export const dateConverter = (date) => {
  const gameDate = new Date(date)
  const day = gameDate.getDate()
  const month = gameDate.getMonth() + 1
  const year = gameDate.getFullYear()
  const hours = gameDate.getHours()
  const minutes = gameDate.getMinutes()
  return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${year},${
    hours < 10 ? `0${hours}` : hours
  }:${minutes < 10 ? `0${minutes}` : minutes}`
}
