<script>
import { RouterLink } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import { store } from "../store/store";
export default {
  data() {
    return {
      isLogin: false,
      displayLoginInfo: ""
    }
  },

  components: {
    HelloWorld
  },
  mounted(){
    console.log(123);
    if(store.state.loginInfo != undefined)
    {
      this.isLogin = true;
      this.$refs.h.textContent = store.state.loginInfo.displayName;
      this.$refs.userIMG.src = store.state.loginInfo.photoURL;
      //console.log(store.state.loginInfo);
    }
  },
  created(){
  }
}
</script>

<template>
  <header>
      <img
        alt="Vue logo"
        class="logo"
        src="../assets/Vuelogo.png"
        width="125"
        height="125"
      />
      
      <div v-show="isLogin" class = "profile">
        <div class = "userInfo">
          <img 
            ref = "userIMG"
            width="70"
            height="70"
          />
          <h2 ref="h"></h2>
        </div>
        <RouterLink to="/profile">Profile</RouterLink>
      </div>

      <div v-show="!isLogin" class = "login">
        <RouterLink to="/login">Login</RouterLink>
      </div>

    <div class="wrapper">
      <HelloWorld msg="My Vue Project!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/calculator">Calculator</RouterLink>
        <RouterLink to="/starwars/people">StarWars</RouterLink>
        <RouterLink to="/users">Users</RouterLink>
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
.logo{
  width:125px;
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
  display: flex;
  flex-direction: column;
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
    padding: 0 1rem;
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

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
.userInfo{
  display: flex;
}
.profile{
  width: 136.4px;
  right:5px;
  position: absolute;
  position: fixed;
}
.login{
  width: 70px;
  right:0%;
  position: absolute;
  position: fixed;
  font-size: 20px;
}
.upperHeader{
  display: flex;
  width: 100%;
}
</style>
