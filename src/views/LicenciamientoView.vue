<template>
  <!-- Hero Section -->
  <section
    class="relative px-4 py-24 overflow-hidden md:px-0 md:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"
  >
    <!-- Animated background elements -->
    <div class="absolute inset-0 opacity-20">
      <div
        class="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
      ></div>
      <div
        class="absolute top-40 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute bottom-20 left-20 w-96 h-96 bg-sky-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"
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
              class="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-blue-950/40 border-blue-800/30 backdrop-blur-sm"
            >
              <span class="relative flex w-2 h-2">
                <span
                  class="absolute inline-flex w-full h-full bg-blue-400 rounded-full opacity-75 animate-ping"
                ></span>
                <span
                  class="relative inline-flex w-2 h-2 bg-blue-500 rounded-full"
                ></span>
              </span>
              <span class="text-sm font-medium text-blue-300"
                >Partner Oficial · GCN Group</span
              >
            </div>

            <h1
              class="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              <span class="block">Licenciamiento y</span>
              <span
                class="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-sky-500"
              >
                mayorista de Tecnología
              </span>
            </h1>

            <p
              class="mb-8 text-lg leading-relaxed text-slate-300 max-w-lg mx-auto lg:mx-0"
            >
              <span class="font-semibold text-cyan-300">JBS Go</span>
              actualmente es Partner registrado de diversas marcas para ofrecer
              un amplio abanico de soluciones a nuestros clientes.
            </p>

            <div
              class="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a
                href="#partners"
                class="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl hover:from-blue-500 hover:to-cyan-500 hover:shadow-xl hover:shadow-blue-600/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Ver partners
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
                class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-all duration-300 border rounded-xl text-slate-200 border-slate-600 hover:border-blue-500 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 backdrop-blur-sm"
              >
                Solicitar cotización
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
              class="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 rounded-3xl blur-3xl"
            ></div>
            <InlineSvg
              src="/img/svg/lice3.svg"
              class="relative z-10 w-full h-auto drop-shadow-2xl animate-float text-cyan-500"
              role="img"
              aria-label="Ilustración de licenciamiento"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Partners / Value Proposition Section -->
  <section
    class="relative overflow-hidden bg-cover bg-top bg-no-repeat"
    style="background-image: url(&quot;/img/licenci-1.jpg&quot;)"
  >
    <!-- Overlay with gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-blue-950/90"
    ></div>

    <!-- Animated background orbs -->
    <div class="absolute inset-0 opacity-20">
      <div
        class="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600 rounded-full filter blur-3xl animate-pulse animation-delay-2000"
      ></div>
    </div>

    <div class="relative z-10 px-6 py-16 md:py-24 lg:py-32">
      <div class="max-w-7xl mx-auto">
        <div
          class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <!-- Left Column - Main Content -->
          <div class="text-white" data-aos="fade-right" data-aos-duration="800">
            <div class="max-w-xl">
              <!-- Section badge -->
              <div
                class="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-white/10 border-white/20 backdrop-blur-sm"
              >
                <span class="relative flex w-2 h-2">
                  <span
                    class="absolute inline-flex w-full h-full bg-cyan-400 rounded-full opacity-75 animate-ping"
                  ></span>
                  <span
                    class="relative inline-flex w-2 h-2 bg-cyan-500 rounded-full"
                  ></span>
                </span>
                <span class="text-sm font-medium text-cyan-300"
                  >Partner registrado · GCN Group</span
                >
              </div>

              <h2
                class="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl"
              >
                A diferencia de revendedores,
                <span
                  class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400"
                >
                  JBS Go
                </span>
                <br />ofrece respaldo y confianza.
              </h2>

              <div class="space-y-4 text-lg text-white/85 leading-relaxed">
                <p>
                  Ayuda a las empresas a cumplir plenamente la promesa de
                  tecnología™, maximizando el valor del hardware que utilizan.
                  Permite a los clientes operar de manera más eficiente y
                  exitosa en los mercados a los que sirven.
                </p>
                <p>
                  Asociados a
                  <span class="font-bold text-cyan-300">GCN Group</span>, la red
                  más grande de canales B2B de distribuidores locales de
                  Tecnología alrededor del mundo, lo que permite la distribución
                  de multimarcas en equipo y software.
                </p>
              </div>

              <!-- Stats -->
              <div class="grid grid-cols-3 gap-4 mt-8">
                <div class="text-center">
                  <p class="text-3xl font-bold text-cyan-300">50+</p>
                  <p class="text-sm text-white/70">Marcas asociadas</p>
                </div>
                <div class="text-center">
                  <p class="text-3xl font-bold text-cyan-300">15+</p>
                  <p class="text-sm text-white/70">Años de experiencia</p>
                </div>
                <div class="text-center">
                  <p class="text-3xl font-bold text-cyan-300">100%</p>
                  <p class="text-sm text-white/70">Licencias oficiales</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Features Cards -->
          <div
            class="grid grid-cols-1 gap-5"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="group relative p-6 overflow-hidden transition-all duration-500 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/20"
              :data-aos="feature.aos"
              data-aos-duration="600"
              :data-aos-delay="feature.delay"
            >
              <!-- Hover gradient -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              <div class="relative z-10 flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-12 h-12 transition-all duration-300 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-600/30 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      :d="feature.icon"
                    />
                  </svg>
                </div>
                <div>
                  <h4
                    class="mb-1 text-lg font-bold text-white group-hover:text-cyan-300 transition-colors"
                  >
                    {{ feature.title }}
                  </h4>
                  <p
                    class="text-sm text-white/70 group-hover:text-white/90 transition-colors"
                  >
                    {{ feature.description }}
                  </p>
                </div>
              </div>

              <!-- Decorative corner -->
              <div
                class="absolute bottom-0 right-0 w-12 h-12 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              >
                <div
                  class="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400 rounded-br-lg"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Brands / Partners Grid Section -->
  <section class="px-6 py-20 bg-white sm:py-28" id="partners">
    <div class="max-w-7xl mx-auto">
      <div class="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
        <span
          class="inline-block px-4 py-2 mb-4 text-sm font-bold tracking-wider text-blue-700 uppercase bg-blue-100 rounded-full"
        >
          Marcas asociadas
        </span>
        <h2
          class="mb-6 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl"
        >
          Distribuimos las mejores
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-700"
          >
            marcas del mercado
          </span>
        </h2>
        <p class="text-lg text-slate-600">
          Como partner oficial, tenemos acceso directo a las principales marcas
          de tecnología a nivel mundial.
        </p>
      </div>

      <!-- Brands Grid -->
      <div
        class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
      >
        <div
          v-for="(brand, index) in brands"
          :key="index"
          class="group p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center"
          data-aos="fade-up"
          :data-aos-delay="index * 50"
        >
          <div
            class="font-bold text-slate-800 group-hover:text-blue-700 transition-colors"
          >
            {{ brand }}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Benefits Section -->
  <section class="px-6 py-20 bg-slate-50 sm:py-28">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div
          v-for="(benefit, index) in benefits"
          :key="index"
          class="text-center"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div
            class="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 h-10 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="benefit.icon"
              />
            </svg>
          </div>
          <h3 class="mb-3 text-xl font-bold text-slate-900">
            {{ benefit.title }}
          </h3>
          <p class="text-slate-600">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section
    class="px-6 py-20 bg-gradient-to-br from-slate-900 to-blue-950 sm:py-28"
  >
    <div
      class="max-w-4xl mx-auto text-center"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <h2
        class="mb-6 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
      >
        ¿Buscas licenciamiento oficial?
      </h2>
      <p class="max-w-2xl mx-auto mb-10 text-lg text-slate-300">
        Como partners oficiales, te garantizamos las mejores condiciones y el
        respaldo directo de los fabricantes.
      </p>
      <div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <a
          href="#contact"
          class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl hover:from-blue-500 hover:to-cyan-500 hover:shadow-xl hover:shadow-blue-600/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Solicitar cotización
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
          href="#partners"
          class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-all duration-300 border rounded-xl text-slate-200 border-slate-600 hover:border-cyan-500 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Ver todos los partners
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionSeparator from "../components/SectionSeparator.vue";
import InlineSvg from "../components/InlineSvg.vue";

// Features data
const features = [
  {
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Licenciamiento oficial",
    description:
      "Partner registrado con certificación y respaldo directo de fabricantes.",
    aos: "fade-up",
    delay: "0",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Red global de distribuidores",
    description:
      "Acceso a multimarcas internacionales a través de la red GCN Group.",
    aos: "fade-up",
    delay: "100",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Soluciones ágiles",
    description:
      "Implementación rápida y eficaz adaptada a las necesidades de cada cliente.",
    aos: "fade-up",
    delay: "200",
  },
];

// Brands data
const brands = [
  "Microsoft",
  "Adobe",
  "Autodesk",
  "Oracle",
  "VMware",
  "Symantec",
  "McAfee",
  "Trend Micro",
  "HP",
  "Dell",
  "Lenovo",
  "Cisco",
  "Juniper",
  "Fortinet",
  "SAP",
  "IBM",
  "Salesforce",
  "Citrix",
  "Red Hat",
  "Canonical",
  "Samsung",
  "LG",
  "Sony",
  "Panasonic",
];

// Benefits data
const benefits = [
  {
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Garantía oficial",
    description:
      "Todas nuestras licencias cuentan con garantía directa del fabricante.",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Implementación rápida",
    description: "Activación y configuración de licencias en tiempo récord.",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Soporte especializado",
    description: "Equipo de expertos para asesorarte en cada paso del proceso.",
  },
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
</style>
