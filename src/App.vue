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
      <footer>
        <div id="footer">
          <navcomp :inputData="footernav"></navcomp>
        </div>
      </footer>
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
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
          name: "Drinks",
          link: "/",
          // img: "",
          txt: "Lorem ipsum bla bla ipsum ipsum bla bla ipsum bla bla ipsum bla bla ipsum bla lorem ipsum ipsum lorem",
          btn: "Read More",
        },
        {
          name: "Cuisine",
          link: "/",
          // img: "",
          txt: "Lorem ipsum bla bla ipsum ipsum bla bla ipsum bla ipsum bla bla ipsum bla bla lorem ipsum ipsum lorem",
          btn: "Read More",
        },
        {
          name: "Cooks",
          link: "/",
          // img: "",
          txt: "Lorem ipsum bla bla ipsum ipsum bla bla ipsum bla ipsum bla bla ipsum bla bla lorem ipsum ipsum lorem",
          btn: "Read More",
        },
        // {
        //   name: "Sample",
        //   link: "/sample",
        // },
        // {
        //   name: "Blog",
        //   link: "/blog",
        // },
        // {
        //   name: "Concept",
        //   link: "/concept",
        // },
        // {
        //   name: "Transition",
        //   link: "/transition-name",
        // },
      ],
      // footer: [{
      //   li1:"Facebook",
      //   li2:"Sitemap",
      //   li3:"Instagram",       // ( Eden objekt so poveke argumenti )
      //   li4:"Privacy Policy",
      //   li5:"Twitter",
      //   li6:"Site Policy",
      // }],
      paragraph:
        "<p>Lorem ipsum <br /> <h1>Some title</h1> <br /> <p>Lorem ipsum 2</p> </p>",
      footernav: [
        {
          name: "Copyright © 2020 Cakarovski | Contact",
          link: "/", //mailto:cakarovskidev@gmail.com
        },
      ],
      header: [
        {
          name: "Maison Cacao",
          link: "/",
        },
        {
          name: "About",
          link: "/sample",
        },
        {
          name: "Services",
          link: "/",
        },
        {
          name: "Menu",
          link: "/",
        },
        {
          name: "Contact",
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
