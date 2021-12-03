<template>
     <div>
         <the-navbar></the-navbar>
         <div class="content mt-16 p-4">
         <the-movie-list  :movielist="foundMovies"></the-movie-list>
         </div>
     </div>
</template>

<script>
import api from '@/tmdbapi.js'
import TheMovieList from '@/components/TheMovieList'
import TheNavbar from '@/components/TheNavbar'

export default {
    components:{
        TheMovieList, TheNavbar
    },
data(){
        return {
            foundMovies: []
        }
    },
    async mounted(){
         const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-EN&query=${this.$route.params.name}`)
            const data = await res.json();
            this.foundMovies = data.results;
    this.$watch(
      () => this.$route.params,
      async () => {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-EN&query=${this.$route.params.name}`)
        const data = await res.json();
        this.foundMovies = data.results;
      }
    )
     }
}
</script>

<style>

</style>