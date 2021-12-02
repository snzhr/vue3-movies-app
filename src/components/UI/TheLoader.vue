<template>
  <div class="lds-dual-ring"></div>
</template>

<script>
export default {

}
</script>

<style>
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 100px;
  height:100px;
  margin: 0 8px 8px 8px;
  border-radius: 50%;
  border: 6px solid teal;
  border-color: teal transparent teal transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


</style>