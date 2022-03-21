<script>
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
      this.people.push({ id: id++, text: this.newPerson });
      this.newPerson = "";
    },
    removePerson(person) {
      this.people = this.people.filter((t) => t !== person);
    },
  },
};
</script>

<template>
  <form @submit.prevent="addPerson">
    <input v-model="newPerson" />
    <button>Add new person</button>
  </form>
  <ol>
    <li v-for="person in people" :key="person.id">
      {{ person.text }}
      <button @click="removePerson(person)">X</button>
    </li>
  </ol>
</template>
