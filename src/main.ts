import 'virtual:windi.css';
import 'ant-design-vue/dist/antd.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import Antd from 'ant-design-vue';

const app = createApp(App);

app.use(router);
app.use(Antd);
app.use(createPinia());

app.mount('#app');
