<template>
  <div class="app">
    <slider :inputData="sliderimages" />
    <app-header />
    <wrapper />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <app-footer />
  </div>
</template>
<script>
import Slider from "../src/components/Slider";
import AppHeader from "../src/components/AppHeader";
import AppFooter from "../src/components/AppFooter";
import Wrapper from "../src/components/Wrapper";
export default {
  name: "App",
  components: {
    // "app-header": Header,
    Slider,
    AppHeader,
    AppFooter,
    Wrapper,
  },
  data() {
    return {
      sliderimages: [
        "https://images.hdqwalls.com/download/pizza-baked-chesse-spicy-7t-1920x1080.jpg",
        "https://i.ibb.co/2SvXnwQ/164-1645988-wallpaper-burger-food-fast-food-burger-special.jpg",
      ],
    };
  },
  methods: {
    change(msg) {
      this.message = msg;
    },
    notify(link) {
      alert(link);
    },
    // redirectFooter(url){
    //   this.$router.push(url)
    // }
  },
};
</script>
<style lang="scss">
@import "assets/scss/application";
</style>
