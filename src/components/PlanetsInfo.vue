<script>
import * as request from "../request.js";
let id = 0;
export default {
  data() {
    return {
      requestInfo: "Please, press the button to get request",
      sortedrequestInfo: "",
      people: [],
      sortedpeople: []      
    };
  },
  methods: {
    addPerson() {
      var self = this;
      this.requestInfo = "Wait for list to download";
      async function f1()
        {
          self.people = self.people.filter((t) => t == 'true');
          self.sortedpeople = self.sortedpeople.filter((t) => t == 'true');
          let value = [];
          for(let i = 0; i < 100; i++)
          {
            let response = await request.getInfo("planets", i + 1)
            if(response == undefined)
              continue;
            //console.log(typeof(response));
            let name = response.data.name;
            let diameter = response.data.diameter;
            if(diameter == 0)
              diameter = 'unknown';
            let txt = "Name: " + name + ", diameter: " + diameter + " km";
            value.push([name, diameter]);
            self.people.push({ id: id++, text: txt});
            //console.log([name, diameter]);
          }
          //console.table(value);
          self.requestInfo = "The list of planets"
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
            self.sortedpeople.push({ id: id++, text: txt});
          }
          self.sortedrequestInfo = "The list of planets sorted by diameter";
        };
      f1();
      this.people = people;
      this.people.push({ id: id++, text: 1});
    }
  },
};
</script>

<template>
  <form @submit.prevent="addPerson" class = "btndiv">
    <button class = "getinfo">Get info</button>
  </form>
  <div class = 'planetslists'>
    <div>
      <p class = "getinfo">{{requestInfo}}</p>
      <ol>
        <li v-for="person in people" :key="person.id">
          {{ person.text }}
        </li>
      </ol>
    </div>
    <div>
      <p class = "getinfo">{{sortedrequestInfo}}</p>
      <ol>
        <li v-for="person in sortedpeople" :key="person.id">
          {{ person.text }}
        </li>
      </ol>
    </div>
  </div>
  
</template>

<style>
.btndiv{
  display:flex;
  width: 86.05px;
  margin-left: auto;
  margin-right: auto;
  align-content: center;
  align-items: center;
}
.getinfo{
  font-size:20px;
}
.planetslists{
  display:flex;
  width: 692.72px;
  margin-left: auto;
  margin-right: auto;
  display:flex;
}
</style>
