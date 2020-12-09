// axios set up below - used to make HTTP request
// require("dotenv").config();
import axios from "axios"
let baseURL = `https://newsapi.org/v2`
let apiKey = process.env.VUE_APP_API_KEY
const instance = axios.create({
  baseURL: baseURL,
  timeout: 30000,
  headers: {
    "X-Api-Key": apiKey,
  },
})
console.log(process.env.VUE_APP_API_KEY)
export default instance
