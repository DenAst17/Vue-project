<script>
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
};
</script>

<script setup>
import DefaultHeader from "../components/DefaultHeader.vue";
</script>

<template>
  <DefaultHeader />
  <div class="calculator">
    <div class="calc">
      <input size="number" v-model="NumPlus1" placeholder="Input a number" />
      <p>+</p>
      <input size="number" v-model="NumPlus2" placeholder="Input a number" />
      <p>=</p>
      <p>{{ Number(NumPlus1) + Number(NumPlus2) }}</p>
    </div>
    <div class="calc">
      <input v-model="NumMinus1" placeholder="Input a number" />
      <p>-</p>
      <input v-model="NumMinus2" placeholder="Input a number" />
      <p>=</p>
      <p>{{ Number(NumMinus1) - Number(NumMinus2) }}</p>
    </div>
    <div class="calc">
      <input v-model="NumMult1" placeholder="Input a number" />
      <p>*</p>
      <input v-model="NumMult2" placeholder="Input a number" />
      <p>=</p>
      <p>{{ Number(NumMult1) * Number(NumMult2) }}</p>
    </div>
    <div class="calc">
      <input v-model="NumDiv1" placeholder="Input a number" />
      <p>/</p>
      <input v-model="NumDiv2" placeholder="Input a number" />
      <p>=</p>
      <p>{{ Number(NumDiv1) / Number(NumDiv2) }}</p>
    </div>
    <div class="calc">
      <input v-model="NumPow1" placeholder="Input a number" />
      <p>^</p>
      <input v-model="NumPow2" placeholder="Input a number" />
      <p>=</p>
      <p>{{ Math.pow(Number(NumPow1), Number(NumPow2)) }}</p>
    </div>
  </div>
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
