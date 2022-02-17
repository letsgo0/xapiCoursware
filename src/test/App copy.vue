<template >
  <Store v-if="storeVisible" @done="done"></Store>
  <Home :person="person" v-if="!storeVisible"></Home>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import Store from "../components/Login.vue";
import Home from "../components/Home.vue";

export default defineComponent({
  name: "App",
  setup() {
    const storeVisible = ref(true);
    const person = reactive({
      name: "CT",
      email: "Hello@World.com",
      endPoint: "http://172.81.237.74/data/xAPI",
      order: -1,
      key: "4f8cbb051ce732be931c8123f39dd2cfa061b25a",
      secret: "e33f148ed7f8ba84b48974cdfd7f7bcd3e0a7575",
    });
    return {
      storeVisible,
      person,
    };
  },
  methods: {

    done(person: {
      name: string;
      email: string;
      endPoint: string;
      order: number;
      key: string;
      secret: string;
    }) {
      this.storeVisible = false;
      this.person = person;
    },
    importXapiWarpperJs() {
      const script = document.createElement("script");
      script.type = "text/script";
      const head = document.getElementsByTagName("head")[0];
      script.src = "/src/assets/js/xapiwrapper.min.js";
      head.appendChild(script);
      const button = document.createElement("button");
      button.textContent = "assssssssssssssssssssssssssssssssssssssssss";
      button.style.width = "100px";
      button.style.height = "100px";
      button.id = "uni";
      // button.
      const body = document.getElementsByTagName("body")[0];
      body.appendChild(button);
    },
  },
  components: {
    Store,
    Home,
  },
  // mounted() {
  //   this.importXapiWarpperJs();
  //   console.log(ADL);
  // },
});
</script>

<style >
#app {
  width: 100%;
  height: 100%;
  background-image: url("./assets/image/background.png");
  background-size: cover;
}

</style>