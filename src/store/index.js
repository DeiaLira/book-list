import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    books: [],
    viewBook: [],
    libraryBooks: []
  },

  getters: {
  },

  mutations: {
    loadBooks(state, books) {
      state.books = books;
    },

    dataBook(state, book) {
      state.viewBook = book;
    },

    addToLibrary(state, viewBook) {
      state.libraryBooks.push(viewBook);
      localStorage.setItem("libraryBooks", JSON.stringify(state.libraryBooks));
    },

    removeLibrary(state, bookId) {
      //console.log(alert('Deseja excluir o produto do carrinho?'))
      const updateLibrary = state.libraryBooks.filter(item => bookId != item.id);
      state.libraryBooks = updateLibrary;
      localStorage.setItem("libraryBooks", JSON.stringify(state.libraryBooks));
    },

    loadLibrary(state, book) {
      state.libraryBooks = book;
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

    addToLibrary({commit}, viewBook) {
      commit('addToLibrary', viewBook);
    },

    removeLibrary({commit}, bookId) {
      commit('removeLibrary', bookId);
    },

    loadLibrary({commit}) {
      if(localStorage.getItem("libraryBooks")) {
        commit('loadLibrary', JSON.parse(localStorage.getItem("libraryBooks")));
      }
      
    },
  },
  modules: {
  }
})
