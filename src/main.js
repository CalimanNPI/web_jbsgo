import { createApp } from "vue";
import "./style.css";
import "flowbite";

import { router } from "./routes";

import App from "./App.vue";

createApp(App).use(router).mount("#app");
