<template>
  <div class="books">
    <ul v-for="book in books" :key="book.title">
      <li>{{ book.title }}</li>
    </ul>
  </div>
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