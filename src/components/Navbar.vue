<template>
   
    <!-- Section 1 -->
<section id="header" class="w-full px-8 bg-slate-50 fixed z-50 top-0 start-0 ">
    <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl z-50">
        <div class="relative flex flex-col md:flex-row">
            <router-link to="/#header" class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                <span class="mx-auto text-xl font-black leading-none text-rose-700 select-none">JBS GO<span class="text-rose-600">.</span></span>
            </router-link>
            <nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
            <a href="#_" id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex justify-center items-center mr-5 font-medium leading-6 text-slate-900 hover:text-rose-700">
              Servicios
               <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>
            </a>
            <!-- Dropdown menu -->
            <div id="dropdownNavbar" class="z-10 hidden font-normal bg-slate-50 divide-y divide-slate-100 rounded-lg shadow w-80 ">
                <ul class="py-2 text-sm text-gray-700 " aria-labelledby="dropdownLargeButton">
                  <li><RouterLink to="/licenciamiento" class="block px-4 py-2 text-slate-900 hover:text-rose-700 font-medium leading-6">Licenciamiento & Mayorista de tecnología</RouterLink></li>
                  <li><RouterLink to="/ciberseguridad" class="block px-4 py-2 text-slate-900 hover:text-rose-700 font-medium leading-6">Ciberseguridad & Videovigilancia</RouterLink></li>
                  <li><RouterLink to="/mantenimiento" class="block px-4 py-2 text-slate-900 hover:text-rose-700 font-medium leading-6">Mantenimiento & Servicio</RouterLink></li>
                  <li><RouterLink to="/energia" class="block px-4 py-2 text-slate-900 hover:text-rose-700 font-medium leading-6">Energía & Sistemas de detección de incendios</RouterLink></li>
                  <li><RouterLink to="/logistica" class="block px-4 py-2 text-slate-900 hover:text-rose-700 font-medium leading-6">Logística & transportación empresarial</RouterLink></li>
                </ul>
            </div>
            </nav>
        </div>

        <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
           
            <a href="#contacto" class="inline-flex items-center justify-center px-4 py-0 text-base font-medium leading-6 text-slate-200 whitespace-no-wrap bg-rose-700 border border-transparent rounded-md shadow-sm hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-600">
              Contacto
            </a>
        </div>
    </div>
</section>
</template>

