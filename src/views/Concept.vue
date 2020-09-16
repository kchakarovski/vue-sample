<template>
  <div class="concept">
    <block>
      <template v-slot:h>
        <p>Lorem ipsum test</p>
      </template>
    </block>
  </div>
</template>
<script>
import Block from "../components/Block";
export default {
  name: "concept",
  components:{
    Block
  },
  data() {
    return {
      
    };
  },
};
</script>
