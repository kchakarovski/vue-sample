<template>
  <div id="products">
    <!-- <slider :inputData="sliderimages" :timerMs="3000" /> -->
    <div class="produkt-flex">
      <h1 v-text="selectedData.produkti"></h1>
      <div
        id="pijaloci"
        class="produkt-flex__item"
        v-for="(value, key) in selectedData.produkt"
        :key="key"
      >
        <img id="pijalocimg" :src="value.img" />
        <span v-text="value.ime"></span>
        <span v-text="value.cena"></span>
        
        <div id="pici">
          <div class="pici__item" v-for="(value, key) in value.pici" :key="key">
            <img :src="value.img" />
            <span v-text="value.ime"></span>
            <span v-text="value.cena"></span>
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
          </div>
        </div>
        <div v-for="(value, key) in value.deserti" :key="key">
          <span v-text="value.ime"></span>
          <span v-text="value.cena"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { malaga } from "../data/produkti";
// import Slider from "../components/Slider";
export default {
  name: "page",
  components:{
    // Slider,
  },
  data() {
    return {
      slug: "",
      selectedData: [],
      main: malaga, // -----
      sliderimages: [
        "https://images.hdqwalls.com/download/pizza-baked-chesse-spicy-7t-1920x1080.jpg",
        "https://i.ibb.co/2SvXnwQ/164-1645988-wallpaper-burger-food-fast-food-burger-special.jpg",
      ],
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
