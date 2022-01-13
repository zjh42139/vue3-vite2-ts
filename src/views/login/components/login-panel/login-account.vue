<template>
  <div class="login-account">
    <a-form :model="formState">
      <a-form-item label="Username" v-bind="validateInfos.username">
        <a-input
          v-model:value="formState.username"
          @blur="validate('username', { trigger: 'blur' }).catch(() => { })"
        />
      </a-form-item>

      <a-form-item label="Password" v-bind="validateInfos.password">
        <a-input-password
          v-model:value="formState.password"
          @blur="validate('password', { trigger: 'blur' }).catch(() => { })"
        />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRaw } from 'vue';
import { Form } from 'ant-design-vue';
import { useUserStore } from '@/store/modules/user'
import localCache from '@/utils/local-cache'

const useForm = Form.useForm;
const userStore = useUserStore()
interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
const formState = reactive<FormState>({
  username: localCache.get('username') ?? '',
  password: localCache.get('password') ?? '',
  remember: true,
})
const rulesRef = reactive({
  username: [{ required: true, message: 'Please input your username!' }, {
    pattern: /^[a-z0-9]{5,10}$/,
    message: '用户名必须是5-10个字母或者数字',
    trigger: 'blur'
  }],
  password: [{ required: true, message: 'Please input your password!' }, {
    pattern: /^[a-z0-9]{3,}$/,
    message: '用户名必须是3位以上的字母或者数字',
    trigger: 'blur'
  }],
});

const { resetFields, validate, validateInfos } = useForm(formState, rulesRef);
const onSubmit = () => {
  validate()
    .then(() => {
      console.log(toRaw(formState));
      if (formState.remember) {
        localCache.set('username', formState.username)
        localCache.set('password', formState.password)
      } else {
        localCache.delete('username')
        localCache.delete('password')
      }
      const params = {
        username: formState.username,
        password: formState.password
      }
      userStore.accountLoginAction(params)
    })
    .catch(err => {
      console.log('error', err);
    });
};

defineExpose({
  onSubmit
})
</script>

<style lang="scss" scoped></style>
