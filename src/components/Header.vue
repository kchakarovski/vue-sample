<template>
  <header>
      <div class="main-flex">
        <div class="main-flex__item item-1"><a href="#">{{input}}</a></div>
        <div class="main-flex__item item-2"><a href="#">Online Shop</a></div>
        <div class="main-flex__item item-3">
          <a href="#"><span>&#8593;</span> </a>
        </div>
      </div>
    </header>
</template>
<script>
export default {
  name: "Header",
  props:{
    input: {
      type: String
    },
  }, 
}
</script>
