<script>
import { store } from "../store/store";
import { RouterLink } from "vue-router";
export default {

}
</script>

<template>
    <div class="profileInfo">
        <h1>Your profile info</h1>
        <div>
            <h2>Name: {{$store.state.info[0].name}}</h2>
            <h2>Email: {{$store.state.info[0].email}}</h2>
            <h2>Id: {{$store.state.info[0].id}}</h2>
            <RouterLink to="/">Home Page</RouterLink>
        </div>
    </div>
</template>

<style>
.profileInfo{
    margin: 0 auto;
    width: 300px;
}
</style>
