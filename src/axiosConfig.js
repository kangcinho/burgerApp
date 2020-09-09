import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burgerapp-8ea80.firebaseio.com/'
})

export default instance