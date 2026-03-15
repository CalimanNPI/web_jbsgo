<template>
  <!-- Hero Section -->
  <section
    class="relative px-4 py-24 overflow-hidden md:px-0 md:py-32 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900"
  >
    <!-- Animated background elements -->
    <div class="absolute inset-0 opacity-20">
      <div
        class="absolute top-20 left-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
      ></div>
      <div
        class="absolute top-40 right-10 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute bottom-20 left-20 w-96 h-96 bg-emerald-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"
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
              class="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-emerald-950/40 border-emerald-800/30 backdrop-blur-sm"
            >
              <span class="relative flex w-2 h-2">
                <span
                  class="absolute inline-flex w-full h-full bg-emerald-400 rounded-full opacity-75 animate-ping"
                ></span>
                <span
                  class="relative inline-flex w-2 h-2 bg-emerald-500 rounded-full"
                ></span>
              </span>
              <span class="text-sm font-medium text-emerald-300"
                >Movilidad Empresarial</span
              >
            </div>

            <h1
              class="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              <span class="block">Logística y</span>
              <span
                class="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400"
              >
                transportación empresarial
              </span>
            </h1>

            <p
              class="mb-8 text-lg leading-relaxed text-slate-300 max-w-lg mx-auto lg:mx-0"
            >
              Con una flota moderna y tecnología de seguimiento avanzada,
              garantizamos la entrega puntual y la satisfacción del cliente,
              permitiéndote concentrarte en lo que mejor haces.
            </p>

            <div
              class="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a
                href="#services"
                class="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:from-emerald-500 hover:to-teal-500 hover:shadow-xl hover:shadow-emerald-600/25 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900"
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
                class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-all duration-300 border rounded-xl text-slate-200 border-slate-600 hover:border-emerald-500 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 backdrop-blur-sm"
              >
                Cotizar traslado
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
              class="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 rounded-3xl blur-3xl"
            ></div>
            <InlineSvg
              src="/img/svg/map1.svg"
              class="relative z-10 w-full h-auto drop-shadow-2xl animate-float text-emerald-500"
              role="img"
              aria-label="Ilustración de logística"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <SectionSeparator variant="gradient" theme="emerald" spacing="sm" />

  <!-- Services Overview Section -->
  <div class="px-4 py-20 bg-white lg:px-8 lg:py-24">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="max-w-2xl mx-auto mb-16 text-center" data-aos="fade-up">
        <span
          class="inline-block px-4 py-2 mb-4 text-sm font-bold tracking-wider text-emerald-700 uppercase bg-emerald-100 rounded-full"
        >
          Lo que ofrecemos
        </span>
        <h2 class="mb-5 text-4xl font-extrabold text-slate-800 sm:text-5xl">
          Servicios de
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-emerald-700"
            >logística integral</span
          >
        </h2>
        <p class="text-lg text-slate-500">
          JBS Go comprende el valor del tiempo y lo importante que es llegar al
          lugar indicado en el momento justo.
        </p>
      </div>

      <div class="grid max-w-screen-lg gap-12 mx-auto lg:grid-cols-2">
        <!-- Left Column - Services List -->
        <div class="space-y-8" data-aos="fade-right" data-aos-duration="800">
          <div
            v-for="(service, index) in logisticsServices"
            :key="index"
            class="flex group"
          >
            <div class="mr-4">
              <div
                class="flex items-center justify-center w-20 h-20 transition-all duration-300 rounded-full bg-gradient-to-br from-emerald-50 to-teal-50 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-200"
              >
                <img
                  class="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                  :src="service.icon"
                  :alt="service.title"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="flex-1">
              <h3
                class="mb-2 text-xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors"
              >
                {{ service.title }}
              </h3>
              <p class="text-slate-600">{{ service.description }}</p>
              <hr class="w-full mt-4 border-slate-200" />
            </div>
          </div>
        </div>

        <!-- Right Column - Image Grid -->
        <div
          class="grid grid-cols-2 gap-5"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <img
            class="object-cover w-full h-56 col-span-2 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
            src="/img/trans-1.jfif"
            alt="Flota de vehículos"
            loading="lazy"
          />
          <img
            class="object-cover w-full h-48 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            src="/img/trans-2.jfif"
            alt="Servicio de transporte"
            loading="lazy"
          />
          <img
            class="object-cover w-full h-48 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            src="/img/trans-3.jfif"
            alt="Logística empresarial"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- Specialized Services Grid -->
  <div class="bg-slate-900 text-slate-200">
    <div class="px-4 py-20 mx-auto max-w-7xl md:px-8 lg:py-24">
      <div class="text-center mb-16" data-aos="fade-up">
        <span
          class="inline-block px-4 py-2 mb-4 text-sm font-bold tracking-wider text-emerald-400 uppercase bg-emerald-950/50 rounded-full border border-emerald-800/30"
        >
          Soluciones especializadas
        </span>
        <h2 class="text-4xl font-extrabold text-white sm:text-5xl">
          Tipos de
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-400"
            >servicio</span
          >
        </h2>
      </div>

      <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
        <div
          v-for="(service, index) in specializedServices"
          :key="index"
          class="group text-center"
          data-aos="fade-up"
          :data-aos-delay="index * 50"
        >
          <div
            class="flex items-center justify-center w-24 h-24 mx-auto mb-4 transition-all duration-300 bg-gradient-to-br from-emerald-900/40 to-teal-900/30 rounded-2xl border border-emerald-800/30 group-hover:border-emerald-500/50 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-emerald-600/20"
          >
            <img
              class="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
              :src="service.icon"
              :alt="service.title"
              loading="lazy"
            />
          </div>
          <h3
            class="text-sm font-bold leading-5 tracking-wider uppercase text-slate-300 group-hover:text-emerald-400 transition-colors"
          >
            {{ service.title }}
          </h3>
        </div>
      </div>
    </div>

    <!-- Full Width Image -->
    <div class="relative overflow-hidden">
      <img
        class="object-cover w-full h-64 sm:h-96 transition-transform duration-700 hover:scale-105"
        src="/img/trans-5.jpg"
        alt="Flota de vehículos"
        loading="lazy"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"
      ></div>
    </div>
  </div>

  <!-- Vehicle Fleet Sections -->
  <div class="bg-white">
    <!-- SUV's Ejecutivas -->
    <div class="relative overflow-hidden">
      <div class="flex flex-col lg:flex-row">
        <!-- Image Column (Right on desktop) -->
        <div
          class="relative w-full lg:w-1/2 h-96 lg:h-auto order-1 lg:order-2"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <div
            class="absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent z-10"
          ></div>
          <img
            class="absolute inset-0 object-cover w-full h-full"
            src="/img/trans-auto-1.jfif"
            alt="SUV's Ejecutivas"
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
              class="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-emerald-100 border-emerald-200"
            >
              <span class="relative flex w-2 h-2">
                <span
                  class="absolute inline-flex w-full h-full bg-emerald-500 rounded-full opacity-75 animate-ping"
                ></span>
                <span
                  class="relative inline-flex w-2 h-2 bg-emerald-600 rounded-full"
                ></span>
              </span>
              <span class="text-sm font-medium text-emerald-800"
                >Flota Premium</span
              >
            </div>

            <h2 class="mb-6 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              SUV's
              <span
                class="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-emerald-700"
              >
                Ejecutivas
              </span>
            </h2>

            <p class="mb-6 text-lg leading-relaxed text-slate-700">
              Gracias a sus características de diseño, estas SUV's ofrecen una
              capacidad de 6-7 pasajeros. Viaja con estilo y máxima seguridad.
              Sus interiores de lujo y equipo multimedia permite un ambiente de
              relajación que hacen de tus trayectos algo único.
            </p>

            <!-- Features -->
            <div class="grid grid-cols-2 gap-4 mt-8">
              <div class="flex items-center gap-2">
                <svg
                  class="w-5 h-5 text-emerald-600"
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
                <span class="text-sm text-slate-600">6-7 pasajeros</span>
              </div>
              <div class="flex items-center gap-2">
                <svg
                  class="w-5 h-5 text-emerald-600"
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
                <span class="text-sm text-slate-600">Multimedia integrado</span>
              </div>
              <div class="flex items-center gap-2">
                <svg
                  class="w-5 h-5 text-emerald-600"
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
                <span class="text-sm text-slate-600">Interiores de lujo</span>
              </div>
              <div class="flex items-center gap-2">
                <svg
                  class="w-5 h-5 text-emerald-600"
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
                <span class="text-sm text-slate-600">Máxima seguridad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Transporte Empresarial -->
    <div class="relative overflow-hidden bg-slate-50">
      <div class="flex flex-col lg:flex-row">
        <!-- Image Column (Left on desktop) -->
        <div
          class="relative w-full lg:w-1/2 h-96 lg:h-auto"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10"
          ></div>
          <img
            class="absolute inset-0 object-cover w-full h-full"
            src="/img/trans-auto-2.jfif"
            alt="Transporte Empresarial"
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
              class="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-emerald-100 border-emerald-200"
            >
              <span class="relative flex w-2 h-2">
                <span
                  class="absolute inline-flex w-full h-full bg-emerald-500 rounded-full opacity-75 animate-ping"
                ></span>
                <span
                  class="relative inline-flex w-2 h-2 bg-emerald-600 rounded-full"
                ></span>
              </span>
              <span class="text-sm font-medium text-emerald-800"
                >Traslados Ejecutivos</span
              >
            </div>

            <h2 class="mb-6 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Transporte
              <span
                class="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-emerald-700"
              >
                Empresarial
              </span>
            </h2>

            <p class="mb-6 text-lg leading-relaxed text-slate-700">
              Ideales para un traslado confortable de tu llegada al aeropuerto a
              cualquier destino. Con capacidad hasta para 4 pasajeros. Todas
              nuestras unidades ofrecen un gran espacio, comodidad y seguridad.
            </p>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4 mt-8">
              <div class="text-center">
                <p class="text-2xl font-bold text-emerald-700">4</p>
                <p class="text-xs text-slate-500">Pasajeros</p>
              </div>
              <div class="text-center">
                <p class="text-2xl font-bold text-emerald-700">24/7</p>
                <p class="text-xs text-slate-500">Disponibilidad</p>
              </div>
              <div class="text-center">
                <p class="text-2xl font-bold text-emerald-700">GPS</p>
                <p class="text-xs text-slate-500">Seguimiento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mercedes-Benz Sprinter -->
    <div class="relative overflow-hidden">
      <div class="flex flex-col lg:flex-row">
        <!-- Image Column (Right on desktop) -->
        <div
          class="relative w-full lg:w-1/2 h-96 lg:h-auto order-1 lg:order-2"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <div
            class="absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent z-10"
          ></div>
          <img
            class="absolute inset-0 object-cover w-full h-full"
            src="/img/trans-auto-3.jfif"
            alt="Mercedes-Benz Sprinter"
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
              class="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-emerald-100 border-emerald-200"
            >
              <span class="relative flex w-2 h-2">
                <span
                  class="absolute inline-flex w-full h-full bg-emerald-500 rounded-full opacity-75 animate-ping"
                ></span>
                <span
                  class="relative inline-flex w-2 h-2 bg-emerald-600 rounded-full"
                ></span>
              </span>
              <span class="text-sm font-medium text-emerald-800"
                >Transporte Grupal</span
              >
            </div>

            <h2 class="mb-6 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Mercedes-Benz
              <span
                class="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-emerald-700"
              >
                Sprinter
              </span>
            </h2>

            <p class="mb-6 text-lg leading-relaxed text-slate-700">
              Ideal para el transporte de turismo o grupal, con capacidad hasta
              de 17 pasajeros. Cuentan con cómodos asientos ajustables y
              cinturones independientes, sistemas inteligentes de manejo,
              sistemas de asistencia de conducción y monitoreo de neumáticos.
            </p>

            <!-- Features Grid -->
            <div class="grid grid-cols-2 gap-3 mt-6">
              <div
                v-for="(feature, index) in sprinterFeatures"
                :key="index"
                class="flex items-center gap-2"
              >
                <svg
                  class="w-4 h-4 text-emerald-600 flex-shrink-0"
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
                <span class="text-sm text-slate-600">{{ feature }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Testimonial/Trust Section -->
  <div
    class="relative w-full h-full py-24 bg-center bg-cover bg-fixed"
    style="background-image: url(&quot;/img/trans-5.jpg&quot;)"
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
            class="p-3 rounded-full bg-emerald-600/20 border border-emerald-500/30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 h-10 text-emerald-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        <h3 class="mb-6 text-2xl font-bold text-white lg:text-3xl">
          Comprometidos en ofrecer una gama completa de opciones para resolver
          los desafíos de seguridad, movilidad y puntualidad de nuestros
          clientes
        </h3>

        <div class="flex justify-center">
          <div
            class="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-500 rounded-full"
          ></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CTA Section -->
  <section
    class="px-6 py-20 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 sm:py-28"
  >
    <div
      class="max-w-4xl mx-auto text-center"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <h2
        class="mb-6 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
      >
        ¿Necesitas transporte ejecutivo?
      </h2>
      <p class="max-w-2xl mx-auto mb-10 text-lg text-slate-300">
        Contamos con una flota moderna y conductores profesionales para
        garantizar tu seguridad y puntualidad.
      </p>
      <div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <a
          href="#contact"
          class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:from-emerald-500 hover:to-teal-500 hover:shadow-xl hover:shadow-emerald-600/25 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Cotizar ahora
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
          href="#fleet"
          class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-all duration-300 border rounded-xl text-slate-200 border-slate-600 hover:border-emerald-500 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Ver flota completa
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionSeparator from "../components/SectionSeparator.vue";
import InlineSvg from "../components/InlineSvg.vue";

// Logistics services data
const logisticsServices = [
  {
    icon: "https://img.icons8.com/?size=100&id=OrtYMIbFyTDX&format=png&color=34d399 ",
    title: "Logística",
    description:
      "Ser eficiente garantiza entregas puntuales, satisfacción del cliente y operaciones fluidas.",
  },
  {
    icon: "https://img.icons8.com/?size=100&id=ncQusIGBL0-F&format=png&color=34d399 ",
    title: "Transportación ejecutiva",
    description:
      "Comprometidos en ofrecer una gama completa de opciones para resolver los desafíos de seguridad, movilidad y puntualidad de nuestros clientes.",
  },
];

// Specialized services data
const specializedServices = [
  {
    icon: "https://img.icons8.com/?size=100&id=rGzjKLN0kn3O&format=png&color=34d399 ",
    title: "Meet & greet Transfer",
  },
  {
    icon: "https://img.icons8.com/?size=100&id=rGzjKLN0kn3O&format=png&color=34d399 ",
    title: "Pick up",
  },
  {
    icon: "https://img.icons8.com/?size=100&id=ZX1aN99PDj4E&format=png&color=34d399 ",
    title: "Drop off",
  },
  {
    icon: "https://img.icons8.com/?size=100&id=ampvNvsTTwqT&format=png&color=34d399 ",
    title: "Door to door",
  },
  {
    icon: "https://img.icons8.com/?size=100&id=8_YULh6oHPbc&format=png&color=34d399 ",
    title: "Traslado foráneo",
  },
  {
    icon: "https://img.icons8.com/?size=100&id=67447&format=png&color=34d399 ",
    title: "Servicio a disposición",
  },
];

// Sprinter features
const sprinterFeatures = [
  "17 pasajeros",
  "Asientos ajustables",
  "Cinturones independientes",
  "Sistemas ADAS",
  "Luces de niebla",
  "Escalón eléctrico",
  "Monitoreo de neumáticos",
  "Asistencia de conducción",
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
