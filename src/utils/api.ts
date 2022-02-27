import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.SERVER as string,
  withCredentials: true,
})

export default api
