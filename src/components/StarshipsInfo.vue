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
            let response = await request.getInfo("starships", i + 1)
            if(response == undefined)
              continue;
            //console.log(typeof(response));
            let name = response.data.name;
            let length = response.data.length;
            if(length === '1,600')
              length = 1600;
            let txt = "Name: " + name + ", length: " + length + " m";
            value.push([name, length]);
            self.people.push({ id: id++, text: txt});
            //console.log([name, length]);
          }
          //console.table(value);
          self.requestInfo = "The list of starships"
          value.sort(function(a, b) {
            return Number(a[1]) - Number(b[1]);
          });
          for(let i = 0; i < value.length; i++)
          {
            let txt = "Name: " + value[i][0] + ", length: " + value[i][1] + " m";
            console.log(txt);
            self.sortedpeople.push({ id: id++, text: txt});
          }
          self.sortedrequestInfo = "The list of starships sorted by length";
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
  <div class = 'starshipslists'>
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
.starshipslists{
  display:flex;
  width: 767.62px;
  margin-left: auto;
  margin-right: auto;
  display:flex;
}
</style>
