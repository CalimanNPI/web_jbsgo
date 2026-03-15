<template>
  <!-- Hero Section -->
  <section class="relative px-4 py-24 overflow-hidden md:px-0 md:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
    <!-- Animated background elements -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div class="absolute top-40 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-20 left-20 w-96 h-96 bg-sky-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
    </div>

    <div class="container relative z-10 max-w-6xl px-8 mx-auto xl:px-5">
      <div class="flex flex-wrap items-center lg:flex-row">
        <div
          class="w-full lg:w-1/2 lg:pr-12"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div class="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
            <!-- Floating badge -->
            <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-blue-950/40 border-blue-800/30 backdrop-blur-sm">
              <span class="relative flex w-2 h-2">
                <span class="absolute inline-flex w-full h-full bg-blue-400 rounded-full opacity-75 animate-ping"></span>
                <span class="relative inline-flex w-2 h-2 bg-blue-500 rounded-full"></span>
              </span>
              <span class="text-sm font-medium text-blue-300">Protección Integral 24/7</span>
            </div>

            <h1 class="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span class="block">Ciberseguridad y</span>
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-sky-500">
                Videovigilancia
              </span>
            </h1>

            <p class="mb-8 text-lg leading-relaxed text-slate-300 max-w-lg mx-auto lg:mx-0">
              Su seguridad y la de los que le rodean es prioridad, pero también
              las pérdidas materiales afectan a su negocio. Protegemos lo que más importa
              con tecnología de vanguardia.
            </p>

            <div class="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a 
                href="#solutions" 
                class="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl hover:from-blue-500 hover:to-cyan-500 hover:shadow-xl hover:shadow-blue-600/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Ver soluciones
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="#contact" 
                class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-all duration-300 border rounded-xl text-slate-200 border-slate-600 hover:border-blue-500 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 backdrop-blur-sm"
              >
                Contactar experto
              </a>
            </div>
          </div>
        </div>

        <div class="w-full mt-12 lg:w-1/2 lg:mt-0" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
            <InlineSvg
              src="/img/svg/security7.svg"
              class="relative z-10 w-full h-auto drop-shadow-2xl animate-float text-blue-500"
              role="img"
              aria-label="Ilustración de ciberseguridad"
            />
          </div>
        </div>
      </div>
    </div>

  </section>

  <SectionSeparator variant="gradient" theme="blue" spacing="sm" />

  <!-- Solutions Section -->
  <section class="px-6 py-24 overflow-hidden bg-gradient-to-b from-slate-50 to-white sm:py-32" id="solutions">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center mb-16 lg:mb-20" data-aos="fade-up">
        <span class="inline-block px-4 py-2 mb-4 text-sm font-bold tracking-wider text-blue-700 uppercase bg-blue-100 rounded-full">
          Soluciones de seguridad
        </span>
        <h2 class="text-4xl font-extrabold text-slate-900 sm:text-5xl lg:text-6xl">
          Evite situaciones de 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-700">
            riesgo
          </span>
        </h2>
        <p class="mt-6 text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
          Le ofrecemos una gama completa de soluciones que atenderán este tipo de incidencias
          con tecnología de nivel internacional.
        </p>
      </div>

      <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <!-- Solutions Grid -->
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div 
            v-for="(solution, index) in solutions" 
            :key="index"
            class="group relative p-6 overflow-hidden transition-all duration-300 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            :data-aos="solution.aos"
            data-aos-duration="600"
          >
            <!-- Hover gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div class="relative z-10">
              <div class="flex items-center justify-center w-14 h-14 mb-4 transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl group-hover:scale-110 group-hover:from-blue-100 group-hover:to-cyan-100">
                <img 
                  class="w-7 h-7 transition-transform duration-300 group-hover:scale-110" 
                  :src="solution.icon" 
                  :alt="solution.title"
                  loading="lazy"
                />
              </div>
              
              <h3 class="mb-2 text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                {{ solution.title }}
              </h3>
              
              <p class="text-sm leading-relaxed text-slate-600">
                {{ solution.description }}
              </p>

              <!-- Decorative dot -->
              <div class="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>

        <!-- Image Column -->
        <div class="relative overflow-hidden rounded-2xl shadow-2xl" data-aos="fade-left" data-aos-duration="800">
          <div class="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent z-10"></div>
          <img
            src="/img/cyber-1.jpg"
            alt="Soluciones de ciberseguridad"
            class="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
            loading="lazy"
          />
          <div class="absolute bottom-0 left-0 z-20 p-6 text-white">
            <p class="text-sm font-semibold text-blue-300">Tecnología de punta</p>
            <p class="text-xl font-bold">Protección 360°</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats/Testimonial Section -->
  <section class="relative w-full h-full py-24 bg-center bg-cover bg-fixed" style="background-image: url('/img/cyber-2.jpg')">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>
    
    <div class="relative z-10 max-w-6xl px-6 mx-auto">
      <div class="max-w-4xl p-8 mx-auto text-center bg-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-700/50 shadow-2xl">
        <!-- Icon -->
        <div class="flex justify-center mb-6">
          <div class="p-3 rounded-full bg-blue-600/20 border border-blue-500/30">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        </div>

        <h3 class="mb-6 text-3xl font-bold text-white lg:text-4xl">
          Alianzas estratégicas con proveedores de nivel internacional
        </h3>
        
        <p class="mb-8 text-lg leading-relaxed text-slate-300">
          Lo que nos permite tener a nuestro equipo de expertos siempre
          capacitados para la instalación, mantenimiento y mejoramiento de los
          sistemas de seguridad, desde la concepción del proyecto hasta la
          materialización del mismo.
        </p>

        <!-- Partners grid -->
        <div class="grid grid-cols-2 gap-4 mt-8 sm:grid-cols-4">
          <div v-for="partner in partners" :key="partner" class="px-4 py-2 text-sm font-semibold text-center text-slate-300 bg-slate-800/50 rounded-lg border border-slate-700/50">
            {{ partner }}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="px-6 py-24 bg-white sm:py-32">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="text-center"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100">
            <span class="text-2xl font-bold text-blue-700">{{ feature.number }}</span>
          </div>
          <h4 class="mb-2 text-xl font-bold text-slate-900">{{ feature.title }}</h4>
          <p class="text-slate-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="px-6 py-20 bg-gradient-to-br from-slate-900 to-blue-950 sm:py-28">
    <div class="max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-duration="800">
      <h2 class="mb-6 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
        ¿Listo para proteger tu negocio?
      </h2>
      <p class="max-w-2xl mx-auto mb-10 text-lg text-slate-300">
        Nuestros expertos en seguridad están listos para ayudarte a diseñar la solución perfecta para tus necesidades.
      </p>
      <div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <a 
          href="#contact" 
          class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl hover:from-blue-500 hover:to-cyan-500 hover:shadow-xl hover:shadow-blue-600/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Solicitar asesoría
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a 
          href="#services" 
          class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-all duration-300 border rounded-xl text-slate-200 border-slate-600 hover:border-blue-500 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Ver casos de éxito
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionSeparator from '../components/SectionSeparator.vue'
import InlineSvg from '../components/InlineSvg.vue'

// Solutions data
const solutions = [
  {
    icon: 'https://img.icons8.com/?size=100&id=RV7kciJyN5um&format=png&color=3b82f6',
    title: 'Video IP',
    description: 'Disuaden a quienes planean cometer un ilícito y mantienen el registro visual completo de su establecimiento.',
    aos: 'fade-up'
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=HjXBjmnMTiff&format=png&color=3b82f6',
    title: 'Alarmas',
    description: 'Reducen el tiempo de reacción para afrontar el problema y proteger lo que más importa.',
    aos: 'fade-up',
    delay: '100'
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=rkgw4utqWMlm&format=png&color=3b82f6',
    title: 'Bolardos',
    description: 'Con una oportuna intervención se pueden reducir considerablemente las pérdidas materiales.',
    aos: 'fade-up',
    delay: '150'
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=XYORK4D2dnzX&format=png&color=3b82f6',
    title: 'Videovigilancia móvil',
    description: 'Sistemas ADAS de alta tecnología para mejorar la seguridad vial de conductores, pasajeros y peatones.',
    aos: 'fade-up',
    delay: '200'
  }
]

// Partners data
const partners = [
  'Hikvision', 'Dahua', 'Axis', 'Bosch',
  'Honeywell', 'Panasonic', 'Samsung', 'Avigilon'
]

// Features data
const features = [
  {
    number: '01',
    title: 'Diagnóstico Profesional',
    description: 'Evaluación completa de vulnerabilidades y necesidades específicas de su negocio.'
  },
  {
    number: '02',
    title: 'Instalación Especializada',
    description: 'Equipo certificado para garantizar el correcto funcionamiento de todos los sistemas.'
  },
  {
    number: '03',
    title: 'Soporte Continuo',
    description: 'Mantenimiento preventivo y correctivo para asegurar la máxima disponibilidad.'
  }
]
</script>

<style scoped>
@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Optimización para background fixed en móviles */
@media (max-width: 768px) {
  .bg-fixed {
    background-attachment: scroll;
  }
}
</style>