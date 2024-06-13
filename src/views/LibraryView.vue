<template>

  <h3 class="mainTitle"><strong>My Library</strong></h3>
  <section class="booksList">
    <div class="info" v-if="libraryBooks.length == 0">
      <h5>No books in the library!</h5>
    </div>
    <div v-for="book in libraryBooks" :key="book.title" class="books">
      <router-link class="routerLink" to="/book"><img @click="dataBook(book)" :src="book.imageLinks.thumbnail" class="imageBook img-thumbnail" alt="..."></router-link>
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
  
    name: 'libraryPage',
    components: {
      
    },
  
    computed: mapState ([
      'libraryBooks'
    ]),
  
    methods: {
      dataBook (book) {
      this.$store.dispatch('dataBook', book);
    }

    }
  }
</script>
  
<style lang="sass" scope>
  
.info
  margin: 0 auto
  
</style>