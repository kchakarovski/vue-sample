<template>
  <div class="footer-navigation">
    <ul>
      <li
        class="footer-navigation__wrapper"
        v-for="(value, key) in footer"
        :key="key"
      >
        <span class="test" v-text="value.name" />
        <span class="subtitle" v-text="value.subtitle" />
      </li>
    </ul>
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
