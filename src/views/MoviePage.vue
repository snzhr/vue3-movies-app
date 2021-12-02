<template>
  <!-- <h1>Hello World {{ $route.params.id}}</h1> -->
  <div class="single-movie-page">
     
  </div>  
</template>

<script>
import api from '@/tmdbapi.js'
export default {
  data(){
    return{
         movie: {}
    }
  },
  mounted(){
    fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${api}&language=ru-RU`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })
 }  

}
</script>

<style>

</style>