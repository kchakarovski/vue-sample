<template>
  <div>
      <slot name="h">
      <h1>Header</h1>
      </slot>
      <span>Span</span>
      <p>Paragraph lorem ipsum</p>
  </div>
</template>

<script>
export default {
    name: "block",
    data() {
    return {
      
    };
  },
    methods(){

    }
}
</script>

<style>

</style>