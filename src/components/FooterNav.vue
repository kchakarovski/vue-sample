<template>
  <div class="footer-navigation">
    <ul>
      <li class="footer-navigation__wrapper" v-for="(value, key) in footer" :key="key">
        <span v-text="value.name" />
        <span v-text="value.subtitle" />
      </li>
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
      type: Array,
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
