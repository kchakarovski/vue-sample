<template>
  <div id="products">
    <div class="produkt-flex">
      <h1 v-text="selectedData.produkti"></h1>
      <!-- <p v-text="selectedData.txt"></p> -->
      <div
        id="pijaloci"
        class="produkt-flex__item"
        v-for="(value, key) in selectedData.produkt"
        :key="key"
      >
        <img id="pijalocimg" :src="value.img" />
        <span v-text="value.ime"></span>
        <span v-text="value.cena"></span>
        <span v-text="value.sostav"></span>
        <div id="pici">
          <div class="pici__item" v-for="(value, key) in value.pici" :key="key">
            <img :src="value.img" />
            <span v-text="value.ime"></span>
            <span v-text="value.cena"></span>
            <span v-text="value.sostav"></span>
          </div>
        </div>
        <div id="burgeri">
          <div
            class="burgeri__item"
            v-for="(value, key) in value.burgeri"
            :key="key"
          >
            <img :src="value.img" />
            <span v-text="value.ime"></span>
            <span v-text="value.cena"></span>
            <span v-text="value.sostav"></span>
          </div>
        </div>
        <div id="ladnisendvici">
          <div
            class="ladnisendvici__item"
            v-for="(value, key) in value.ladnisendvici"
            :key="key"
          >
            <img :src="value.img" />
            <span v-text="value.ime"></span>
            <span v-text="value.cena"></span>
            <span v-text="value.sostav"></span>
          </div>
        </div>
        <div v-for="(value, key) in value.deserti" :key="key">
          <span v-text="value.ime"></span>
          <span v-text="value.cena"></span>
          <span v-text="value.sostav"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { malaga } from "../data/produkti";
export default {
  name: "page",
  data() {
    return {
      slug: "",
      selectedData: [],
      main: malaga, // -----
    };
  },
  watch: {
    $route(to) {
      this.main.filter((element) => {
        if (element.slug === to.params.slug) {
          this.selectedData = element;
        }
      });
      // react to route changes...
      //   this.title = to.params.slug;
    },
  },
};
</script>

<style></style>
