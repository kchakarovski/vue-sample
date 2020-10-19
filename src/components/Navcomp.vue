  <template>
  <div>
    <ul class="main-flex">
      <li class="main-flex__item" v-for="(value, key) in inputData" :key="key">
        <router-link :to="value.link">
          <span v-text="value.img" />
          <span v-text="value.name" />
          <div v-text="value.txt" />
          <h1 v-text="value.btn" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navcomp",
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
            subtitle: "",
          },
          {
            name: "Maison Cacao",
            link: "Cacao",
            subtitle: "",
          },
          {
            name: "Maison Cacao",
            link: "Cacao",
            subtitle: "",
          },
        ];
      },
    },
  },
};
</script>
