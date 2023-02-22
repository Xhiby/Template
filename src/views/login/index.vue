<template>
  <div class="login">
    <el-container>
      <el-aside
        class="bg"
        width="70%">
        <p>Welcome</p>
      </el-aside>
      <el-main>
        <div class="login-form">
          <el-form
            :model="from"
            label-width="120px">
            <el-form-item label="用户名">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button>取消</el-button>
              <el-button
                type="primary"
                @click="onSubmit"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
  import { reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import { useUserStore } from '../../stores/user'

  // 路由对象
  const router = useRouter()

  // Pinia对象
  const store = useUserStore()

  const form = reactive({
    name: 'User Name',
    password: 'User Password'
  })

  const setUserInfo = (userName) => {
    store.userInfo.userName = userName
  }

  const onSubmit = () => {
    setUserInfo(form.name)
    router.push('/index')
  }
</script>

<style lang="scss" scoped>
  .login {
    .bg {
      background-color: rgb(78, 190, 255);
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        font-size: 5em;
        color: white;
      }
    }
    .login-form {
      height: calc(100vh - 40px);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
