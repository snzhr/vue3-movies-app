<template>
<div class="home h-screen">
<the-navbar></the-navbar>
<div class="content">
  <div class="flex mt-16 sticky justify-between overflow-y-hidden sm:overflow-x-scroll
  pb-3">
<the-genres v-for="genre in allGenres" 
:key="genre.id" 
:genre="genre"
@get-genre-movie="getMoviesByGenre(genre.id)"></the-genres>
  </div>
<div  v-if="loaded" class="flex justify-center items-center h-screen">
<the-loader></the-loader>
</div>
<div v-else class="movies">
<the-movie-list  :movielist="movies"></the-movie-list>
<the-pagination class="my-8" @get-movies="getNewMovies" :total-pages="totalPages" :total="total" :per-page="perPage" :current-page="currentPage"
      :has-more-pages="hasMorePages" @pagechanged="showMore"></the-pagination>
</div>
</div>
</div>
</template>

<script>
import TheMovieList from '@/components/TheMovieList'
import TheGenres from '@/components/TheGenres'
import TheNavbar from '@/components/TheNavbar'
import ThePagination from '@/components/ThePagination.vue'
import TheLoader from '@/components/UI/TheLoader.vue'
import api from '@/tmdbapi.js'

export default {
  components:{
    TheMovieList, TheGenres, TheNavbar, ThePagination, TheLoader
  },
  data(){
    return {
        movies: [],
        allGenres: [],
        page: 1,
        totalPages: 20,
        total: 0,
        perPage: 20,
        currentPage: 1,
        hasMorePages: true,
    }
  },
  computed:{
    loaded(){
      return this.movies.length == 0
    }
  },
  mounted(){
      fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=ru-Ru&page=1`)
    .then(response => response.json())
    .then(data =>{
      this.movies = data.results;
      // this.page = data.page;
      this.currentPage = data.page;
      this.total = data.total_results;
    });

     fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api}&language=ru-RU`)
        .then(res=>res.json())
        .then(data=>{
            this.allGenres = data.genres
        })
  },

  methods:{
    async getNewMovies(pageNum){
      const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=ru-Ru&page=${pageNum}`)
      const data = await res.json();
      this.movies = data.results;
    },
    showMore(page) {
      this.page = page;
      this.currentPage = page;
    },
     async getMoviesByGenre(id){
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=ru-RU&page=1&with_genres=${id}`)
            const data = await res.json();
            this.movies = data.results;
            // this.page = data.page;
            this.currentPage = data.page;
            this.total = data.total_results;
            
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
.content{
  padding: 1em;
}
</style>
