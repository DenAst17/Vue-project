<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="swnav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/starwars/people">People</RouterLink>
        <RouterLink to="/starwars/planets">Planets</RouterLink>
        <RouterLink to="/starwars/starships">Starships</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style>
@import "../assets/base.css";

header {
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  max-height: 200vh;
}

.logo {
  display: flex;
  flex-direction: column;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}
.swnav {
  display: flex;
  flex-direction: row;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: flex;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 512px) {
  body {
    place-items: center;
  }

  #app {
    padding: 0 2rem;
  }

  header {
    display: flex;
    flex-direction: column;
    place-items: center;
  }

  header .wrapper {
    display: flex;
    flex-direction: column;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 0 0 0;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
  }
}
</style>
