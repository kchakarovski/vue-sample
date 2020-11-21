<template>
  <div class="products">
    <div
      class="products__item"
      v-for="(value, key) in selectedData.produkt"
      :key="key">
      <slot name="title">
        <div class="products__item--title" v-text="value.name" />
      </slot>
      <slot name="img">
        <img :src="value.img" :alt="value.name" class="products__item--img" />
      </slot>
      <slot name="price">
        <p class="products__item--price" v-text="value.price" />
      </slot>
    </div>
  </div>
</template>
<script>
import { products } from "../data/produkti";
export default {
  name: "page",
  components: {},
  data() {
    return {
      slug: "",
      selectedData: [],
      main: products, // -----
    };
  },
  watch: {
    $route(to) {
      this.main.filter((element) => {
        if (element.slug === to.params.slug) {
          this.selectedData = element;
        }
      });
    },
  },
};
</script>
<style></style>
