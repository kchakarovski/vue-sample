<template>
  <div class="app">
    <div class="bgimg">
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
export default {
  name: "App",
  components: {
    // "app-header": Header,
    // FooterNav,
    Navcomp,
  },
  data() {
    return {
      main: [
        {
          name: "Пијалоци",
          link: "/produkti/pijaloci",
          //  img: "",
          txt: "Lorem ipsum bla bla ipsum ipsum bla bla ipsum bla bla ipsum bla bla ipsum bla lorem ipsum ipsum lorem",
          btn: "Read More",
        },
        {
          name: "Брза Храна",
          link: "/produkti/brza-hrana",
          // img: "",
          txt: "Lorem ipsum bla bla ipsum ipsum bla bla ipsum bla ipsum bla bla ipsum bla bla lorem ipsum ipsum lorem",
          btn: "Read More",
        },
        {
          name: "Десерти",
          link: "/produkti/deserti",
          // img: "",
          txt: "Lorem ipsum bla bla ipsum ipsum bla bla ipsum bla ipsum bla bla ipsum bla bla lorem ipsum ipsum lorem",
          btn: "Read More",
        },
      ],
      footernav: 
        {
          name: "Copyright © 2020 Cakarovski | Contact",
          link: "mailto:cakarovskidev@gmail.com", 
        },
      header: [
        {
          name: "Малага",
          link: "/",
        },
        {
          name: "За Нас",
          link: "/sample",
        },
        {
          name: "Услуги",
          link: "/",
        },
        {
          name: "Мени",
          link: "/",
        },
        {
          name: "Контакт",
          link: "/contact",
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
