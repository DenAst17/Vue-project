<script >
export default {
  emits: ["remove", "edit"],
  props: {
    user: Object,
  },
  created() {},
  methods: {
    edit() {
      this.$emit("edit", this.user);
    },
  },
};
</script>

<template>
  <tr>
    <td>{{ user.id }}</td>
    <td>{{ user.name }}</td>
    <td>{{ user.email }}</td>
    <td><button @click="$emit('remove', user)">X</button></td>
    <!-- 1 Variant -->
    <td><button @click="edit()">edit</button></td>
    <!-- 2 Variant -->
  </tr>
</template>