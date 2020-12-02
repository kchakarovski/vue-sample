<template>
  <div class="header">
    <navigation @clickedNavigation="clickedNavigation" />
  </div>
</template>
<script>
import "../components/Navigation";
import Navigation from "./Navigation.vue";
export default {
  name: "Appheader",
  components: {
    Navigation,
  },
  props: {
    inputData: {
      type: Array,
      default: () => {
        return [
          {
            name: "Maison Cacao",
            link: "/",
          },
          {
            name: "Maison Cacao",
            link: "/sample",
          },
          {
            name: "Maison Cacao",
            link: "/contact",
          },
        ];
      },
    },
  },
  data() {
    return {
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
          name: "Контакт",
          link: "/contact",
        },
      ],
    };
  },
  methods: {
      clickedNavigation(url) {
          this.$router.push(url)
      }
  },
};
</script>

<style>
</style>