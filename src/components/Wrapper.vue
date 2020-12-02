<template>
  <div class="wrapper">
    <div class="card">
      <card
        v-for="(card, key) in cards"
        :key="key"
        :inputData="card"
        @clickedButton="redirect"
      />
    </div>
  </div>
</template>

<script>
import { cards } from "../data/cards"; // DATA

import Card from "../components/Card";
export default {
  name: "Wrapper",
  components: {
    Card,
  },
  data() {
    return {
      cards,
    };
  },
  methods: {
    redirect(link) {
      this.$router.push(link);
      // document.getElementById("products").scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>
</style>