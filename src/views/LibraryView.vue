<template>

  <h3 class="mainTitle">My Library</h3>
  <section class="booksList">
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
  
    }
  }
</script>
  
<style lang="sass">
  
  
</style>