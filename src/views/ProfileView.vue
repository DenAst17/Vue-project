<script>
import { store } from "../store/store";
import { RouterLink } from "vue-router";
export default {

}
</script>

<template>
    <div class="about">
        <h1></h1>
        <div>
            <h2>Name: {{$store.state.info[0].name}}</h2>
            <h2>Email: {{$store.state.info[0].email}}</h2>
            <h2>Id: {{$store.state.info[0].id}}</h2>
            <RouterLink to="/">Home Page</RouterLink>
        </div>
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
