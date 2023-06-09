import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json',
  },
  params: {
    api_key: import.meta.env.VITE_API_KEY,
  },
})
