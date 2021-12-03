<template>
  <div class="max-w-sm rounded overflow-hidden bg-gray-300 shadow-lg mx-auto my-2">
  <img v-if="checkPoster" class="w-full" :src="preImg" alt="Sunset in the mountains">
  <img v-else class="w-full" src="http://www.elizabethlawchambers.com/wp-content/uploads/2019/02/Placeholder-500x500.jpg" alt="Sunset in the mountains">
  
  <div class="px-3 py-4">
    <div class="font-bold text-xl cursor-pointer mb-2" @click="$router.push(`/movies/${movie.id}`)">{{movie.title}}</div>
    <p class="text-gray-800 text-base">{{truncate}}</p>
  </div>
  <div class="px-6 py-4">
    <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">{{movie.release_date}}</span>
  </div>
</div>
</template>

<script>
// import api from '@/tmdbapi.js'
export default {
props:{
        movie:{
            type: Object,
            required: true
        }
},
data(){
    return {
        preImg: 'https://image.tmdb.org/t/p/w500'+this.movie.poster_path,
   }

},
computed:{
    checkPoster(){
        return this.movie.backdrop_path;
    },
    truncate() {
        if (this.movie.overview.length <= 180) {
            return this.movie.overview
        }
            return this.movie.overview.slice(0, 180) + '...'
        }
    }
}
</script>
