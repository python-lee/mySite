<template>
  <div id="app">
    <topDiv></topDiv>
    <router-view />
  </div>
</template>

<script>
import topDiv from './views/head/topDiv.vue'
export default {
  name: "App",
  components: {
    topDiv
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Lora;
}
</style>
