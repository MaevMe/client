import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.maev.me',
  withCredentials: true,
})

export default api
