  <template>
  <div class="nav">
    <div class="nav__item" v-for="(value, key) in inputData" :key="key">
      <slot name="link">
        <a
          @click="clickedNavigationItem(value.link)"
          class="nav__item--link"
          v-text="value.name"
        />
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {};
  },
  props: {
    inputData: {
      type: Array,
      default: () => {
        return [
          {
            name: "Malaga",
            link: "/",
          },
          {
            name: "About Us",
            link: "/sample",
          },
          {
            name: "Contact",
            link: "/contact",
          },
        ];
      },
    },
  },
  methods: {
    scroll(id) {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    },
    clickedNavigationItem(url) {
      this.$emit("clickedNavigation", url)
    },
  },
};
</script>
