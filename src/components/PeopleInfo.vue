<script>
import * as request from "../request.js";
let id = 0;
export default {
  data() {
    return {
      requestInfo: "Please, press the button to get request",
      sortedrequestInfo: "",
      people: [],
      sortedpeople: [],
    };
  },
  methods: {
    addPerson() {
      var self = this;
      this.requestInfo = "Wait for list to download";
      self.people = self.people.filter((t) => t == "true");
      self.sortedpeople = self.sortedpeople.filter((t) => t == "true");
      let value = [];
      let nextPage = "https://swapi.dev/api/people";
      let promice = request.getAll(nextPage);
      promice = promice.then((response) => {
        for (let person of response.data.results) {
          let name = person.name;
          let height = person.height;
          let txt = "Name: " + name + ", height: " + height + " см";
          value.push([name, height]);
          self.people.push({ id: id++, text: txt });
        }
        nextPage = response.data.next;
        console.log(nextPage);
        return request.getAll(nextPage);
      })
      promice = promice.then((response) => {
        for (let person of response.data.results) {
          let name = person.name;
          let height = person.height;
          let txt = "Name: " + name + ", height: " + height + " см";
          value.push([name, height]);
          self.people.push({ id: id++, text: txt });
        }
        nextPage = response.data.next;
        console.log(nextPage);
        return request.getAll(nextPage);
      })
      promice = promice.then((response) => {
        for (let person of response.data.results) {
          let name = person.name;
          let height = person.height;
          let txt = "Name: " + name + ", height: " + height + " см";
          value.push([name, height]);
          self.people.push({ id: id++, text: txt });
        }
        nextPage = response.data.next;
        console.log(nextPage);
        return request.getAll(nextPage);
      })
      promice = promice.then((response) => {
        for (let person of response.data.results) {
          let name = person.name;
          let height = person.height;
          let txt = "Name: " + name + ", height: " + height + " см";
          value.push([name, height]);
          self.people.push({ id: id++, text: txt });
        }
        nextPage = response.data.next;
        console.log(nextPage);
        return request.getAll(nextPage);
      })
      promice = promice.then((response) => {
        for (let person of response.data.results) {
          let name = person.name;
          let height = person.height;
          let txt = "Name: " + name + ", height: " + height + " см";
          value.push([name, height]);
          self.people.push({ id: id++, text: txt });
        }
        nextPage = response.data.next;
        console.log(nextPage);
        return request.getAll(nextPage);
      })
      promice = promice.then((response) => {
        for (let person of response.data.results) {
          let name = person.name;
          let height = person.height;
          let txt = "Name: " + name + ", height: " + height + " см";
          value.push([name, height]);
          self.people.push({ id: id++, text: txt });
        }
        nextPage = response.data.next;
        console.log(nextPage);
        return request.getAll(nextPage);
      })
      promice = promice.then((response) => {
        for (let person of response.data.results) {
          let name = person.name;
          let height = person.height;
          let txt = "Name: " + name + ", height: " + height + " см";
          value.push([name, height]);
          self.people.push({ id: id++, text: txt });
        }
        nextPage = response.data.next;
        console.log(nextPage);
        return request.getAll(nextPage);
      })
      promice = promice.then((response) => {
        for (let person of response.data.results) {
          let name = person.name;
          let height = person.height;
          let txt = "Name: " + name + ", height: " + height + " см";
          value.push([name, height]);
          self.people.push({ id: id++, text: txt });
        }
        nextPage = response.data.next;
        console.log(nextPage);
        return request.getAll(nextPage);
      })
      promice = promice.then((response) => {
        for (let person of response.data.results) {
          let name = person.name;
          let height = person.height;
          let txt = "Name: " + name + ", height: " + height + " см";
          value.push([name, height]);
          self.people.push({ id: id++, text: txt });
        }
        nextPage = response.data.next;
        console.log(nextPage);
        return request.getAll(nextPage);
      }).then((response) => {
        //console.table(value);
        self.requestInfo = "The list of people";
        value.sort(function (a, b) {
          return a[1] - b[1];
        });
        for (let i = 0; i < value.length; i++) {
          let txt = "Name: " + value[i][0] + ", height: " + value[i][1] + " см";
          console.log(txt);
          self.sortedpeople.push({ id: id++, text: txt });
        }
        self.sortedrequestInfo = "The list of people sorted by height";
      })
    },
  },
  mounted(){
    this.addPerson();
  }
};
</script>

<template>
  <div class="peoplelists">
    <div>
      <p class="getinfo">{{ requestInfo }}</p>
      <ol>
        <li v-for="person in people" :key="person.id">
          {{ person.text }}
        </li>
      </ol>
    </div>
    <div>
      <p class="getinfo">{{ sortedrequestInfo }}</p>
      <ol>
        <li v-for="person in sortedpeople" :key="person.id">
          {{ person.text }}
        </li>
      </ol>
    </div>
  </div>
</template>

<style>
.btndiv {
  display: flex;
  width: 86.05px;
  margin-left: auto;
  margin-right: auto;
  align-content: center;
  align-items: center;
}
.getinfo {
  font-size: 20px;
}
.peoplelists {
  display: flex;
  width: 639.16px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}
</style>
