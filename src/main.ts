import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/tailwind.css";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

//createApp(App).mount('#app')
const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(Antd);
app.mount("#app");
