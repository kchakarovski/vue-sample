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
      paragraph:
        "<p>Lorem ipsum <br /> <h1>Some title</h1> <br /> <p>Lorem ipsum 2</p> </p>",
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
      message: "",
      images: {
        chocolate:
          "https://i1.wp.com/www.eatthis.com/wp-content/uploads/2017/10/dark-chocolate-bar-squares.jpg?fit=1024%2C750&ssl=1",
      },
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
