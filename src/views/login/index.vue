<template>
  <div class="login">
    <LoginPanel />
  </div>
</template>

<script setup lang="ts" >
import LoginPanel from './components/login-panel/index.vue'
</script>

<style lang="scss" scoped>
.login {
  @apply w-full h-full flex justify-center items-center;
  background: url("@/assets/img/login-bg.svg");
}
</style>
