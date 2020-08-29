<template>
  <div>
    <div>
      <!-- DAY 1 -->
      <h1>DAY 101</h1>
      <div class="wrapper" v-if="showDiv">
        <span v-text="message" />
        <!-- Primer 1 -->
        <button @click="handleClick">Button</button>
        <span>{{ message1 }}</span>
        <!-- Primer 2 -->
      </div>

      <div class="wrapper" v-else>
        <h2>I was hidden</h2>
      </div>
    </div>
    <div>
      <!-- DAY 1 HOMEWORK -->
      <h1>HOMEWORK 1</h1>
      <div class="d1wrapper" v-for="(value, key) in result" :key="key">
        <img :src="value.img" />
        <span>{{ value.msg1 }}</span>
        <span v-text="value.msg2"></span>
        <!-- PRIMER 1 -->
        <div
          @click="value.available = !value.available"
          :class="{ available: value.available }"
        >
          <span class="btn">Click Me!</span>
        </div>
        <div class="clr">|</div>
        <h2>V FOR</h2>

        <!-- <ul>
              <li v-for="character in characters" :key="character">{{ character }}</li>
            </ul>
            <ul>
              <li v-for="(ninja, key) in ninjas" :key="key">{{ key + " " + ninja.name+ " " + ninja.age }}</li>
            </ul> -->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  // components: {

  // }
  data() {
    return {
      result: [
        {
          img:
            "https://media1.tenor.com/images/cd37fa49c983ac905df0016fd5b6a2ee/tenor.gif?itemid=13165216",
          msg1:
            "Lorem ipsum sample Lorem ipsum sample Lorem ipsum sample Lorem ipsum sample Lorem ipsum sample Lorem ipsum sample 1",
          msg2:
            "Lorem ipsum sample Lorem ipsum sampleLorem ipsum sample Lorem ipsum sample Lorem ipsum sample Lorem ipsum sampleLorem ipsum sampleLorem ipsum sample 1",
          available: false,
        },
        {
          img:
            "https://media1.tenor.com/images/cd37fa49c983ac905df0016fd5b6a2ee/tenor.gif?itemid=13165216",
          msg1:
            "Lorem ipsum sample Lorem ipsum sample Lorem ipsum sample Lorem ipsum sample Lorem ipsum sample Lorem ipsum sample 2",
          msg2:
            "Lorem ipsum sample Lorem ipsum sampleLorem ipsum sample Lorem ipsum sample Lorem ipsum sample Lorem ipsum sampleLorem ipsum sampleLorem ipsum sample 2",
          available: false,
        },
      ],
      available: false,
      nearby: false,
      message: "row 1",
      message1: "row 2",
      msg1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt sollicitudin felisa sodales nisl aliquet eu. Sed eu suscipit odio. Phasellus nec est quis dolor tristique ultrices.Maecenas posuere nisi mauris, id porta augue posuere ac. Mauris commodo et libero non commodo.Aenean commodo feugiat enim, eu consequat elit tincidunt nec.",
      msg2:
        "Vestibulum id justo id magna tempus commodo sit amet eget ipsum. Donec risus arcu, efficitur quis. Phasellus nec est quis dolor tristique ultrices.Maecenas posuere nisi mauris, id porta augue posuere ac. Mauris commodo et libero non commodo.Aenean commodo feugiat enim, eu consequat elit tincidunt nec.",
      showDiv: true,
      image:
        "https://media1.tenor.com/images/cd37fa49c983ac905df0016fd5b6a2ee/tenor.gif?itemid=13165216",
      name: "krste",
      characters: ["Oliver", "Marija", "Lora", "Teodora"],
      ninjas: [
        { name: "Olivera", age: 27 },
        { name: "Vera", age: 35 },
        { name: "Kire", age: 55 },
      ],
    };
  },
  // mounted(){
  //   setTimeout(() => {
  //       this.handleClick();
  //   },3000)
  // },
  methods: {
    handleClick() {
      this.message = "temple 1";
      this.message1 = "temple 2";
      this.showDiv = false;
    },
    compClasses() {
      return {
        available: this.available,
        nearby: this.nearby,
      };
    },
  },
};
</script>