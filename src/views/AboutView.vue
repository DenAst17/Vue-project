<script setup>
import DefaultHeader from "../components/DefaultHeader.vue";
</script>

<template>
  <DefaultHeader />
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
  }
}
</style>
