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
          value = await request.getInfo("planets");
          for(let i = 0; i < value.length; i++)
          {
            if(value[i][1] == 0)
              value[i][1] = 'unknown';
          }
          self.requestInfo = "The list of planets sorted by diameter (we don't have info about some of them, they will be in the end):"
          //console.table(value);
          self.people = self.people.filter((t) => t == 'true');
          value.sort(function(a, b) {
            if(a[1] == 'unknown' && b[1] != 'unknown')
              return 1000000000 - b[1];
            if(b[1] == 'unknown'&& a[1] != 'unknown')
              return a[1] - 1000000000;
            return a[1] - b[1];
          });
          for(let i = 0; i < value.length; i++)
          {
            let txt = "Name: " + value[i][0] + ", diameter: " + value[i][1] + " km";
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
