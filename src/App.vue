<template>
  <div class="app">
    <header>
      <div class="main-flex">
        <div class="main-flex__item item-1"><a href="#">Maison Cacao</a></div>
        <div class="main-flex__item item-2"><a href="#">Online Shop</a></div>
        <div class="main-flex__item item-3">
          <a href="#"><span>&#8593;</span> </a>
        </div>
      </div>
    </header>
    <div id="nav">
      <div class="chocolate-img">
        <img :src="chocolate" class="" />
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
    <div class="links">
      <ul>
        <li><a href="">Site Policy</a></li>
        <li><a href="">Facebook</a></li>
        <li><a href="">Sitemap</a></li>
        <li><a href="">Instagram</a></li>
        <li><a href="">Privacy Policy</a></li>
        <li><a href="">Twitter</a></li>
      </ul>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {git 
  name: "App",
  data() {
    return {
      chocolate:
        "https://i1.wp.com/www.eatthis.com/wp-content/uploads/2017/10/dark-chocolate-bar-squares.jpg?fit=1024%2C750&ssl=1",
    };
  },
};
</script>
<style lang="scss">
@import "assets/scss/application";
</style>
