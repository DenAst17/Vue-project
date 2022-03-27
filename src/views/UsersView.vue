<script>
import DefaultHeader from "../components/DefaultHeader.vue";
import axios from "axios";
import * as request from "../request.js";
export default {
  data() {
    return {
      info: [{id: 1, name: "Vlad", email: "vlad@ukr.net"}],
    };
  },
  methods: {
    fetch() {

    },
    addInfo(){
        //throw new Error("error!");
        this.info = [];
        let result;
        request.getAll("http://localhost:3000/users").then(response => {
            if(response != undefined)
              for(let person of response.data)
                this.info.push(person);
        }
        )
    }
  },
  components: {
      DefaultHeader,
  }
};
</script>

<template>
  <DefaultHeader />
  <button @click="addInfo">Start</button>
  <p v-for="i in info" :key="i.id">{{i}}</p>
  <p v-for="i in info" :key="i.id"> id = {{Object.values(i)[0]}} </p>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
  }
}
.calc {
  line-height: 0;
  font-size: 20px;
  display: flex;
  width: auto;
}
.calculator {
  margin: 0px auto auto 30%;
  width: auto;
}

.calculator input {
  font-size: 20px;
}
</style>
