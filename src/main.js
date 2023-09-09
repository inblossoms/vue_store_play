import store from "./store";
import App from "./App.vue";
import { createApp } from "vue";
import "./style.css";

createApp(App).use(store).mount("#app");
