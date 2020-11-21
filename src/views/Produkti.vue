<template>
  <div class="products">
    <div v-for="(value, key) in selectedData.produkt" :key="key">
      
    </div>
  </div>
</template>
<script>
import { products } from "../data/produkti";
export default {
  name: "page",
  components:{
  },
  data() {
    return {
      slug: "",
      selectedData: [],
      main: products, // -----
    };
  },
  watch: {
    $route(to) {
      this.main.filter((element) => {
        if (element.slug === to.params.slug) {
          this.selectedData = element;
        }
      });
    },
  },
};
</script>

<style></style>
