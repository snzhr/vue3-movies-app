<template>
<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
<the-movie class="" v-for="kino in movielist" :key="kino.id" :movie="kino"></the-movie>
</div>
</template>

<script>
import TheMovie from './TheMovie.vue'
export default {
components:{
    TheMovie
},
props:{
    movielist: {
        type: Array,
        required: true
    }
}
}
</script>

<style>

</style>