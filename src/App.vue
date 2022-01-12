<template>
  <div class="font-bold">
    用户名:{{ mainStore.name }}
    <br />
    长度:{{ mainStore.nameLength }}
  </div>
  <hr />
  <button @click="updateName">修改store中的name</button>
  <ol>
    <li>1</li>
    <li>1</li>
    <li>1</li>
  </ol>
  <a-button type="primary">Primary Button</a-button>
  <a-button>Default Button</a-button>
  <a-button type="dashed">Dashed Button</a-button>
  <a-button type="text">Text Button</a-button>
  <a-button type="link">Link Button</a-button>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store'

const mainStore = useMainStore()

const updateName = () => {
  // $patch 修改 store 中的数据
  mainStore.$patch({
    name: '名称被修改了,nameLength也随之改变了'
  })
}
</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $test-color;
  margin-top: 60px;
}
</style>

