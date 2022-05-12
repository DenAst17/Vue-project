<script>
import DefaultHeader from "../components/DefaultHeader.vue";
import TicTacToe from "../components/TicTacToe.vue";
export default {
  data() {
    return {
      NumPlus1: "",
      NumPlus2: "",
      NumMinus1: "",
      NumMinus2: "",
      NumMult1: "",
      NumMult2: "",
      NumDiv1: "",
      NumDiv2: "",
      NumPow1: "",
      NumPow2: "",
    };
  },
  components: {
      DefaultHeader,
      TicTacToe
  }
};
</script>

<template>
  <DefaultHeader />
  <TicTacToe />
</template>

<style>

</style>
