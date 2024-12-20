import { createRouter, createMemoryHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import CiberseguridadView from "./views/CiberseguridadView.vue";
import EnergiaView from "./views//EnergiaView.vue";
import LicenciamientoView from "./views/LicenciamientoView.vue";
import LogisticaView from "./views/LogisticaView.vue";
import MantenimientoView from "./views/MantenimientoView.vue";

const routes = [
  { path: "/home", component: HomeView },
  { path: "/ciberseguridad", component: CiberseguridadView },
  { path: "/energia", component: EnergiaView },
  { path: "/licenciamiento", component: LicenciamientoView },
  { path: "/logistica", component: LogisticaView },
  { path: "/mantenimiento", component: MantenimientoView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

export { router, routes, createRouter };
