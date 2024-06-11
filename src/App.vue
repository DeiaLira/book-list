<template>

<navMenu />
  
</template>

<script>
import navMenu from './components/navMenu.vue';
//import footerBasic from './components/footerBasic.vue'

export default {
  name: 'App',
  components: {
    navMenu,
    //footerBasic
  },

  created() {
    this.$store.dispatch('loadBooks');
  }
}

</script>

<style lang="sass">

</style>
