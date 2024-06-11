import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    books: [],
    viewBook: []
  },

  getters: {
  },

  mutations: {
    loadBooks(state, books) {
      state.books = books;
    },

    dataBook(state, book) {
      state.viewBook = book;
      localStorage.setItem("viewBook", JSON.stringify(state.viewBook));
    },

    loadBook({commit}) {
      if(localStorage.getItem("viewBook")) {
        commit('viewBook', JSON.parse(localStorage.getItem("viewBook")));
      }
    },
  },

  actions: {
    loadBooks({ commit }) {
      axios
        .get('https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyA4gmz6OiQMvL_rPEEWf1bvVYFWIz3uH0E')
        .then(response => {
          // Mapeia os itens retornados para um array contendo apenas volumeInfo
          const books = response.data.items.map(item => item.volumeInfo);
          return books;
        })
        .then(books => {
          commit('loadBooks', books);
        })
        .catch(error => {
          console.error("Error fetching books:", error);
        });
    },

    dataBook({commit}, book) {
      commit('dataBook', book);
    },
  },
  modules: {
  }
})
