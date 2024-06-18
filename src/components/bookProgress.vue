<script>


export default {

    props: ['libraryBooks', 'booksRead'],

    name: 'bookProgress',
    components: {
      
    },


    //computed: mapState ([
    //'products', 'bagProducts'
    //]),

  }

</script>

<template>

    <section class="bookProgress">
        <h5>Books Progress</h5>
        <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <h6>{{`${1} de ${libraryBooks.length} lidos`}}</h6>
    </section>

</template>

<style lang="sass" scope>

.bookProgress
    padding-top: 1rem
    padding-bottom: 1rem
    text-align: center
    .progress
        max-width: 50%
        margin: 0 auto
        margin-top: 1rem
        margin-bottom: 1rem


</style>