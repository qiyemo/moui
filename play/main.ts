import { createApp } from 'vue';
import Moui from '@/components';
import App from './App.vue';
import '@/theme/index.css';

const app = createApp(App).use(Moui);
app.mount('#app');
