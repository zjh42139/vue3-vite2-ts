<template>
  <div class="login-panel">
    <a-tabs v-model:activeKey="activeKey" centered>
      <a-tab-pane key="account">
        <template #tab>
          <span>
            <user-outlined />账号登陆
          </span>
        </template>
        <LoginAccount ref="accountRef" />
      </a-tab-pane>
      <a-tab-pane key="phone">
        <template #tab>
          <span>
            <mobile-outlined />手机登陆
          </span>
        </template>
        <LoginPhone />
      </a-tab-pane>
    </a-tabs>

    <a-button type="primary" class="w-full mt-4" @click="handleLogin">立即登录</a-button>
  </div>
</template>

<script setup lang="ts" >
import { ref } from 'vue';
import { UserOutlined, MobileOutlined } from '@ant-design/icons-vue';
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'


const activeKey = ref('account')
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const handleLogin = () => {
  accountRef.value.onSubmit()
}
</script>

<style lang="scss" scoped>
.login-panel {
  width: 320px;
}
</style>
