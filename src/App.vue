<template>
  <div class="app">
    <div class="bgimg">
      <slider :inputData="sliderImages" />
      <div id="header">
        <navcomp :inputData="header"></navcomp>
      </div>
      <div class="main-navigation">
        <div id="main">
          <ul>
            <navcomp :inputData="main"></navcomp>
          </ul>
        </div>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <footer>
      <div id="footer">
        <a :href="footernav.link"><span v-text="footernav.name"></span></a>
      </div>
    </footer>
  </div>
</template>
<script>
// import Header from "../src/components/Header";
// import FooterNav from "../src/components/FooterNav";
import Navcomp from "../src/components/Navcomp";
import {main} from "../src/data/menu";
import Slider from "../src/components/Slider";
export default {
  name: "App",
  components: {
    // "app-header": Header,
    // FooterNav,
    Navcomp,
    Slider,
  },
  data() {
    return {
      main,
      sliderImages:[
        "https://images.hdqwalls.com/download/pizza-baked-chesse-spicy-7t-1920x1080.jpg",
        "https://i.ibb.co/2SvXnwQ/164-1645988-wallpaper-burger-food-fast-food-burger-special.jpg"
      ],
      footernav: {
        name: "Copyright © 2020 Cakarovski | Contact",
        link: "mailto:cakarovskidev@gmail.com",
      },
      header: [
        {
          name: "Малага",
          link: "/",
          btn: ""
        },
        {
          name: "За Нас",
          link: "/sample",
          btn: ""
        },
        {
          name: "Услуги",
          link: "/",
          btn: ""
        },
        {
          name: "Мени",
          link: "/",
          btn: ""
        },
        {
          name: "Контакт",
          link: "/contact",
          btn: ""
        },
      ],
      title: "Maison Cacao",
    };
  },
  methods: {
    change(msg) {
      this.message = msg;
    },
  },
};
</script>
<style lang="scss">
@import "assets/scss/application";
</style>
