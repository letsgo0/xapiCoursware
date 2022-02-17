
<template>
  <!-- <Store></Store> -->
  <XapiJs></XapiJs>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import Store from "./components/Store.vue";
import XapiJs from "../testXapiWarpper.vue";

export default defineComponent({
  name: "App",
  components: {
    // Store,
    XapiJs
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
