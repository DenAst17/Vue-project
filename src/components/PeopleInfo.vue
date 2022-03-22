<script>
import * as request from "../request.js";
let id = 0;
export default {
  data() {
    return {
      newPerson: "",
      people: [],
    };
  },
  methods: {
    addPerson() {
      
      request.getInfo("planets").then(function(value)
        {
          //console.table(value);
          self.people = self.people.filter((t) => t == 'true');
          for(let i = 0; i < value.length; i++)
          {
            let txt = "Name: " + value[i][0] + " height: " + value[i][1];
            console.log(txt);
            self.people.push({ id: id++, text: txt});
          }
        });
      var self = this;
      this.people = people;
      this.people.push({ id: id++, text: 1});
      this.newPerson = "";
    },
    removePerson(person) {
      
    },
  },
};
</script>

<template>
  <form @submit.prevent="addPerson">
    <button>Add new person</button>
  </form>
  <ol>
    <li v-for="person in people" :key="person.id">
      {{ person.text }}
    </li>
  </ol>
</template>
