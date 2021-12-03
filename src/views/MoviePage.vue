<template> 
<the-navbar class="special border-b-2 border-green-800"></the-navbar>
<div v-if="isMovieReady" class="flex justify-center items-center h-screen">
  <the-loader></the-loader>
</div>
<div v-else class="lg:flex px-4 pt-24 pb-4 bg-gray-900">
    <div class="mb-4 mr-4 lg:w-2/4 relative">
      <vote-average :rating="movie.vote_average"></vote-average>
  <img class="rounded" :src="preImg" :alt="movie.title">
    </div>
    <div class="lg:w-2/4 ml-4 text-white">
      <h1 class="text-3xl">{{movie.title}}</h1>
    <p>{{movie.overview}}</p>
    <button @click="getTrailer" class="bg-gray-500 p-2 rounded mt-4 mb-2 flex items-center">Watch trailer <fa icon="play-circle" class="ml-1"/></button>
  <!-- Mvoie information -->
     <div class="movie-info">
       <div class="mb-2">
       <h1 class="mb-1">Release date <fa icon="chevron-down" class="ml-2 text-xs" /></h1> 
       <span class="bg-gray-800 rounded p-1 mr-2" >{{movie.release_date}}</span>
     </div>
      <div class="mb-2">
       <h1 class="mb-1">Duration <fa icon="chevron-down" class="ml-2 text-xs" /></h1> 
       <span class="bg-gray-800 rounded p-1 mr-2" >{{movie.runtime}} mins</span>
     </div>
       <div class="mb-2">
       <h1 class="mb-1">Genres <fa icon="chevron-down" class="ml-2 text-xs" /></h1> 
       <span class="bg-gray-800 rounded p-1 mr-2" v-for="genre in movie.genres" :key="genre.id">{{genre.name}}</span>
     </div>
     </div>
  
  <!-- Movie Cast -->
  <div class="cast-box">
  <h1 class="text-white mt-2 font-medium flex items-center">Cast<fa icon="chevron-down" class="ml-2 text-xs" /></h1>
  <div class="flex flex-wrap">
    <div class="m-1 bg-gray-800 rounded p-1" v-for="person in cast" :key="person.id">{{person.name}}</div>
  </div>
    </div>
    </div>    
</div>

<div v-if="showTrailerBox" @click="showTrailerBox = false" class="trailer absolute p-4 max-h-screen bg-black bg-opacity-70 z-20 inset-0">
<trailer-box :trailerId="trailer"></trailer-box>
</div>
</template>

<script>
import api from '@/tmdbapi.js'
import TheNavbar from '@/components/TheNavbar'
import TheLoader from '@/components/UI/TheLoader'
import TrailerBox from '@/components/TrailerBox'
import VoteAverage from '@/components/UI/VoteAverage'
export default {
  components:{
    TheNavbar, TheLoader, TrailerBox, VoteAverage
  },
  data(){
    return{
         movie: {},
         preImg: '',
         showTrailerBox: false,
         trailer: '',
         cast: [],
         
    }
  },
  computed:{
    isMovieReady(){
      return Object.values(this.movie).length === 0
    },
    
  },
  mounted(){
    fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${api}&language=en-EN`)
    .then(res=>res.json())
    .then(data=>{
      this.movie = data
    this.preImg = 'https://image.tmdb.org/t/p/w1280'+data.backdrop_path
    });

    fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}/credits?api_key=${api}&language=en-EN`)
    .then(res=>res.json())
    .then(data=>{
      this.cast = data.cast;
    });

 },
 methods:{
   async getTrailer(){
     const res = await fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}/videos?api_key=${api}&language=en-EN`)
      const data = await res.json();
      if (data.results.length > 0) {
        this.trailer = 'https://www.youtube.com/embed/'+data.results[0].key  
      }
      this.showTrailerBox = true;
   }
 }  

}
</script>

<style scoped>

</style>