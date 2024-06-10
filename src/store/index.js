import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    books: []
  },

  getters: {
  },

  mutations: {
    loadBooks(state, books) {
      state.books = books;
      console.log(books);
    },
  },

  actions: {
    loadBooks({commit}) {
      axios
      .get('https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyA4gmz6OiQMvL_rPEEWf1bvVYFWIz3uH0E')
    .then(response => {
        return response.data.items[0].volumeInfo;
      }).then(response => {
          commit('loadBooks', response);
       })
    } 
  },
  modules: {
  }
})
