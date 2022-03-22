<script>
import * as request from "../request.js";
let id = 0;
export default {
  data() {
    return {
      requestInfo: "Please, press the button to get request",
      people: [],
    };
  },
  methods: {
    addPerson() {
      this.requestInfo = "Wait for 5 seconds to get the list";
      async function f1()
        {
          value = await request.getInfo("starships");
          self.requestInfo = "The list of starships (sorted by length):"
          //console.table(value);
          self.people = self.people.filter((t) => t == 'true');
          value.sort(function(a, b) {
            return Number(a[1]) - Number(b[1]);
          });
          value[0][1] = 1600;
          value.sort(function(a, b) {
            return Number(a[1]) - Number(b[1]);
          });
          for(let i = 0; i < value.length; i++)
          {
            let txt = "Name: " + value[i][0] + ", length: " + value[i][1] + " m";
            console.log(txt);
            self.people.push({ id: id++, text: txt});
          }
        };
      f1();
      var self = this;
      this.people = people;
      this.people.push({ id: id++, text: 1});
    }
  },
};
</script>

<template>
  <form @submit.prevent="addPerson">
    <button class = "getinfo">Get info</button>
    <p class = "getinfo">{{requestInfo}}</p>
  </form>
  <ol>
    <li v-for="person in people" :key="person.id">
      {{ person.text }}
    </li>
  </ol>
</template>

<style>
.getinfo{
  font-size:20px;
}
</style>
