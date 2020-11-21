<template>
  <div class="row">
    <div class="row__item">
      <slot name="img">
        <img
          class="row__item--img"
          :src="inputData.img"
          :alt="inputData.price"
        />
      </slot>
      <slot name="price">
        <div class="row__item--price" v-text="inputData.price" />
      </slot>
      <!-- <slot name="btn">
        <button
          class="row__item--btn"
          v-if="toggleView"
          @click="toggleviewClick"
          v-text="inputData.btn"
        />
      </slot> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "row",
  data() {
    return {
      toggleView: true,
    };
  },
  methods: {
    toggleviewClick() {
      this.toggleView = !this.toggleView;
    },
  },
  props: {
    inputData: {
      type: Object,
      default: () => {
        return {
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-u3176imqyit3ACRlHzFj17hGTX6Qb1lBIQ&usqp=CAU",
          price: "test test test",
          btn: "Hidden",
        };
      },
    },
  },
};
</script>

<style>
</style>