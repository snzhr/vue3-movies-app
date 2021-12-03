<template>
      <div class="mt-24 relative lg:w-1/2 mx-auto h-96">
      <iframe class="w-full h-full"
      :src="trailerId">
        </iframe>
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