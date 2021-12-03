<template>
      <div class="mt-24 relative lg:w-1/2 mx-auto h-96">
     
      <iframe v-if="trailerId" class="w-full h-full"
      :src="trailerId">
        </iframe>
    <div v-else class="">
        <h1 class="text-white text-5xl">We are sorry. We could not find this movie's trailer</h1>
        </div>
  </div>
</template>

<script>
import api from '@/tmdbapi.js'
export default {
    props:{
        trailerId:{
            type: String
        }
    },
}
</script>

<style>
</style>