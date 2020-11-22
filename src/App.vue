<template>
  <div class="app">
    <div class="bgimg">
      <slider :inputData="sliderimages" />
      <div class="header">
        <navigation :inputData="header" />
      </div>
      <div class="card">
        <card
          v-for="(card, key) in cards"
          :key="key"
          :inputData="card"
          @clickedButton="redirect"
        />
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <footer>
      <div class="footer">
        <a :href="footernav.link"><span v-text="footernav.name"></span></a>
      </div>
    </footer>
  </div>
</template>
<script>
import Navigation from "../src/components/Navigation";
import Slider from "../src/components/Slider";
import Card from "../src/components/Card";
import { cards } from "../src/data/cards"; // DATA
export default {
  name: "App",
  components: {
    // "app-header": Header,
    Navigation,
    Slider,
    Card,
  },
  data() {
    return {
      cards,
      sliderimages: [
        "https://images.hdqwalls.com/download/pizza-baked-chesse-spicy-7t-1920x1080.jpg",
        "https://i.ibb.co/2SvXnwQ/164-1645988-wallpaper-burger-food-fast-food-burger-special.jpg",
      ],
      header: [
        {
          name: "Малага",
          link: "/",
          btn: "",
        },
        {
          name: "За Нас",
          link: "/sample",
          btn: "",
        },
        {
          name: "Контакт",
          link: "/contact",
          btn: "",
        },
      ],
      footernav: {
        name: "Copyright © 2020 Cakarovski | Contact",
        link: "mailto:cakarovskidev@gmail.com",
      },
      title: "Maison Cacao",
    };
  },
  methods: {
    change(msg) {
      this.message = msg;
    },
    redirect(link) {
      this.$router.push(link);
      document
        .getElementById("products")
        .scrollIntoView({ behavior: "smooth" });
    },
    notify(link) {
      alert(link);
    },
  },
};
</script>
<style lang="scss">
@import "assets/scss/application";
</style>
