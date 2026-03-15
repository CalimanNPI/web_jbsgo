<template>
  <!-- Hero Section -->
  <section class="relative px-4 py-24 overflow-hidden md:px-0 md:py-36" style="background: linear-gradient(135deg, #0f172a 0%, #2d0a18 50%, #4c0519 100%)">
    <!-- Animated background elements -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-20 left-10 w-72 h-72 bg-rose-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-20 left-20 w-72 h-72 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
    </div>
    
    <div class="container relative z-10 max-w-6xl px-8 mx-auto xl:px-5">
      <div class="flex flex-wrap items-center lg:flex-row">
        <div
          class="w-full lg:w-1/2 lg:pr-12"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div class="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
            <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-rose-950/40 border-rose-800/30 backdrop-blur-sm">
              <span class="relative flex w-2 h-2">
                <span class="absolute inline-flex w-full h-full bg-rose-400 rounded-full opacity-75 animate-ping"></span>
                <span class="relative inline-flex w-2 h-2 bg-rose-500 rounded-full"></span>
              </span>
              <span class="text-sm font-medium text-rose-300">Soluciones Tecnológicas Empresariales</span>
            </div>
            
            <h1 class="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span class="block">Somos el puente entre la</span>
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600">
                tecnología y los negocios
              </span>
            </h1>
            
            <p class="mb-8 text-lg leading-relaxed text-slate-300 max-w-lg mx-auto lg:mx-0">
              Nuestros sistemas cuentan con tecnología avanzada que le permite
              tener mayor control sobre su negocio, maximizando el crecimiento y
              los resultados fijados para acelerar los negocios de sus socios.
            </p>
            
            <div class="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a 
                href="#services" 
                class="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-gradient-to-r from-rose-700 to-rose-600 rounded-xl hover:from-rose-600 hover:to-rose-500 hover:shadow-xl hover:shadow-rose-600/25 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Ver Servicios
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="#about" 
                class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-all duration-300 border rounded-xl text-slate-200 border-slate-600 hover:border-rose-500 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-slate-900 backdrop-blur-sm"
              >
                Conocer más
              </a>
            </div>
          </div>
        </div>
        
        <div class="w-full mt-12 lg:w-1/2 lg:mt-0" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-tr from-rose-600/20 to-transparent rounded-3xl blur-3xl"></div>
            <InlineSvg
              src="/img/svg/home5.svg"
              class="relative z-10 w-full h-auto drop-shadow-2xl animate-float text-rose-600"
              role="img"
              aria-label="Ilustración de tecnología empresarial"
            />
          </div>
        </div>
      </div>
    </div>
    

  </section>

  <SectionSeparator variant="gradient" theme="rose" spacing="sm" />

  <!-- Services Section -->
  <section class="px-6 py-24 bg-white md:px-8 lg:py-32" id="services">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center mb-16 lg:mb-20" data-aos="fade-up">
        <span class="inline-block px-4 py-2 text-sm font-bold tracking-wider text-rose-700 uppercase bg-rose-100 rounded-full">
          Nuestros Servicios
        </span>
        <h2 class="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl lg:text-6xl">
          <span class="text-rose-700">JBS Go</span>, su aliado estratégico
        </h2>
        <p class="mt-6 text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
          Gracias a la iniciativa, confianza y profesionalismo de cada uno de los miembros,
          <span class="font-semibold text-rose-700">JBS Go</span> ofrece múltiples soluciones en diversos sectores del mercado.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <RouterLink
          v-for="service in services"
          :key="service.id"
          :to="service.path"
          class="group relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-rose-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-600/10 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
          :data-aos="service.aos"
          data-aos-duration="600"
        >
          <!-- Hover gradient effect -->
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div class="relative z-10">
            <div class="flex items-center justify-center w-16 h-16 mb-6 transition-all duration-300 bg-gradient-to-br from-rose-100 to-rose-50 rounded-xl group-hover:scale-110 group-hover:from-rose-200 group-hover:to-rose-100">
              <img 
                class="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
                :src="service.icon" 
                :alt="service.title"
                loading="lazy"
              />
            </div>
            
            <h3 class="mb-3 text-xl font-bold text-slate-900 group-hover:text-rose-700 transition-colors">
              {{ service.title }}
            </h3>
            
            <p class="mb-4 text-slate-600 leading-relaxed">
              {{ service.description }}
            </p>
            
            <div class="flex items-center font-semibold text-rose-600">
              <span>Saber más</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- About / Projects Section -->
  <section class="py-24 bg-slate-900 lg:py-32" id="about">
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center mb-16 lg:mb-20" data-aos="fade-up">
        <span class="inline-block px-4 py-2 text-sm font-bold tracking-wider text-rose-400 uppercase bg-rose-950/50 rounded-full border border-rose-800/30">
          Trayectoria
        </span>
        <h2 class="mt-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
          Proyectos que nos <span class="text-rose-500">respaldan</span>
        </h2>
        <p class="mt-6 text-lg leading-relaxed text-slate-400">
          El compromiso con México y toda aquella empresa o persona que requiera soluciones tecnológicas
          para esta Revolución Tecnológica que ya no es una opción.
        </p>
      </div>

      <div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <!-- Projects Column -->
        <div class="space-y-6">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="group relative p-6 overflow-hidden transition-all duration-300 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-rose-700/30 hover:bg-slate-800 hover:shadow-2xl hover:shadow-rose-900/20"
            :data-aos="project.aos"
            data-aos-duration="600"
          >
            <!-- Category badge -->
            <div class="inline-flex items-center gap-2 mb-4">
              <span :class="[
                'px-3 py-1 text-xs font-bold uppercase rounded-full border',
                project.categoryClass
              ]">
                {{ project.category }}
              </span>
            </div>
            
            <h4 class="mb-2 text-xl font-bold text-white group-hover:text-rose-400 transition-colors">
              {{ project.title }}
            </h4>
            
            <p class="mb-4 text-sm text-slate-400 leading-relaxed">
              {{ project.description }}
            </p>
            
            <div class="flex items-center gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-rose-500 flex-shrink-0">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
              </svg>
              <span class="text-slate-300">{{ project.serviceType }}</span>
            </div>
          </div>
        </div>

        <!-- Stats Column -->
        <div class="lg:sticky lg:top-32 h-fit" data-aos="fade-left" data-aos-duration="800">
          <div class="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700/50 lg:p-10">
            <h3 class="mb-4 text-4xl font-extrabold text-white lg:text-5xl">
              Nuestra máxima<br />
              <span class="text-rose-500">empresarial</span>
            </h3>
            
            <p class="mb-8 text-lg leading-relaxed text-slate-400">
              El compromiso con México y toda aquella empresa o persona que requiera del uso de
              recursos y soluciones tecnológicas para re-incorporarse a la economía en esta
              nueva normalidad.
            </p>
            
            <div class="grid grid-cols-2 gap-6 pt-8 border-t border-slate-700/60">
              <div v-for="stat in stats" :key="stat.label" class="text-center lg:text-left">
                <p class="text-3xl font-extrabold text-rose-500 lg:text-4xl">{{ stat.value }}</p>
                <p class="mt-1 text-sm text-slate-400">{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import SectionSeparator from '../components/SectionSeparator.vue'
import InlineSvg from '../components/InlineSvg.vue'

// Services data
const services = [
  {
    id: 1,
    path: '/licenciamiento',
    icon: 'https://img.icons8.com/?size=100&id=67464&format=png&color=be123c',
    title: 'Licenciamiento & Mayorista de tecnología',
    description: 'Partner registrado de diversas marcas para ofrecer un amplio abanico de soluciones a nuestros clientes.',
    aos: 'fade-up'
  },
  {
    id: 2,
    path: '/ciberseguridad',
    icon: 'https://img.icons8.com/?size=100&id=RV7kciJyN5um&format=png&color=be123c',
    title: 'Ciberseguridad & Videovigilancia',
    description: 'Su seguridad y la de los que le rodean es prioridad, pero también las pérdidas materiales afectan a su negocio.',
    aos: 'fade-up'
  },
  {
    id: 3,
    path: '/mantenimiento',
    icon: 'https://img.icons8.com/?size=100&id=103122&format=png&color=be123c',
    title: 'Mantenimiento & Servicio',
    description: 'Nuestro compromiso es servir y ofrecer soluciones en conjunto con nuestros clientes.',
    aos: 'fade-up'
  },
  {
    id: 4,
    path: '/energia',
    icon: 'https://img.icons8.com/?size=100&id=h2vavgy2Hqlj&format=png&color=be123c',
    title: 'Energía & Detección de Incendios',
    description: 'Brindar los mejores productos y servicios que protejan vidas, bienes inmuebles y medio ambiente.',
    aos: 'fade-up'
  },
  {
    id: 5,
    path: '/logistica',
    icon: 'https://img.icons8.com/?size=100&id=ampvNvsTTwqT&format=png&color=be123c',
    title: 'Logística & Transportación Empresarial',
    description: 'Nos dedicamos a transportar con seguridad y puntualidad, optimizando rutas para maximizar la eficiencia y reducir costos.',
    aos: 'fade-up'
  }
]

// Projects data
const projects = [
  {
    category: 'Ciberseguridad',
    categoryClass: 'bg-rose-950/30 text-rose-400 border-rose-800/30',
    title: 'Centro Universitario Cuautitlán Izcalli',
    description: 'Instalación de cableado estructurado en salones para clases híbridas, preparación de gabinete para centro de datos.',
    serviceType: 'Ciberseguridad y Videovigilancia',
    aos: 'fade-up'
  },
  {
    category: 'Ciberseguridad',
    categoryClass: 'bg-rose-950/30 text-rose-400 border-rose-800/30',
    title: 'Universidad de Cuautitlán Izcalli — Balcones del Valle',
    description: 'Instalación de cableado estructurado en salones para clases híbridas.',
    serviceType: 'Ciberseguridad y Videovigilancia',
    aos: 'fade-up'
  },
  {
    category: 'Energía',
    categoryClass: 'bg-amber-950/30 text-amber-400 border-amber-800/30',
    title: 'Centro Deportivo Coyoacan A.C.',
    description: 'Inspección de tierras físicas de instalaciones.',
    serviceType: 'Energía y Sistemas de detección de incendios',
    aos: 'fade-up'
  },
  {
    category: 'Energía',
    categoryClass: 'bg-amber-950/30 text-amber-400 border-amber-800/30',
    title: 'Centro de monitoreo C5 Pachuca',
    description: 'Inspección de plantas de suministro de energía de respaldo y pararrayos.',
    serviceType: 'Energía y Sistemas de detección de incendios',
    aos: 'fade-up'
  }
]

// Stats data
const stats = [
  { value: '5+', label: 'Años de experiencia' },
  { value: '50+', label: 'Proyectos completados' },
  { value: '5', label: 'Áreas de servicio' },
  { value: '100%', label: 'Compromiso' }
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
</style>