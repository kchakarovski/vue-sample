<template>
  <div class="footer-navigation">
    <ul v-for="(value, key) in footer" :key="key">
      <li>{{ value.li1 }}</li>
      <li>{{ value.li2 }}</li>
      <li>{{ value.li3 }}</li>
      <li>{{ value.li4 }}</li>
      <li>{{ value.li5 }}</li>
      <li>{{ value.li6 }}</li>
    </ul>
    <button @click="changeMessage('This is message from child component')">
      Change
    </button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    changeMessage(msg) {
      this.$emit("clicked", msg);
    },
  },
  props: {
    footer: {
      type: String,
    },
  },
};
</script>

<!-- 
<li><a href="">Facebook</a></>
<li><a href="">Site Policy</a></li>
<li><a href="">Sitemap</a></li>
<li><a href="">Instagram</a></li>
<li><a href="">Privacy Policy</a></li>
<li><a href="">Twitter</a></li> -->
