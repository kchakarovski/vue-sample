<template>
  <div class="">
    <button @click="changeState">Toggle</button>
    <transition name="slide" mode="out-in">
        <p v-if="show" key="loremipsum">Lorem ipsum</p>
        <p v-else key="loremipsum2">Lorem ipsum2</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TransitionName",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    changeState() {
      this.show = !this.show;
    },
  },
};
</script>
