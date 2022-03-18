<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/Vuelogo.png"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="My Vue Project!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/test">Test</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  max-height: 200vh;
}

.logo {
  display: flex;
  flex-direction: column;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: rgb(41, 0, 189);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(251, 88%, 35%, 0.3);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: flex;
  flex-direction: column;
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
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
