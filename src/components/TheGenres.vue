<template>
  <div class="flex sticky justify-between overflow-y-hidden sm:overflow-x-scroll
  py-4">
      <div class="flex-none rounded cursor-pointer p-2 mr-3 bg-gray-200" 
      v-for="genre in genres" :key="genre.id"
      
      >{{genre.name}}</div>
  </div>
</template>

<script>
import api from '@/tmdbapi.js'
export default {
    data(){
        return {
            genres: []
        }
    },
    mounted(){
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api}&language=ru-RU`)
        .then(res=>res.json())
        .then(data=>{
            this.genres = data.genres
        })
    },
    methods:{
        async getMoviesByGenre(id){
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=ru-RU&page=1&with_genres=${id}`)
            const data = await res.json();
            console.log(data);
        }
    }
}
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 16px;
  height: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #edf2f7;
  cursor: pointer;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 100vh;
  border: 3px solid #edf2f7;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}

@media screen and (max-width: 640px) {
    ::-webkit-scrollbar{
        display: none;
    }
}
</style>