<template>

  <h3 class="mainTitle"><strong>Books List</strong></h3>
  <section class="booksList">
    <div v-for="book in books" :key="book.title" class="books">
      <router-link class="routerLink" to="/book">
        <div class="card-body-read" v-if="book.readBook == true">
          <h5 class="bookRead">Read</h5>
        </div>
        <div class="card-body-no-read" v-if="book.readBook == false">
          <h5 class="noBookRead">No read</h5>
        </div>
        <img @click="dataBook(book)" :src="book.imageLinks.thumbnail" class="imageBook card-img-top" alt="...">
      </router-link>
    </div>
  </section>

</template>

<script>
import { mapState } from 'vuex';

// @ is an alias to /src


export default {

  name: 'homePage',
  components: {
    
  },

  computed: mapState ([
    'books',
    'viewBook'
  ]),

  methods: {
    dataBook (book) {
      this.$store.dispatch('dataBook', book);
    }
  
  }
}

</script>

<style lang="sass">

h3
  padding-top: 5rem
  padding-bottom: 2rem
  text-align: center
.booksList
  display: flex
  flex-wrap: wrap
  gap: 1rem
  max-width: 90%
  margin: 0 auto
  .books
    flex: 1 1 150px // Ajuste o valor conforme necessário para o tamanho desejado das imagens
    display: flex
    justify-content: center
    .readyBook
    .noBookRead
    .imageBook
      height: 200px
      width: 150px
      border-radius: 8%

.routerLink
  text-decoration: none
  &:hover
    .card-body-read
      opacity: 1
      position: absolute
      text-align: center
      background-color: green
      color: white
      padding: .4rem
      width: 6rem
      border-bottom-right-radius: 24%
    .card-body-no-read
      opacity: 1
      position: absolute
      text-align: center
      background-color: red
      color: white
      padding: .4rem
      width: 6rem
      border-bottom-right-radius: 50%

.card-body-read 
  opacity: 0

.card-body-no-read
  opacity: 0
        
</style>