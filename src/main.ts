import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// 导入自定义样式
import '@/styles/index.css';
// 导入原子化css unocss
import 'virtual:uno.css';
import pinia from '@/stores/index';

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');
