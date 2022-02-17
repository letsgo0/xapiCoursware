<template>
  <el-container>
    <el-main>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="12">
          <!-- <el-form ref="form" label-width="80px"> -->
          <el-form status-icon label-position="left" label-width="66px">
            <el-popover
              trigger="manual"
              title="警告"
              width="200px"
              v-model:visible="visiable.name"
              placement="bottom"
            >
              <template v-slot:default>
                <el-button type="text" class="tips-content">
                  <li>{{ warningText.name }}</li>
                </el-button>
              </template>
              <template #reference>
                <el-form-item label="用户名">
                  <el-input
                    type="text"
                    autocomplete="off"
                    placeholder="最多十位"
                    v-model.lazy="infoForm.userName"
                  ></el-input>
                </el-form-item>
              </template>
            </el-popover>
            <el-popover
              placement="bottom-start "
              title="警告"
              width="200px"
              trigger="manual"
              v-model:visible="visiable.email"
            >
              <template v-slot:default>
                <el-button
                  ><li>{{ warningText.email }}</li></el-button
                >
              </template>
              <template v-slot:reference>
                <el-form-item label="邮箱">
                  <el-input
                    type="text"
                    autocomplete="off"
                    placeholder="最多十位"
                    v-model.lazy="infoForm.email"
                  ></el-input>
                </el-form-item>
              </template>
            </el-popover>
            <el-form-item>
              <el-button type="primary" @click="storeForm('infoForm')"
                >保存</el-button
              >
              <el-button @click="resetForm('infoForm')">重置</el-button>
            </el-form-item>
          </el-form>
          <el-button type="primary" @click="show">toggle</el-button>
          <el-button type="primary"
            >double name + {{ infoForm.userName }}</el-button
          >
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { defineComponent, reactive, ref, watch } from "vue";
export default defineComponent({
  setup() {
    // 模板中控制显示的变量
    const visiable = reactive({ name: false, email: false });
    const warningText = reactive({
      name: "",
      email: "",
    });
    const infoForm = reactive({
      userName: "Ct",
      email: "",
    });
    const ha = ref("Ha");
    // 控制显示和隐藏的方法
    const show = () => {
      visiable.name = !visiable.name;
      console.log(visiable.name);
      warningText.name += "==";
    };
    watch(
      () => infoForm.userName,
      (userName, prevUserName) => {
        console.log("form watch is invoked");
        if (userName === "") {
          warningText.name = "用户名不能为空！";
          visiable.name = true;
        } else if (userName.length > 7) {
          warningText.name = "用户名最多六位！";
          visiable.name = true;
        } else {
          visiable.name = false;
        }
      }
    );
    return {
      visiable,
      ha,
      show,
      warningText,
      infoForm,
    };
  },
});
</script>

<style>
</style>
