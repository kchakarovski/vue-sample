<template>
  <div class="products">
    <!-- FIRST LOOP FOR THE ROW -->
    <div
      class="products__row"
      v-for="(value, key) in selectedData.produkt"
      :key="key"
    >
      <!-- 2ND LOOP FOR DRINKS -->
      <div
        class="products__row__item"
        v-for="(value, key) in value.drinks"
        :key="key"
      >
        <slot name="title">
          <div class="products__row__item--title" v-text="value.name" />
        </slot>
        <slot name="img">
          <img
            class="products__row__item--img"
            :src="value.img"
            :alt="value.name"
          />
        </slot>
        <slot name="price">
          <p class="products__row__item--price" v-text="value.price" />
        </slot>
      </div>
      <!-- 3RD LOOP FOR FAST FOOD -->
      <div
        class="products__row__item"
        v-for="(value, key) in value.pizzas"
        :key="key"
      >
        <slot name="title">
          <div class="products__row__item--title" v-text="value.name" />
        </slot>
        <slot name="img">
          <img
            class="products__row__item--img"
            :src="value.img"
            :alt="value.name"
          />
        </slot>
        <slot name="price">
          <p class="products__row__item--price" v-text="value.price" />
        </slot>
        <slot name="ingredients">
          <p
            class="products__row__item--ingredients"
            v-text="value.ingredients"
          />
        </slot>
      </div>
      <!-- 4TH LOOP FOR DESSERTS -->
      <div
        class="products__row__item"
        v-for="(value, key) in value.desserts"
        :key="key"
      >
        <slot name="title">
          <div class="products__row__item--title" v-text="value.name" />
        </slot>
        <slot name="img">
          <img
            class="products__row__item--img"
            :src="value.img"
            :alt="value.name"
          />
        </slot>
        <slot name="price">
          <p class="products__row__item--price" v-text="value.price" />
        </slot>
      </div>
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
