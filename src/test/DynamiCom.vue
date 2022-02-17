<template>
  <div class="hello">
    <DynamiComSub
      v-for="(item, index) in items"
      :key="index"
      :index="index"
      :items="items"
      @deleteIndex="del"
      @uploadData="getData"
    >
    </DynamiComSub>
    <button @click="add">Add</button>
  </div>
</template>

<script>
import DynamiComSub from "./DynamiComSub.vue";
export default {
  data() {
    return {
      items: [{}],
      dataRec: [],
    };
  },
  components: {
    DynamiComSub,
  },
  methods: {
    //  add student
    add: function () {
      console.log("add is invoked!!");
      this.items.push({ name: "", age: "" });
    },
    // delete student
    del: function (index) {
        console.log("del() is invoked!!")
      //  not allow to delete the first
      if (index !== 0) {
        this.items.splice(index, 1);
        console.log("deleted:", JSON.stringify(this.items));
      }
    },
    //  get the data from child
    getData: function (val) {
        console.log("getData() is invoked!!")
      const index = val.index;
      this.items[index] = val.data;
      console.log("I got the data:", JSON.stringify(this.items));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>