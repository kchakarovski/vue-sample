<template>
  <div class="card__item">
    <h1 class="card__item--title" v-text="inputData.title" />
    <img
      class="card__item--img"
      :src="inputData.img"
      :alt="inputData.description"
    />
    <p class="card__item--description" v-text="inputData.description" />
    <button
      class="card__item--btn"
      @click="redirect(inputData.link)"
      v-text="inputData.buttonText"
    />
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
    redirect(link) {
      //   document.getElementById(link).scrollIntoView({ behavior: "smooth" });
      this.$router.push(link);
      document
        .getElementById("products")
        .scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>
</style>