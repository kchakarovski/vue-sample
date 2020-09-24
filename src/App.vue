<template>
  <div class="app">
    <navcomp :inputData="header"></navcomp>
    <div class="main-navigation">
      <!-- <<<---- main-navigation -->
      <div class="chocolate-img">
        <img :src="images.chocolate" />
      </div>
      <ul>
        <navcomp :inputData="router"></navcomp>
      </ul>
    </div>
    <div id="footer">
    <navcomp :inputData="footernav"></navcomp>
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
      router: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Contact",
          link: "/contact",
        },
        {
          name: "Sample",
          link: "/sample",
        },
        {
          name: "Blog",
          link: "/blog",
        },
        {
          name: "Concept",
          link: "/concept",
        },
        {
          name: "Transition",
          link: "/transition-name",
        },
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
          name: "Facebook",
          link: "",
          subtitle: "Temple",
        },
        {
          name: "Sitemap",
          link: "",
          subtitle: "Temple",
        },
        {
          name: "Instagram",
          link: "",
          subtitle: "Temple",
        },
        {
          name: "Privacy Policy",
          link: "",
          subtitle: "Temple",
        },
        {
          name: "Twitter",
          link: "",
          subtitle: "Temple",
        },
        {
          name: "Site Policy",
          link: "",
          subtitle: "Temple",
        },
      ],
      header: [
        {
          name: "Maison Cacao",
          link: "/about",
        },
        {
          name: "Online Shop",
          link: "/sample",
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
