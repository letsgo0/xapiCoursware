
<template>
  <el-form
    :model="infoForm"
    status-icon
    :rules="rules"
    ref="infoForm"
    label-width="100px"
    class="demo-infoForm"
  >
    <el-form-item label="用户" prop="name">
      <el-input
        type="text"
        v-model="infoForm.name"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input
        type="email"
        v-model="infoForm.email"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="storeForm('infoForm')">保存</el-button>
      <el-button type="warning" @click="resetForm('infoForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    const checkEmail = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入邮箱地址！"));
      } else if (!/^.{1,15}@.{1,20}$/.test(value)) {
        return callback(new Error("邮箱格式错误！"));
      }
      return callback();
    };
    const checkName = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入用户名！"));
      } else if (value.length > 7) {
        return callback(new Error("用户名最多六位！"));
      }
      return callback();
    };
    return {
      infoForm: {
        name: "",
        email: "",
        
      },
      rules: {
        name: [{ validator: checkName, trigger: "blur" }],
        email: [{ validator: checkEmail, trigger: "blur" }],
        
      },
    };
  },
  methods: {
    storeForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style>
</style>
