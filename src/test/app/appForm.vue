<template>
  <Form></Form>
  <!-- <Store></Store> -->
  <!-- <Test></Test> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Form from "./test/Form.vue";

export default defineComponent({
  name: "App",
  components: {
    Form,
    // Test
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