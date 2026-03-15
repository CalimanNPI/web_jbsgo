<template>
  <!-- CTA Section -->
  <div class="relative  overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950 py-24 px-6 text-center">
    <div class="max-w-3xl mx-auto">
      <span class="inline-block text-rose-500 font-bold tracking-widest uppercase text-sm mb-4">¿Listo para comenzar?</span>
      <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
        Usamos la tecnología<br /><span class="text-rose-500">a su favor</span>
      </h2>
      <p class="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
        Seleccionar el sistema adecuado para su negocio implica comprender sus necesidades ahora y en el futuro.
      </p>
      <a
        href="#contact"
        class="inline-flex items-center gap-2 px-8 py-4 bg-rose-700 hover:bg-rose-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-rose-900/30"
      >
        Contáctenos
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>

  <footer class="bg-slate-950 border-t border-slate-800">
    <div class="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

        <!-- Brand column -->
        <div>
          <a href="/" class="inline-flex items-center mb-4">
            <span class="text-2xl font-extrabold text-white">JBS <span class="text-rose-600">GO</span><span class="text-rose-500">.</span></span>
          </a>
          <p class="text-slate-400 text-sm leading-relaxed">
            El puente entre la tecnología y los negocios. Soluciones tecnológicas integrales para empresas que quieren crecer.
          </p>
        </div>

        <!-- Services column -->
        <div>
          <h3 class="font-bold text-white mb-5 text-sm uppercase tracking-widest">Servicios</h3>
          <ul class="space-y-3">
            <li>
              <RouterLink to="/licenciamiento" class="text-slate-400 text-sm hover:text-rose-500 transition-colors flex items-center gap-2">
                <svg class="w-3 h-3 text-rose-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                </svg>
                Licenciamiento & Mayorista
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/ciberseguridad" class="text-slate-400 text-sm hover:text-rose-500 transition-colors flex items-center gap-2">
                <svg class="w-3 h-3 text-rose-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                </svg>
                Ciberseguridad & Videovigilancia
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/mantenimiento" class="text-slate-400 text-sm hover:text-rose-500 transition-colors flex items-center gap-2">
                <svg class="w-3 h-3 text-rose-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                </svg>
                Mantenimiento & Servicio
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/energia" class="text-slate-400 text-sm hover:text-rose-500 transition-colors flex items-center gap-2">
                <svg class="w-3 h-3 text-rose-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                </svg>
                Energía & Detección de Incendios
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/logistica" class="text-slate-400 text-sm hover:text-rose-500 transition-colors flex items-center gap-2">
                <svg class="w-3 h-3 text-rose-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                </svg>
                Logística & Transportación
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact column -->
        <div>
          <h3 class="font-bold text-white mb-5 text-sm uppercase tracking-widest">Contacto</h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span class="text-slate-400 text-sm">Ecatepec de Morelos,<br/>Estado de México</span>
            </li>
            <li class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-rose-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span class="text-slate-400 text-sm">+52 (56) 2437 40450</span>
            </li>
            <li class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <div>
                <p class="text-slate-400 text-sm">contacto@jbsgo.com.mx</p>
                <p class="text-slate-400 text-sm">ventas@jbsgo.com.mx</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-slate-800 gap-4">
        <p class="text-slate-500 text-sm">©2024 JBS GO. Todos los derechos reservados.</p>
        <ul class="flex items-center gap-8">
          <li><a href="#" class="text-slate-500 text-sm hover:text-rose-500 transition-colors">Términos</a></li>
          <li><a href="#" class="text-slate-500 text-sm hover:text-rose-500 transition-colors">Privacidad</a></li>
          <li><a href="#" class="text-slate-500 text-sm hover:text-rose-500 transition-colors">Cookies</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>
