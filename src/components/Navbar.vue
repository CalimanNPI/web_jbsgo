<template>
    <nav class="relative z-20 top-0 start-0 w-full border-b bg-slate-900 border-slate-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <!--<img src="#" class="h-8" alt="Logo" />-->
                <span class="self-center text-2xl font-extrabold whitespace-nowrap text-rose-700">JBS GO</span>
            </RouterLink>
            <button data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200  " aria-controls="mega-menu-full" aria-expanded="false">
                <span class="sr-only">Menú</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div id="mega-menu-full" class=" justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
                <ul class="flex flex-col items-center p-4 md:p-0 mt-4 border rounded-lg bg-slate-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
                    <li>
                        <RouterLink to="/" class="block py-2 px-3 text-slate-200 rounded hover:bg-white md:hover:bg-transparent md:hover:text-rose-700 md:p-0 " aria-current="page"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(190, 18, 60, 1);"><path d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"></path></svg></RouterLink>
                    </li>
                    <li>
                        <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class="flex items-center justify-between w-full py-2 px-3 text-slate-200 rounded md:w-auto hover:bg-rose-700 md:hover:bg-transparent md:border-0 md:hover:text-rose-600 md:p-0 ">
                          Servicios <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/> </svg>
                        </button>
                    </li>
                    <li>
                        <a href="#contacto" class="flex items-center max-[470px]:justify-center gap-2 border-2 border-rose-700 py-2.5 pr-5 pl-7 rounded-full text-base font-semibold text-rose-700 bg-slate-50 shadow-transparent shadow-sm transition-all duration-500 hover:shadow-slate-50 hover:bg-rose-700 hover:text-slate-50">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
        <div id="mega-menu-full-dropdown" class="absolute top-20 mt-1 border-rose-400 shadow-sm hidden bg-slate-50 md:bg-white border-y ">
            <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-slate-900 sm:grid-cols-2 md:px-6">
              <ul>
                <li >
                  <RouterLink to="/ciberseguridad" data-collapse-toggle="mega-menu-full-dropdown" class="block p-3 rounded-lg hover:bg-slate-100">
                    <div class="font-semibold">Ciberseguridad & Videovigilancia</div>
                    <span class="text-sm text-slate-700">Connect with third-party tools that you're already using.</span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/licenciamiento" data-collapse-toggle="mega-menu-full-dropdown" class="block p-3 rounded-lg hover:bg-slate-100">
                    <div class="font-semibold">Licenciamiento & Mayorista de tecnología</div>
                    <span class="text-sm text-slate-700">Connect with third-party tools that you're already using.</span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/mantenimiento" data-collapse-toggle="mega-menu-full-dropdown" class="block p-3 rounded-lg hover:bg-slate-100">
                    <div class="font-semibold">Mantenimiento & Servicio</div>
                    <span class="text-sm text-slate-700">Connect with third-party tools that you're already using.</span>
                  </RouterLink>
                </li>
            </ul>
            <ul>
              <li>
                <RouterLink to="/energia" data-collapse-toggle="mega-menu-full-dropdown" class="block p-3 rounded-lg hover:bg-slate-100">
                  <div class="font-semibold">Energía & Sistemas de detección de incendios</div>
                  <span class="text-sm text-slate-700">Connect with third-party tools that you're already using.</span>
                </RouterLink>
              </li>
            </ul>
            <ul>
              <li>
                <RouterLink to="/logistica" data-collapse-toggle="mega-menu-full-dropdown" class="block p-3 rounded-lg hover:bg-slate-100">
                  <div class="font-semibold">Logística & transportación empresarial</div>
                  <span class="text-sm text-slate-700">Connect with third-party tools that you're already using.</span>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
    </nav>
</template>