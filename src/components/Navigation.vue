  <template>
  <div class="navigation">
    <ul class="main-flex">
      <li class="main-flex__item" v-for="(value, key) in inputData" :key="key">
        <router-link :to="value.link">
          <span v-text="value.name" />
        </router-link>
      </li>
    </ul>
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
