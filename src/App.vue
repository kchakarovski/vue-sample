<template>
  <div class="app">
    <div class="bgimg">
      <slider :inputData="sliderimages" />
      <div id="header">
        <navcomp :inputData="header" />
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
      <!-- <div class="card">
          <card v-for="(card, key) in cards" 
          :key="key" 
          :inputData="card"
          @clickedButton="notify"
          >
            <template v-slot:title>
              <h3 v-text="card.title" />
            </template>
          </card>
        </div> -->
    </transition>
    <!-- <slider :inputData="sliderimages" :timerMs="3000" /> -->
    <footer>
      <div id="row">
      <row :inputData="rows" />
      </div>
      <div id="footer">
        <a :href="footernav.link"><span v-text="footernav.name"></span></a>
      </div>
    </footer>
  </div>
</template>
<script>
import Navcomp from "../src/components/Navcomp";
import { cards } from "../src/data/cards";
import Slider from "../src/components/Slider";
import Card from "../src/components/Card";
import Row from "../src/components/Row";
export default {
  name: "App",
  components: {
    // "app-header": Header,
    Navcomp,
    Slider,
    Card,
    Row,
  },
  data() {
    return {
      cards,
      rows:
         {
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-u3176imqyit3ACRlHzFj17hGTX6Qb1lBIQ&usqp=CAU",
        price: "Милк Шејк - 80 / 100 Ден",
        btn: "Hidden",
      }
      ,
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
        // {
        //   name: "Услуги",
        //   link: "/",
        //   btn: "",
        // },
        // {
        //   name: "Мени",
        //   link: "/",
        //   btn: "",
        // },
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
