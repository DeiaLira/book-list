<template>

  <h3 class="mainTitle">Books List</h3>
  <section class="booksList">
    <div v-for="book in books" :key="book.title" class="books">
      <img :src="book.imageLinks.thumbnail" class="imageBook img-thumbnail" alt="...">
          <!--<div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ book.title }}</h5>
              <p class="card-text">{{ book.description }}</p>
              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>-->
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
    'books'
  ]),

  methods: {

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
    .imageBook
      height: 200px
      width: 150px
      border-radius: 8%


</style>