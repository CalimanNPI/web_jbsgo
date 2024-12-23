<template>
  <nav
    :class="[
      scrollPosition > 500
        ? 'bg-white fixed drop-shadow-2xl text-rose-700 '
        : 'bg-transparent absolute text-slate-100',
    ]"
    class="fixed w-full z-20 top-0 start-0"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a
        href="/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <!--
        <img
        src="#"
        class="h-8"
        alt="Flowbite Logo"
        />
        -->
        <span
          class="self-center text-2xl font-extrabold whitespace-nowrap text-rose-700"
          >JBS GO</span
        >
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      
        <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
      <a href="#services" data-dropdown-toggle="language-dropdown-menu" class="text-white bg-rose-500 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
        Servicios
      </a>
      <!-- Dropdown -->
      <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-slate-100 rounded-lg shadow dark:bg-slate-700" id="language-dropdown-menu">
        <ul class="py-2 font-medium" role="none">
          <li>
            <RouterLink to="/licenciamiento" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-600 dark:hover:text-white" role="menuitem">
              <div class="inline-flex items-center">
                <svg class="text-rose-500 h-3.5 w-3.5 rounded-full me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
  <path fill-rule="evenodd" d="M12.78 7.595a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25Zm-8.25-3.25 3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06Z" clip-rule="evenodd" />
</svg>                Licenciamiento & Mayorista de tecnología
              </div>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/ciberseguridad" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-600 dark:hover:text-white" role="menuitem">
              <div class="inline-flex items-center">
                <svg class="text-rose-500 h-3.5 w-3.5 rounded-full me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
  <path fill-rule="evenodd" d="M12.78 7.595a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25Zm-8.25-3.25 3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06Z" clip-rule="evenodd" />
</svg>                Ciberseguridad & Videovigilancia
              </div>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/mantenimiento" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-600 dark:hover:text-white" role="menuitem">
              <div class="inline-flex items-center">
                <svg class="text-rose-500 h-3.5 w-3.5 rounded-full me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
  <path fill-rule="evenodd" d="M12.78 7.595a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25Zm-8.25-3.25 3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06Z" clip-rule="evenodd" />
</svg>                Mantenimiento & Servicio
              </div>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/energia" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-600 dark:hover:text-white" role="menuitem">
              <div class="inline-flex items-center">
                <svg class="text-rose-500 h-3.5 w-3.5 rounded-full me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
  <path fill-rule="evenodd" d="M12.78 7.595a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25Zm-8.25-3.25 3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06Z" clip-rule="evenodd" />
</svg>                Energía & Sistemas de detección de incendios
              </div>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/logistica" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-600 dark:hover:text-white" role="menuitem">
              <div class="inline-flex items-center">
                <svg class="text-rose-500 h-3.5 w-3.5 rounded-full me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
  <path fill-rule="evenodd" d="M12.78 7.595a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25Zm-8.25-3.25 3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06Z" clip-rule="evenodd" />
</svg>

                Logística & transportación empresarial
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
      <button
          :class="[
            scrollPosition > 500
              ? 'text-rose-700 '
              : 'text-slate-100',
          ]"
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-slate-200"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
  </div>
        
       
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul    :class="[
            scrollPosition > 500
              ? 'bg-white '
              : 'bg-transparent',
          ]"
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 "
        >
       
          <li>
            <a
              href="#about"
              class="block py-2 px-3 rounded text-rose-500 md:hover:bg-transparent md:hover:text-rose-700 md:p-0 "
              >Nosotros</a
            >
          </li>
          <li>
            <a
              href="#contact"
              class="block py-2 px-3 rounded text-rose-500 md:hover:bg-transparent md:hover:text-rose-700 md:p-0 "
              >Contacto</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  


</template>

<script>
import { RouterLink } from "vue-router";
import { initFlowbite, initCollapses } from "flowbite";

export default {
  data() {
    return {
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    goToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    initFlowbite();
    initCollapses();
  },
};
</script>
