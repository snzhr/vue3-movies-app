<template>
<div class="main">
<the-navbar></the-navbar>
<div class="content">
<the-genres class="mt-10"></the-genres>
<the-movie-list  :movielist="movies"></the-movie-list>
</div>
</div>
</template>

<script>
import TheMovieList from '@/components/TheMovieList'
import TheGenres from '@/components/TheGenres'
import TheNavbar from '@/components/TheNavbar'
import api from './tmdbapi.js'
export default {
  components:{
    TheMovieList, TheGenres, TheNavbar
  },
  data(){
    return {
        movies: []
    }
  },
  mounted(){
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=ru-Ru&page=1`)
    .then(response => response.json())
    .then(data =>{
      this.movies = data.results;
      // console.log(data.results)
    })
  }

}
</script>

<style>
.content{
  padding: 1em;
}
</style>
