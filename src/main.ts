import 'virtual:windi.css';
import 'ant-design-vue/dist/antd.css';
import { createApp } from 'vue';
import { setupStore } from '@/store';
import App from './App.vue';
import router from './router';
import Antd from 'ant-design-vue';

const app = createApp(App);

app.use(router);
app.use(Antd);
// setup store
setupStore(app);

app.mount('#app');
