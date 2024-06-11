<script>

//import { mapState } from 'vuex';
  
  export default {
    name: 'navMenu',
    components: {
      
    }

    //computed: mapState ([
    //'products', 'bagProducts'
    //]),

  }

</script>

<template>

<nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="navContent container-fluid">
    <router-link class="routerLink" to="/">Books</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Books</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <router-link class="routerLink" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="routerLink" to="/library">Minha biblioteca</router-link>
          </li>
          <li class="nav-item">
            <router-link class="routerLink" to="/about">About</router-link>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
<router-view/>

</template>

<style lang="sass">

.navContent
  max-width: 95%
  .offcanvas
    opacity: .8
  .routerLink
    text-decoration: none
    color: #ffffff
    font-size: 1.1rem


  
</style>