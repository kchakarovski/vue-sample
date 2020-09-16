<template>
  <header>
      <div class="main-flex">
        <div class="main-flex__item item-1"><a href="#">{{input}}</a></div>
        <div class="main-flex__item item-2"><a href="#" v-if="hide" key="onlineshop" @click="shuffle">Online Shop</a></div>
        <div class="main-flex__item item-3">
          <a href="#"><span>&#8593;</span> </a>
        </div>
      </div>
    </header>
</template>
<script>
export default {
  name: "Header",
  data(){
    return{
      hide: true,
    };
  },
  methods: {
    changeFun() {
      this.hide = !this.hide
    },
    // shuffle() {
    //   this.footernav = _.shuffle(this.footernav);
    // },
  },
  props:{
    input: {
      type: String
    },
  }, 
}
</script>
