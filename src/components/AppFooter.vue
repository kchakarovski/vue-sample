<template>
  <div class="footer">
    <a
      class="footer--link"
      v-text="inputData.name"
      @click="footerLink(inputData.link)"
    />
  </div>
</template>

<script>
export default {
  name: "Appfooter",
  data() {
    return {};
  },
  props: {
    inputData: {
      type: Object,
      default: () => {
        return {
          name: "Copyright © 2020 Cakarovski | Contact",
          link: "www.facebook.com",
        };
      },
    },
  },
  methods: {
    // footerLink(url) {
    //   this.$emit("clickedFooterLink", url);
    // },
    footerLink(url) {
      this.$router.push(url);
    },
  },
};
</script>

<style>
</style>