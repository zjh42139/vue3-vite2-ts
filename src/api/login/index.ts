import http from '@/utils/http';

import { IAccount, IDataType, ILoginResult } from './type';

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法: /users/1
  UserMenus = '/role/', // 用法: role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return http.post<IDataType<ILoginResult>>(LoginAPI.AccountLogin, account);
}

// export function requestUserInfoById(id: number) {
//   return http.get<IDataType>({
//     url: LoginAPI.LoginUserInfo + id,
//     showLoading: false,
//   });
// }

// export function requestUserMenusByRoleId(id: number) {
//   return http.get<IDataType>({
//     url: LoginAPI.UserMenus + id + '/menu',
//     showLoading: false,
//   });
// }
