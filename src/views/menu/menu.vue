<template>
  <el-header style="text-align: right; font-size: 12px">
    <div id="loginDiv">
      <el-dropdown>
        <el-avatar style="font-size: 10px"> {{ user }}</el-avatar>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-on:click="userInformation()">个人信息</el-dropdown-item>
            <el-dropdown-item v-on:click="quit()">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"

        @select="handleSelect"
        collapse-transition="true"
    >
      <el-menu-item index="1" v-on:click="menu">
        <el-icon>
          <home-filled/>
        </el-icon>
        首页
      </el-menu-item>
      <el-menu-item index="2" v-on:click="contactUs()">
        <el-icon>
          <phone-filled/>
        </el-icon>
        联系我们
      </el-menu-item>
    </el-menu>
  </el-header>


  <router-view/>
</template>

<script>
import $store from '../../store/index.js'
import {provinceAndCityDataPlus} from 'element-china-area-data'
import {ElMessage} from "element-plus";

export default {
  name: "home",
  data() {
    return {
      adminSee: false,
      userSee:true,
      options: provinceAndCityDataPlus,
      selectedOptions: [],
      user: this.$cookies.get("username")
    }
  }, methods: {
    menu() {
      this.$router.push({path: '/menu/home'})
    },
    contactUs() {
      this.$router.push({path: '/menu/contactUs'})
    },quit(){
      this.$router.push({path: '/'})
    },userInformation(){
      this.$router.push({path: '/menu/userInformation'})
    }
  }, mounted() {
    //我设置的将登录的用户数据存进cookies，有效期半小时，当过期之后会警告重新登录然后跳转回登录页
    // if (this.$cookies.isKey("type" || this.$cookies.get("type").length === 0)) {
    //   if (this.$cookies.get("type") === "2") {
    //     this.adminSee = true
    //     this.userSee=false
    //   }
    // } else {
    //   ElMessage({
    //     message: '请重新登录',
    //     type: 'warning',
    //   })
    //   const that = this;
    //   this.timer = setTimeout(function () {
    //     that.$router.push({path: '/'})
    //   }, 1000);
    // }
  }
}
</script>

<style scoped>
#loginDiv {
  float: right;
  margin-top: 10px;
}

</style>