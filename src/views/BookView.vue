<template>

    <h3 class="mainTitle">{{ viewBook.title }}</h3>
    <section class="bookInfo">
        <div class="mainImage">
            <img :src="viewBook.imageLinks.thumbnail" class="imageBook img-thumbnail" alt="...">
        </div>
        <div class="bookDetails">
            <ul class="mainInfo">
                <li> <strong>Substitle:</strong> {{ viewBook.subtitle }}</li>
                <li><strong>Author:</strong> {{ viewBook.authors[0] }}</li>
            </ul>
            <p><strong>Description:</strong> {{ viewBook.description }}</p>
        </div>
        <div class="addLibrary">
            <button type="button" class="btn btn-dark">Add to Library</button>
        </div>
    </section>
    
  
</template>
  
  <script>
  import { mapState } from 'vuex';
  
  // @ is an alias to /src
  
  
  export default {
  
    name: 'bookPage',
    components: {
      
    },
  
    computed: mapState ([
      'viewBook'
    ]),
  
    methods: {  
        
    }
  }
  
  </script>
  
<style lang="sass" scope>

h3
  padding-top: 5rem

.mainImage
  display: flex
  justify-content: center
  padding-bottom: 1rem
  .imageBook
    height: 300px
    width: 220px
    border-radius: 8%

.bookDetails
  max-width: 90%
  margin: 0 auto
  .mainInfo
    list-style: none
    border-radius: 2%
    background-color: #A9A9A9
    padding: 1rem

.addLibrary
  display: flex
  justify-content: center
  margin: 2rem
  .btn
    width: 80%
    
           
</style>