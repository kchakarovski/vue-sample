<template>
  <div class="app">
    <app-header :input="title"></app-header>
    <div class="main-navigation">
      <!-- <<<---- main-navigation -->
      <div class="chocolate-img">
        <img :src="images.chocolate" />
      </div>
      <ul>
        <!-- <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/sample">Sample</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/concept">Concept</router-link></li> -->
        <li v-for="(value, key) in router" :key="key">
          <router-link :to="value.link"
            ><span>{{ value.name }}</span></router-link
          >
        </li>
      </ul>
    </div>
    <h2>
      {{ message }}
    </h2>
    <!-- <div class="block" v-html="paragraph"></div> -->
    <!-- <div v-for="(value, key) in footer" :key="key">
      <span>{{value.footer}}</span>
    </div> -->
    <footer-nav :footer="footernav" @clicked="change"></footer-nav>
    <router-view />
  </div>
</template>
<script>
import Header from "../src/components/Header";
import FooterNav from "../src/components/FooterNav";

export default {
  name: "App",
  components: {
    "app-header": Header,
    FooterNav,
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
      ],
      // footer: [{
      //   li1:"Facebook",
      //   li2:"Sitemap",
      //   li3:"Instagram",        ( Eden objekt so poveke argumenti )
      //   li4:"Privacy Policy",
      //   li5:"Twitter",
      //   li6:"Site Policy",
      // }],

      paragraph:
        "<p>Lorem ipsum <br /> <h1>Some title</h1> <br /> <p>Lorem ipsum 2</p> </p>",
      footernav: [
        {
          name: "Facebook",
          subtitle: "Temple",
        },
        {
          name: "Sitemap",
          subtitle: "Temple",
        },
        {
          name: "Instagram",
          subtitle: "Temple",
        },
        {
          name: "Privacy Policy",
          subtitle: "Temple",
        },
        {
          name: "Twitter",
          subtitle: "Temple",
        },
        {
          name: "Site Policy",
          subtitle: "Temple",
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
