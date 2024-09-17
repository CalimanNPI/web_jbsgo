import { createApp } from "vue";
import "./style.css";
import "flowbite";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { router } from "./routes";

import App from "./App.vue";

AOS.init();
createApp(App).use(router).mount("#app");


