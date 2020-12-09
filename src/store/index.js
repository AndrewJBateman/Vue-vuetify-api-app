import Vue from "vue"
import Vuex from "vuex"
import axios from "../plugins/axios"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    countries: [
      {
        name: "United States of America",
        value: "us",
      },
      {
        name: "Great Britain",
        value: "gb",
      },
      {
        name: "France",
        value: "fr",
      },
      {
        name: "Canada",
        value: "ca",
      },
      {
        name: "Germany",
        value: "gr",
      },
    ],
    categories: [
      "business",
      "entertainment",
      "general",
      "health",
      "science",
      "sports",
      "technology",
    ],
  },
  mutations: {},
  actions: {
    async getNews(context, country) {
      let res = await axios({
        url: `/top-headlines?country=${country}`,
        method: "GET",
      })
      return res
    },
  },
})
export default store
