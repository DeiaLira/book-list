<template>

    <h3 class="mainTitle">{{ viewBook.title }}</h3>
    <section class="bookInfo" :class="{inLibrary : isInLibrary(viewBook)}">
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
            <button v-if="!isInLibrary(viewBook)" @click="addToLibrary(viewBook)" type="button" class="btn btn-dark">Add to Library</button>
            <button v-if="isInLibrary(viewBook)" type="button" class="btn btn-danger" @click="removeLibrary(viewBook.id)">Remove from Library</button>
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
    'viewBook', 'libraryBooks'
  ]),
  
  methods: {  
    addToLibrary(viewBook) {
      this.$store.dispatch('addToLibrary', viewBook);
    },
        
    removeLibrary(bookId) {
      if (confirm('Deseja retirar o livro da biblioteca?')) {
        this.$store.dispatch('removeLibrary', bookId);
      }
    },

    isInLibrary(viewBook) {
      return this.libraryBooks.find(item => item.id == viewBook.id);
    }
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