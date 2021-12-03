<template>
  <div class="flex fixed top-0 inset-x-0 justify-between z-10 items-center px-4 py-3 bg-gray-900">
      <div class="text-lg text-white"><router-link to="/">Vue3 Movie</router-link></div>
      <div class="relative flex items-center">
          <input v-model="searchTitle" type="text" placeholder="Search movie..." class="rounded placeholder-white bg-gray-700 text-white w-full p-2 focus:outline-none focus:ring focus:border-green-300">
          <fa @click="$emit('find', searchTitle)" icon="search" class="absolute right-2 text-white cursor-pointer bg-gray-700"/>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      searchTitle: ''
    }
  }
}
</script>