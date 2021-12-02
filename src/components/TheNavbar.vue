<template>
  <div class="navigation flex justify-between items-center px-4 py-3 fixed z-10 w-full bg-green-700">
      <div class="text-lg text-white">Vue Movie <i class="fad fa-laugh-wink"></i>
</div>
      <div class="relative flex items-center">
          <input type="text" placeholder="Search movie..." class="rounded p-2 max-w-2xl focus:outline-none focus:ring focus:border-green-300">
          <fa icon="search" class="absolute right-2 text-green-700 cursor-pointer "/>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>