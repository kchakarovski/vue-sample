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
      sliderImages: [
        "https://images.hdqwalls.com/download/pizza-baked-chesse-spicy-7t-1920x1080.jpg",
        "https://images.hdqwalls.com/download/pizza-baked-chesse-spicy-7t-1920x1080.jpg",
      ],
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
      return this.sliderImages[Math.abs(this.currentIndex) % this.sliderImages.length];
    },
  },
};
</script>

<style>
</style>