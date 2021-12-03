<template>
  <span :class="ratingColor" 
    class="absolute rounded-xl top-2 right-2 text-white py-2 px-4 text-lg">{{rating}}</span>
</template>

<script>
export default {
    props:{
        rating: {
            type: Number
        }
    },
computed:{
    ratingColor(){
        if (this.rating >= 7.0) {
            return {
                'bg-green-500': true
            }
        }
        else if(this.rating >= 5.0){
            return {
                'bg-yellow-500': true
            }
        }
        else{
            return {
                'bg-red-500': true
            }
        }
        }
}
}
</script>
