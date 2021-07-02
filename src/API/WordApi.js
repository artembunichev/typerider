import axios from 'axios'

export const WordApi = {
  getRandomWords: (number) => {
    return axios.get(`https://random-word-api.herokuapp.com//word?number=${number}`).then((response) => {
      return response.data
    })
  },
}
