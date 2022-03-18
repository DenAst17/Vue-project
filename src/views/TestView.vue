<script>
export default {
  data() {
    return {
      num1: ''
    }
  }
}
</script>

<template>
  <div class = "calc"> 
    <input v-model = "num1">
    <div> + </div>
    <input v-model = "num2">
    <div> = </div>
    <input v-model = "num3"> 
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
  }
}
.calc{
  display: flex;
}
</style>
