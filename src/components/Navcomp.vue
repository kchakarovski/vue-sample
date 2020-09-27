<template>
  <div>
    <ul class="main-flex">
      <li class="main-flex__item" v-for="(value, key) in inputData" :key="key">
        <span v-text="value.img" />
        <router-link :to="value.link">
          <span v-text="value.name" />
        </router-link>
        <div v-text="value.txt"></div>
        <router-link :to="value.link" >
        <h1 v-text="value.btn" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navcomp",
  data() {
    return {};
  },
  props: {
    inputData: {
      type: Array,
      default: () => {
        return [
          {
            name: "Maison Cacao",
            link: "Cacao",
            subtitle: "",
          },
          {
            name: "Maison Cacao",
            link: "Cacao",
            subtitle: "",
          },
          {
            name: "Maison Cacao",
            link: "Cacao",
            subtitle: "",
          },
        ];
      },
    },
  },
};
</script>
