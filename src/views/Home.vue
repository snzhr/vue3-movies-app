<template>
<div>
<the-navbar></the-navbar>
<div class="content">
<the-genres class="mt-10"></the-genres>
<the-movie-list  :movielist="movies"></the-movie-list>
  <the-pagination @get-movies="getNewMovies" :total-pages="totalPages" :total="total" :per-page="perPage" :current-page="currentPage"
      :has-more-pages="hasMorePages" @pagechanged="showMore"></the-pagination>
</div>
</div>
</template>

<script>
import TheMovieList from '@/components/TheMovieList'
import TheGenres from '@/components/TheGenres'
import TheNavbar from '@/components/TheNavbar'
import ThePagination from '@/components/ThePagination.vue'

import api from '@/tmdbapi.js'

export default {
  components:{
    TheMovieList, TheGenres, TheNavbar, ThePagination
  },
  data(){
    return {
        movies: [],
        page: 1,
        totalPages: 0,
        total: 0,
        perPage: 20,
        currentPage: 1,
        hasMorePages: true

    }
  },
  mounted(){
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=ru-Ru&page=1`)
    .then(response => response.json())
    .then(data =>{
      this.movies = data.results;
      this.totalPages = data.total_pages;
      this.page = data.page;
      this.currentPage = data.page;
      this.total = data.total_results;
      console.log(data)
    })
  },

  methods:{
    async getNewMovies(pageNum){
      const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=ru-Ru&page=${pageNum}`)
      const data = await res.json();
      this.movies = data.results;
      // console.log(data);

    },
    showMore(page) {
      this.page = page;
      this.currentPage = page;
    }
  }

}
</script>

<style>
.content{
  padding: 1em;
}
</style>
