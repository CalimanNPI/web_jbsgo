<template>
  <!-- Hero Section -->
  <section class="relative px-4 py-24 overflow-hidden md:px-0 md:py-32 bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900">
    <!-- Animated background elements -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-20 left-10 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div class="absolute top-40 right-10 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-20 left-20 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
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
            <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-amber-950/40 border-amber-800/30 backdrop-blur-sm">
              <span class="relative flex w-2 h-2">
                <span class="absolute inline-flex w-full h-full bg-amber-400 rounded-full opacity-75 animate-ping"></span>
                <span class="relative inline-flex w-2 h-2 bg-amber-500 rounded-full"></span>
              </span>
              <span class="text-sm font-medium text-amber-300">Protección y Seguridad</span>
            </div>

            <h1 class="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span class="block">Energía y</span>
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500">
                Sistemas de detección de incendios
              </span>
            </h1>

            <p class="mb-8 text-lg leading-relaxed text-slate-300 max-w-lg mx-auto lg:mx-0">
              Brindar los mejores productos y servicios que protejan vidas,
              bienes inmuebles y medio ambiente, de ahí que todos los días nos
              preocupemos por cubrir las necesidades del cliente y orientarlo
              para que tome las mejores decisiones en temas de seguridad.
            </p>
          </div>
        </div>

        <div class="w-full mt-12 lg:w-1/2 lg:mt-0" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-orange-500/20 rounded-3xl blur-3xl"></div>
            <InlineSvg
              src="/img/svg/ener1.svg"
              class="relative z-10 w-full h-auto drop-shadow-2xl animate-float text-amber-500"
              role="img"
              aria-label="Ilustración de energía y seguridad"
            />
          </div>
        </div> 
      </div>
    </div>

  
  </section>

  <SectionSeparator variant="gradient" theme="amber" spacing="sm" bg="dark" />

  <!-- Features Section -->
  <div class="bg-slate-900">
    <section class="relative px-6 py-24 overflow-hidden md:py-32 md:px-10">
      <!-- Background gradient orbs -->
      <div class="absolute top-0 left-0 w-full h-full opacity-30">
        <div class="absolute top-0 left-0 w-64 h-64 bg-amber-600 rounded-full filter blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-64 h-64 bg-amber-600 rounded-full filter blur-3xl"></div>
      </div>

      <div class="relative z-10 max-w-5xl mx-auto text-center">
        <span class="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-wider text-gray-400 uppercase border rounded-full bg-slate-800/50 border-slate-700">
          No solamente comerciamos con tecnología
        </span>
        
        <h2 class="max-w-3xl mx-auto mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          En cada proyecto 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
            nos involucramos
          </span>
        </h2>
        
        <p class="max-w-2xl mx-auto text-lg leading-relaxed text-gray-400">
          Realizamos una planeación estratégica que incluye planos, memorias de cálculo, 
          literatura, catálogos, manuales y especial capacitación a los operadores de los 
          nuevos sistemas, garantizando la seguridad de los recursos humanos y reduciendo 
          el riesgo de pérdidas económicas y desastres indeseables en las propiedades.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="relative z-10 grid max-w-7xl mx-auto grid-cols-1 gap-8 mt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="group relative p-8 overflow-hidden text-center transition-all duration-500 border rounded-2xl bg-slate-800/40 border-amber-800/30 hover:border-amber-500/50 hover:bg-slate-800/80 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-600/20"
          :data-aos="feature.aos"
          data-aos-duration="600"
        >
          <!-- Hover gradient -->
          <div class="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <!-- Icon container -->
          <div class="relative z-10 flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-all duration-300 border rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 border-amber-800/30 group-hover:scale-110 group-hover:border-amber-500/50 group-hover:shadow-lg group-hover:shadow-amber-600/20">
            <img 
              class="w-10 h-10 transition-transform duration-300 group-hover:scale-110" 
              :src="feature.icon" 
              :alt="feature.title"
              loading="lazy"
            />
          </div>
          
          <h3 class="relative z-10 mb-3 text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
            {{ feature.title }}
          </h3>
          
          <p class="relative z-10 text-sm leading-relaxed text-slate-400">
            {{ feature.description }}
          </p>

          <!-- Decorative corner -->
          <div class="absolute bottom-0 right-0 w-16 h-16 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500 rounded-br-lg"></div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Dispositivos Atmosféricos Section -->
  <section class="relative overflow-hidden bg-slate-900">
    <div class="flex flex-col lg:flex-row">
      <!-- Content Column -->
      <div class="w-full px-6 py-16 lg:w-1/2 lg:px-12 lg:py-24 xl:px-20" data-aos="fade-right" data-aos-duration="800">
        <div class="max-w-xl mx-auto lg:mx-0">
          <!-- Section badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-amber-950/40 border-amber-800/30">
            <span class="relative flex w-2 h-2">
              <span class="absolute inline-flex w-full h-full bg-amber-400 rounded-full opacity-75 animate-ping"></span>
              <span class="relative inline-flex w-2 h-2 bg-amber-500 rounded-full"></span>
            </span>
            <span class="text-sm font-medium text-amber-300">Protección Integral</span>
          </div>

          <h2 class="mb-6 text-4xl font-extrabold text-white sm:text-5xl">
            Dispositivos
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              atmosféricos
            </span>
          </h2>
          
          <p class="mb-8 text-lg leading-relaxed text-slate-300">
            Es de suma importancia realizar periódicamente una revisión a las
            instalaciones eléctricas con el fin de detectar los puntos de riesgo o
            áreas críticas que puedan originar un problema mayor. Para ello
            contamos con personal especializado en diversas áreas que podrán
            visitar el sitio y realizar un estudio de los puntos de riesgo.
          </p>

          <!-- Feature list -->
          <ul class="space-y-4">
            <li v-for="(item, index) in atmosphericFeatures" :key="index" class="flex items-start gap-3">
              <div class="flex-shrink-0 w-6 h-6 mt-1">
                <svg class="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span class="text-slate-300">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Image Column -->
      <div class="relative w-full lg:w-1/2 h-96 lg:h-auto" data-aos="fade-left" data-aos-duration="800">
        <div class="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent lg:bg-gradient-to-r z-10"></div>
        <img
          class="absolute inset-0 object-cover w-full h-full"
          src="/img/energia-1.jfif"
          alt="Dispositivos atmosféricos"
          loading="lazy"
        />
      </div>
    </div>
  </section>

  <!-- UPS y Bancos de Baterías Section -->
  <section class="relative overflow-hidden bg-slate-900">
    <div class="flex flex-col lg:flex-row-reverse">
      <!-- Content Column -->
      <div class="w-full px-6 py-16 lg:w-1/2 lg:px-12 lg:py-24 xl:px-20" data-aos="fade-left" data-aos-duration="800">
        <div class="max-w-xl mx-auto lg:mx-0">
          <!-- Section badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-amber-950/40 border-amber-800/30">
            <span class="relative flex w-2 h-2">
              <span class="absolute inline-flex w-full h-full bg-amber-400 rounded-full opacity-75 animate-ping"></span>
              <span class="relative inline-flex w-2 h-2 bg-amber-500 rounded-full"></span>
            </span>
            <span class="text-sm font-medium text-amber-300">Continuidad del Negocio</span>
          </div>

          <h2 class="mb-6 text-4xl font-extrabold text-white sm:text-5xl">
            UPS y
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              bancos de baterías
            </span>
          </h2>
          
          <p class="mb-8 text-lg leading-relaxed text-slate-300">
            Creemos que los datos y la conectividad son fundamentales para el
            éxito del negocio. Nuestras soluciones de energía aseguran que estén
            disponibles cuando y donde nuestros clientes los necesiten, integrando
            las mejores marcas del mercado.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4 mt-8">
            <div class="text-center">
              <p class="text-2xl font-bold text-amber-500">99.99%</p>
              <p class="text-sm text-slate-400">Disponibilidad</p>
            </div>
            <div class="text-center">
              <p class="text-2xl font-bold text-amber-500">24/7</p>
              <p class="text-sm text-slate-400">Soporte</p>
            </div>
            <div class="text-center">
              <p class="text-2xl font-bold text-amber-500">10+</p>
              <p class="text-sm text-slate-400">Marcas</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Image Column -->
      <div class="relative w-full lg:w-1/2 h-96 lg:h-auto" data-aos="fade-right" data-aos-duration="800">
        <div class="absolute inset-0 bg-gradient-to-l from-slate-900 via-transparent to-transparent lg:bg-gradient-to-l z-10"></div>
        <img
          class="absolute inset-0 object-cover w-full h-full"
          src="/img/energia-2.jfif"
          alt="UPS y bancos de baterías"
          loading="lazy"
        />
      </div>
    </div>
  </section>

  <!-- Sistemas Contra Incendios Section -->
  <section class="relative overflow-hidden bg-slate-900">
    <div class="flex flex-col lg:flex-row">
      <!-- Content Column -->
      <div class="w-full px-6 py-16 lg:w-1/2 lg:px-12 lg:py-24 xl:px-20" data-aos="fade-right" data-aos-duration="800">
        <div class="max-w-xl mx-auto lg:mx-0">
          <!-- Section badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-amber-950/40 border-amber-800/30">
            <span class="relative flex w-2 h-2">
              <span class="absolute inline-flex w-full h-full bg-amber-400 rounded-full opacity-75 animate-ping"></span>
              <span class="relative inline-flex w-2 h-2 bg-amber-500 rounded-full"></span>
            </span>
            <span class="text-sm font-medium text-amber-300">Máxima Seguridad</span>
          </div>

          <h2 class="mb-6 text-4xl font-extrabold text-white sm:text-5xl">
            Sistemas contra
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              incendios
            </span>
          </h2>
          
          <p class="mb-8 text-lg leading-relaxed text-slate-300">
            Impida pérdidas humanas y materiales debido a incendios. Tenga la
            tranquilidad de que en caso de ocurrir un imprevisto, el sistema se
            encargará de alertar al personal adecuado de inmediato. Siempre bajo un
            código de ética, con responsabilidad social y bajo las normas actuales
            establecidas (NOM y NFPA).
          </p>

          <!-- Certifications badges -->
          <div class="flex flex-wrap gap-3 mt-6">
            <span class="px-3 py-1 text-sm font-semibold border rounded-full text-amber-400 border-amber-800/30 bg-amber-950/30">NOM</span>
            <span class="px-3 py-1 text-sm font-semibold border rounded-full text-amber-400 border-amber-800/30 bg-amber-950/30">NFPA</span>
            <span class="px-3 py-1 text-sm font-semibold border rounded-full text-amber-400 border-amber-800/30 bg-amber-950/30">ISO 9001</span>
          </div>
        </div>
      </div>

      <!-- Image Column -->
      <div class="relative w-full lg:w-1/2 h-96 lg:h-auto" data-aos="fade-left" data-aos-duration="800">
        <div class="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent lg:bg-gradient-to-r z-10"></div>
        <img
          class="absolute inset-0 object-cover w-full h-full"
          src="/img/energia-3.jfif"
          alt="Sistemas contra incendios"
          loading="lazy"
        />
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="px-6 py-20 bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 sm:py-28">
    <div class="max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-duration="800">
      <h2 class="mb-6 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
        ¿Listo para proteger tu negocio?
      </h2>
      <p class="max-w-2xl mx-auto mb-10 text-lg text-slate-300">
        Contáctanos hoy mismo para una evaluación gratuita de tus instalaciones y descubre cómo podemos ayudarte a mejorar tu seguridad.
      </p>
      <div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <a 
          href="#contact" 
          class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl hover:from-amber-500 hover:to-orange-500 hover:shadow-xl hover:shadow-amber-600/25 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Solicitar información
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a 
          href="#services" 
          class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-all duration-300 border rounded-xl text-slate-200 border-slate-600 hover:border-amber-500 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Ver todos los servicios
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionSeparator from '../components/SectionSeparator.vue'
import InlineSvg from '../components/InlineSvg.vue'

// Features data
const features = [
  {
    icon: 'https://img.icons8.com/?size=100&id=68375&format=png&color=d97706',
    title: 'Respaldo y protección de energía',
    description: 'Soluciones confiables para garantizar la continuidad y seguridad de sus operaciones frente a interrupciones eléctricas.',
    aos: 'fade-up'
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=116859&format=png&color=d97706',
    title: 'Sistemas detectores de incendios',
    description: 'Respuesta rápida y eficaz ante cualquier indicio de fuego con tecnología de punta y máxima fiabilidad.',
    aos: 'fade-up'
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=ObFMBYwY4LDy&format=png&color=d97706',
    title: 'Sistemas de inspección y rayos X',
    description: 'Máxima seguridad y precisión en la detección de objetos peligrosos o prohibidos.',
    aos: 'fade-up'
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=eaPYgCOAKemJ&format=png&color=d97706',
    title: 'Equipo de seguridad y señalización',
    description: 'Amplia gama de equipos de seguridad y señalización para la protección y bienestar en cualquier entorno.',
    aos: 'fade-up'
  }
]

// Atmospheric features list
const atmosphericFeatures = [
  'Inspección termográfica de instalaciones eléctricas',
  'Medición de resistividad de tierras físicas',
  'Análisis de calidad de energía',
  'Estudio de puntos calientes y áreas críticas',
  'Informe detallado con recomendaciones'
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