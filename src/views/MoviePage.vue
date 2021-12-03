<template> 
<the-navbar class="special border-b-2 border-green-800"></the-navbar>
<div v-if="isMovieReady" class="flex justify-center items-center h-screen">
  <the-loader></the-loader>
</div>
<div v-else class="lg:flex px-4 pt-24 bg-gray-900 lg:h-screen">
    <div class="mb-4 mr-4 lg:w-2/4">
  <img class="rounded" :src="preImg" :alt="movie.title">
    </div>
    <div class="lg:w-2/4 ml-4 text-white">
      <h1 class="text-3xl">{{movie.title}}</h1>
    <p>{{movie.overview}}</p>
    <button @click="getTrailer" class="bg-gray-500 p-2 rounded mt-4 flex items-center">Смотреть трейлер <fa icon="play-circle" class="ml-1"/></button>
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
export default {
  components:{
    TheNavbar, TheLoader, TrailerBox
  },
  data(){
    return{
         movie: {},
         preImg: '',
         showTrailerBox: false,
         trailer: ''
    }
  },
  computed:{
    isMovieReady(){
      return Object.values(this.movie).length === 0
    }
  },
  mounted(){
    fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${api}&language=ru-RU`)
    .then(res=>res.json())
    .then(data=>{
      this.movie = data
    this.preImg = 'https://image.tmdb.org/t/p/w1280'+data.backdrop_path
    })
 },
 methods:{
   async getTrailer(){
     const res = await fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}/videos?api_key=${api}&language=ru-RU`)
      const data = await res.json();
      console.log(data);
      this.trailer = 'https://www.youtube.com/embed/'+data.results[0].key
      this.showTrailerBox = true;
   }
 }  

}
</script>

<style scoped>

</style>