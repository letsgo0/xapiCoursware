<template>
  <div class="hello">
    <h1>Component:{{ index }}</h1>
    <p>
      Name:<input
        type="text"
        v-model="student.name"
        placeholder="Please enter name"
      />
    </p>
    <p>
      Age:<input
        type="text"
        v-model="student.age"
        placeholder="Please enter age"
      /><button @click="deleteStudent">Delete</button>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
    items: {
      type: Array,
      default: Array,
    },
  },
  data() {
    return {
      student: {
        name: "",
        age: "",
      },
    };
  },
  watch: {
    student: {
      handler(newV, oldV) {
        console.log("student watch is invoked!!");
        if (newV.name.length === 0) {
          return false;
        }
        if (newV.age.length === 0) {
          return false;
        }
        this.$emit("uploadData", { index: this.index, data: newV });
      },
      deep: true,
    },
    items: {
      handler(newV, oldV) {
        console.log("items watch is invoked!!");
        if (newV.length !== 0) {
          this.student = { ...newV[this.index] };
        }
      },
      deep: true,
    },
  },
  methods: {
    deleteStudent: function () {
      console.log("deleteStudent() is invoked!!");
      this.$emit("deleteIndex", this.index);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>