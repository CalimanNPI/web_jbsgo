<template>
  <!-- Hero Section -->
  <section
    class="relative px-4 py-24 overflow-hidden md:px-0 md:py-32 bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900"
  >
    <!-- Animated background elements -->
    <div class="absolute inset-0 opacity-20">
      <div
        class="absolute top-20 left-10 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
      ></div>
      <div
        class="absolute top-40 right-10 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute bottom-20 left-20 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"
      ></div>
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
            <div
              class="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-amber-950/40 border-amber-800/30 backdrop-blur-sm"
            >
              <span class="relative flex w-2 h-2">
                <span
                  class="absolute inline-flex w-full h-full bg-amber-400 rounded-full opacity-75 animate-ping"
                ></span>
                <span
                  class="relative inline-flex w-2 h-2 bg-amber-500 rounded-full"
                ></span>
              </span>
              <span class="text-sm font-medium text-amber-300"
                >Ingeniería Certificada</span
              >
            </div>

            <h1
              class="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              <span class="block">Mantenimiento y</span>
              <span
                class="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500"
              >
                Servicio
              </span>
            </h1>

            <p
              class="mb-8 text-lg leading-relaxed text-slate-300 max-w-lg mx-auto lg:mx-0"
            >
              Nuestro compromiso es servir y ofrecer soluciones en conjunto con
              nuestros clientes, garantizando la continuidad operativa de sus
              equipos.
            </p>

            <div
              class="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a
                href="#services"
                class="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl hover:from-amber-500 hover:to-orange-500 hover:shadow-xl hover:shadow-amber-600/25 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Ver servicios
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-all duration-300 border rounded-xl text-slate-200 border-slate-600 hover:border-amber-500 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900 backdrop-blur-sm"
              >
                Solicitar mantenimiento
              </a>
            </div>
          </div>
        </div>

        <div
          class="w-full mt-12 lg:w-1/2 lg:mt-0"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <div class="relative">
            <div
              class="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-orange-500/20 rounded-3xl blur-3xl"
            ></div>
            <InlineSvg
              src="/img/svg/man7.svg"
              class="relative z-10 w-full h-auto drop-shadow-2xl animate-float text-amber-500"
              role="img"
              aria-label="Ilustración de mantenimiento"
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
      <div class="absolute inset-0 opacity-20">
        <div
          class="absolute top-0 left-0 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-0 right-0 w-96 h-96 bg-orange-600 rounded-full filter blur-3xl animate-pulse animation-delay-2000"
        ></div>
      </div>

      <div class="relative z-10 max-w-5xl mx-auto text-center">
        <span
          class="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-wider text-gray-400 uppercase border rounded-full bg-slate-800/50 border-slate-700"
        >
          No solamente comerciamos con tecnología
        </span>

        <h2
          class="max-w-3xl mx-auto mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
        >
          Como integrador de servicios ofrecemos
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500"
          >
            continuidad operativa
          </span>
        </h2>

        <p class="max-w-2xl mx-auto mb-4 text-lg leading-relaxed text-gray-400">
          Continuidad para garantizar el buen funcionamiento de los equipos
          adquiridos y/o ya instalados previamente por nuestros clientes,
          poniendo a disposición personal de ingeniería calificada y
          certificada.
        </p>

        <p class="max-w-2xl mx-auto text-lg leading-relaxed text-gray-400">
          Gracias a ello se forma un puente de confianza y comunicación que
          favorece desarrollar proyectos.
        </p>
      </div>

      <!-- Services Grid -->
      <div
        class="relative z-10 grid max-w-7xl mx-auto grid-cols-1 gap-8 mt-20 sm:grid-cols-2 lg:grid-cols-4"
      >
        <div
          v-for="(service, index) in maintenanceServices"
          :key="index"
          class="group relative p-6 overflow-hidden text-center transition-all duration-500 border rounded-2xl bg-slate-800/40 border-amber-800/30 hover:border-amber-500/50 hover:bg-slate-800/80 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-600/20"
          :data-aos="service.aos"
          data-aos-duration="600"
          :data-aos-delay="service.delay"
        >
          <!-- Hover gradient -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>

          <!-- Icon container -->
          <div
            class="relative z-10 flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-all duration-300 border rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 border-amber-800/30 group-hover:scale-110 group-hover:border-amber-500/50 group-hover:shadow-lg group-hover:shadow-amber-600/20"
          >
            <img
              class="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
              :src="service.icon"
              :alt="service.title"
              loading="lazy"
            />
          </div>

          <h3
            class="relative z-10 mb-3 text-base font-bold text-white group-hover:text-amber-400 transition-colors"
          >
            {{ service.title }}
          </h3>

          <p class="relative z-10 text-sm leading-relaxed text-slate-400">
            {{ service.description }}
          </p>

          <!-- Decorative corner -->
          <div
            class="absolute bottom-0 right-0 w-16 h-16 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          >
            <div
              class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500 rounded-br-lg"
            ></div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Specialized Services Sections -->
  <div class="bg-slate-900">
    <!-- CCTV Repair Section -->
    <div class="relative overflow-hidden">
      <div class="flex flex-col lg:flex-row">
        <!-- Image Column (Right on desktop) -->
        <div
          class="relative w-full lg:w-1/2 h-96 lg:h-auto order-1 lg:order-2"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <div
            class="absolute inset-0 bg-gradient-to-l from-slate-900 via-transparent to-transparent z-10"
          ></div>
          <img
            class="absolute inset-0 object-cover w-full h-full"
            src="/img/mante-3.jfif"
            alt="Reparación de CCTV"
            loading="lazy"
          />
        </div>

        <!-- Content Column (Left on desktop) -->
        <div
          class="w-full px-6 py-16 lg:w-1/2 lg:px-12 lg:py-24 xl:px-20 order-2 lg:order-1"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div class="max-w-xl mx-auto lg:mx-0">
            <!-- Section badge -->
            <div
              class="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-amber-950/40 border-amber-800/30"
            >
              <span class="relative flex w-2 h-2">
                <span
                  class="absolute inline-flex w-full h-full bg-amber-400 rounded-full opacity-75 animate-ping"
                ></span>
                <span
                  class="relative inline-flex w-2 h-2 bg-amber-500 rounded-full"
                ></span>
              </span>
              <span class="text-sm font-medium text-amber-300"
                >Reparación Especializada</span
              >
            </div>

            <h2 class="mb-6 text-3xl font-extrabold text-white sm:text-4xl">
              Reparación de
              <span
                class="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500"
              >
                CCTV a Nivel componente
              </span>
            </h2>

            <p class="mb-6 text-lg leading-relaxed text-slate-300">
              JBS GO pone a servicio de todos sus clientes reparaciones de CCTV
              a nivel componente de diversas marcas tales como: Hanwha,
              Hikvision, Bosch, etc. Ofreciendo personal calificado y
              refacciones originales.
            </p>

            <!-- Brand chips -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="brand in cctvBrands"
                :key="brand"
                class="px-3 py-1 text-sm border rounded-full text-amber-300 border-amber-800/30 bg-amber-950/30"
              >
                {{ brand }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Air Conditioning Section -->
    <div class="relative overflow-hidden">
      <div class="flex flex-col lg:flex-row">
        <!-- Image Column (Left on desktop) -->
        <div
          class="relative w-full lg:w-1/2 h-96 lg:h-auto"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent z-10"
          ></div>
          <img
            class="absolute inset-0 object-cover w-full h-full"
            src="/img/mante-1.jfif"
            alt="Mantenimiento de Aires Acondicionados"
            loading="lazy"
          />
        </div>

        <!-- Content Column (Right on desktop) -->
        <div
          class="w-full px-6 py-16 lg:w-1/2 lg:px-12 lg:py-24 xl:px-20"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <div class="max-w-xl mx-auto lg:mx-0">
            <!-- Section badge -->
            <div
              class="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-amber-950/40 border-amber-800/30"
            >
              <span class="relative flex w-2 h-2">
                <span
                  class="absolute inline-flex w-full h-full bg-amber-400 rounded-full opacity-75 animate-ping"
                ></span>
                <span
                  class="relative inline-flex w-2 h-2 bg-amber-500 rounded-full"
                ></span>
              </span>
              <span class="text-sm font-medium text-amber-300"
                >Climatización</span
              >
            </div>

            <h2 class="mb-6 text-3xl font-extrabold text-white sm:text-4xl">
              Mantenimiento
              <span
                class="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500"
              >
                Aires Acondicionados
              </span>
            </h2>

            <p class="mb-6 text-lg leading-relaxed text-slate-300">
              Contamos con ingeniería certificada en diversos ramos de la
              industria, ofreciendo servicios de ingeniería, mantenimiento e
              instalación. Gracias a nuestra asociación en Master Channel
              tenemos presencia en las ciudades más importantes del país.
            </p>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4 mt-8">
              <div class="text-center">
                <p class="text-2xl font-bold text-amber-500">24/7</p>
                <p class="text-xs text-slate-400">Servicio</p>
              </div>
              <div class="text-center">
                <p class="text-2xl font-bold text-amber-500">15+</p>
                <p class="text-xs text-slate-400">Ciudades</p>
              </div>
              <div class="text-center">
                <p class="text-2xl font-bold text-amber-500">100%</p>
                <p class="text-xs text-slate-400">Certificados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fire Systems Section -->
    <div class="relative overflow-hidden">
      <div class="flex flex-col lg:flex-row">
        <!-- Image Column (Right on desktop) -->
        <div
          class="relative w-full lg:w-1/2 h-96 lg:h-auto order-1 lg:order-2"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <div
            class="absolute inset-0 bg-gradient-to-l from-slate-900 via-transparent to-transparent z-10"
          ></div>
          <img
            class="absolute inset-0 object-cover w-full h-full"
            src="/img/mante-2.jfif"
            alt="Sistemas contra incendios"
            loading="lazy"
          />
        </div>

        <!-- Content Column (Left on desktop) -->
        <div
          class="w-full px-6 py-16 lg:w-1/2 lg:px-12 lg:py-24 xl:px-20 order-2 lg:order-1"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div class="max-w-xl mx-auto lg:mx-0">
            <!-- Section badge -->
            <div
              class="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-amber-950/40 border-amber-800/30"
            >
              <span class="relative flex w-2 h-2">
                <span
                  class="absolute inline-flex w-full h-full bg-amber-400 rounded-full opacity-75 animate-ping"
                ></span>
                <span
                  class="relative inline-flex w-2 h-2 bg-amber-500 rounded-full"
                ></span>
              </span>
              <span class="text-sm font-medium text-amber-300"
                >Protección contra incendios</span
              >
            </div>

            <h2 class="mb-6 text-3xl font-extrabold text-white sm:text-4xl">
              <span
                class="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500"
              >
                Mantenimiento
              </span>
              sistemas contra incendios y recarga de extintores
            </h2>

            <p class="mb-6 text-lg leading-relaxed text-slate-300">
              Contar con la confianza de que un sistema de seguridad sea útil
              cuando menos se le espere es de vital importancia para la
              protección de nuestros clientes.
            </p>

            <!-- Features list -->
            <ul class="space-y-3">
              <li
                v-for="(item, index) in fireSafetyFeatures"
                :key="index"
                class="flex items-start gap-3"
              >
                <svg
                  class="w-5 h-5 mt-1 text-amber-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span class="text-slate-300">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Testimonial/Trust Section -->
  <div
    class="relative w-full h-full py-24 bg-center bg-cover bg-fixed"
    style="background-image: url(&quot;/img/mante-4.jfif&quot;)"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>

    <div class="relative z-10 max-w-4xl px-6 mx-auto">
      <div
        class="p-8 text-center bg-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-700/50 shadow-2xl"
      >
        <!-- Icon -->
        <div class="flex justify-center mb-6">
          <div
            class="p-3 rounded-full bg-amber-600/20 border border-amber-500/30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 h-10 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
        </div>

        <h3 class="mb-6 text-2xl font-bold text-white lg:text-3xl">
          El contar con Ingeniería certificada, personal honesto y experto en el
          tema, garantiza nuestra labor y la recurrencia de quien nos contrata.
        </h3>

        <div class="flex justify-center">
          <div
            class="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
          ></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CTA Section -->
  <section
    class="px-6 py-20 bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 sm:py-28"
  >
    <div
      class="max-w-4xl mx-auto text-center"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <h2
        class="mb-6 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
      >
        ¿Necesitas mantenimiento especializado?
      </h2>
      <p class="max-w-2xl mx-auto mb-10 text-lg text-slate-300">
        Nuestro equipo de ingenieros certificados está listo para atender tus
        necesidades y garantizar el óptimo funcionamiento de tus equipos.
      </p>
      <div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <a
          href="#contact"
          class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl hover:from-amber-500 hover:to-orange-500 hover:shadow-xl hover:shadow-amber-600/25 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Solicitar servicio
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
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
import SectionSeparator from "../components/SectionSeparator.vue";
import InlineSvg from "../components/InlineSvg.vue";

// Maintenance services data
const maintenanceServices = [
  {
    icon: "https://img.icons8.com/?size=100&id=h2vavgy2Hqlj&format=png&color=d97706",
    title: "Recarga y Mantenimiento de extintores",
    description:
      "Especializados en la recarga y mantenimiento de extintores para garantizar su óptimo funcionamiento.",
    aos: "fade-up",
    delay: "0",
  },
  {
    icon: "https://img.icons8.com/?size=100&id=68395&format=png&color=d97706",
    title: "Reparación y mantenimiento de CCTV",
    description:
      "Reparación especializada de sistemas CCTV y equipos de cómputo con funcionamiento óptimo y confiable.",
    aos: "fade-up",
    delay: "50",
  },
  {
    icon: "https://img.icons8.com/?size=100&id=tgujUswVMjpv&format=png&color=d97706",
    title: "Reemplazo de acumuladores y UPS",
    description:
      "Reemplazo de acumuladores y mantenimiento UPS para una alimentación ininterrumpida de equipos críticos.",
    aos: "fade-up",
    delay: "100",
  },
  {
    icon: "https://img.icons8.com/?size=100&id=103122&format=png&color=d97706",
    title: "Mantenimiento e inspección de A/A",
    description:
      "Servicios profesionales de mantenimiento e inspección de climatización con rendimiento óptimo y eficiencia energética.",
    aos: "fade-up",
    delay: "150",
  },
];

// CCTV brands
const cctvBrands = ["Hanwha", "Hikvision", "Bosch", "Dahua", "Axis"];

// Fire safety features
const fireSafetyFeatures = [
  "Inspección y certificación de sistemas contra incendios",
  "Recarga de extintores con agentes certificados",
  "Pruebas hidrostáticas",
  "Señalización y rutas de evacuación",
  "Capacitación al personal",
];
</script>

<style scoped>
@keyframes blob {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
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
