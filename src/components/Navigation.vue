  <template>
  <div class="nav">
    <div class="nav__item" v-for="(value, key) in inputData" :key="key">
      <router-link class="nav__item--link" :to="value.link">
      <slot name="title">
        <span class="nav__item--title" v-text="value.name" />
      </slot>
      </router-link>
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
            name: "Maison Cacao",
            link: "Cacao",
          },
          {
            name: "Maison Cacao",
            link: "Cacao",
          },
          {
            name: "Maison Cacao",
            link: "Cacao",
          },
        ];
      },
    },
  },
  methods: {
    scroll(id) {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
