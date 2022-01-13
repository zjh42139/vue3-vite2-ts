import { defineStore } from 'pinia';

import { accountLoginRequest } from '@/api/login';
import router from '@/router';

import { IAccount } from '@/api/login/type';

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      name: '张三',
    };
  },
  actions: {
    async accountLoginAction(account: IAccount) {
      const data = await accountLoginRequest(account);
      console.log(account);

      router.push('/main');
    },
  },
});
