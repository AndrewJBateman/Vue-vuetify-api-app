// axios set up below - used to make HTTP request

import axios from "axios"
let baseURL = `https://newsapi.org/v2`
let apiKey = process.env.API_KEY
const instance = axios.create({
  baseURL: baseURL,
  timeout: 30000,
  headers: {
    "X-Api-Key": apiKey,
  },
})
export default instance
