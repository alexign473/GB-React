import axios from 'axios'

export const animeApi = axios.create({
    baseURL: 'https://animechan.vercel.app/api/',
})
