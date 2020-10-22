<template>
  <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" class="sliderImages" />
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      timer: null,
      currentIndex: 0,
    };
  },
  props: {
    inputData: {
      type: Array
    },
    timerMs: {
      type: Number,
      default: () => {
        return 10000;
      },
    },
  },
  mounted: function () {
    this.startSlide();
  },
  methods: {
    startSlide() {
      this.timer = setInterval(this.next, this.timerMs);
    },

    next() {
      this.currentIndex += 1;
    },
    prev() {
      this.currentIndex -= 1;
    },
  },
  computed: {
    currentImg() {
      return this.inputData[
        Math.abs(this.currentIndex) % this.inputData.length
      ];
    },
  },
};
</script>

<style>
</style>