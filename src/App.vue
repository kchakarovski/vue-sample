<template>
  <div class="app">
    <app-header :input="title"></app-header>
    <div class="main-navigation">
      <!-- <<<---- main-navigation -->
      <div class="chocolate-img">
        <img :src="images.chocolate" />
      </div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/sample">Sample</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/concept">Concept</router-link></li>
      </ul>
    </div>
    <h2>
      {{ message }}
    </h2>
    <!-- <div v-for="(value, key) in footer" :key="key">
      <span>{{value.footer}}</span>
    </div> -->
    <footer-nav :footer="footer" @clicked="change"></footer-nav>
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
      footer: [{
        li1:"Facebook",
        li2:"Sitemap",
        li3:"Instagram",
        li4:"Privacy Policy",
        li5:"Twitter",
        li6:"Site Policy",
      }],
      title: "Maison Cacao",
      message: "",
      images: {
        chocolate:
          "https://i1.wp.com/www.eatthis.com/wp-content/uploads/2017/10/dark-chocolate-bar-squares.jpg?fit=1024%2C750&ssl=1",
      },
    };
  },
    methods: {
      change(msg){
        this.message = msg;
      }
    }
};
</script>
<style lang="scss">
@import "assets/scss/application";
</style>
