<template>
  <div>
    <ul  class="main-flex">
      <li class="main-flex__item" :to="value.link" v-for="(value, key) in headernavcomp" :key="key">
        <span v-text="value.name" />
      </li>
    </ul>
    <!-- <ul>
      <li v-for="(value,key) in images" :key="key">
        <span>{{ value.chocolate }}</span>
      </li>
      </ul> -->
      <ul>
      <li v-for="(value, key) in routernavcomp" :key="key">
        <router-link :to="value.link">
          <span v-text="value.name" />
          </router-link>
      </li>
      </ul>
      <div class="footer-navigation">
      <ul>
      <li class="footer-navigation__wrapper" v-for="(value, key) in footernavcomp" :key="key">
        <span class="test" v-text="value.name" />
        <span class="subtitle" v-text="value.subtitle" />
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "navcomp",
  data() {
    return {
      images: {
        chocolate:
          "https://i1.wp.com/www.eatthis.com/wp-content/uploads/2017/10/dark-chocolate-bar-squares.jpg?fit=1024%2C750&ssl=1",
      },
      header: [
        {
          name: "Maison Cacao",
          link: "/",
        },
        {
          name: "Online Shop",
          link: "/",
        },
        {
          name: "Arrow -> &#8593;",
          link: "/",
        },
      ],
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
      footer: [
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
    };
  },
  props: {
    headernavcomp: {
      type: String,
    },
    routernavcomp: {
      type: Array,
    },
    footernavcomp: {
      type: String,
    },
    imagescomp:{
      type: String,
    }
  },
  methods() {},
};
</script>
