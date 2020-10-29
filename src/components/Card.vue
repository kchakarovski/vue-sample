<template>
  <div class="card">
    <div class="card__item">
      <slot name="title">
        <h1 class="card__item--title" v-text="inputData.title" />
      </slot>
      <slot name="img">
        <img
          class="card__item--img"
          :src="inputData.img"
          :alt="inputData.description"
        />
      </slot>
      <slot name="description">
        <p class="card__item--description" v-text="inputData.description" />
      </slot>
      <button
        class="card__item--btn"
        @click="toggle(inputData.link)"
        v-text="inputData.buttonText"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    inputData: {
      type: Object,
      default: () => {
        return {
          title: "title",
          img: "https://i.ibb.co/3vx908b/drinks.png",
          description: "lorem ipsum lorem ipsum lorem ipsum",
          buttonText: "read more",
          link: "/",
        };
      },
    },
  },
  methods: {
    toggle(link) {
      //   document.getElementById(link).scrollIntoView({ behavior: "smooth" });
      this.$emit("clickedButton", link);
    },
  },
};
</script>

<style>
</style>