<template>
  <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img class="sliderImg" :src="currentImg" />
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      slider: ["", ""],
      timer: null,
      currentIndex: 0,
    };
  },
  props: {
    inputData: {
      type: Array,
    },
  },
  mounted: function () {
    this.startSlide();
  },
  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 40000);
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
      return this.slider[Math.abs(this.currentIndex) % this.slider.length];
    },
  },
};
</script>

<style>
</style>