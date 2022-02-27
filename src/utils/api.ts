import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER as string,
  withCredentials: true,
})

export default api
