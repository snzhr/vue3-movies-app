<template>
      <div @click="$emit('getGenreMovie', genre.id)" class="flex-none rounded cursor-pointer p-2 mr-3 bg-gray-200 text-gray-800">{{genre.name}}</div>
</template>

<script>
export default {
    props:{
            genre: {
              type: Object,
            }
    },
}
</script>
