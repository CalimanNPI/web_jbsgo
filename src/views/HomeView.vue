<template>
  <!-- Section 2 -->
  <section
    class="px-2 py-32 md:px-0 bg-slate-900 bg-gradient-to-r from-slate-900 to-rose-900"
  >
    <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
      <div class="flex flex-wrap items-center sm:-mx-3">
        <div
          class="w-full md:w-1/2 md:px-3"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div
            class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0"
          >
            <h1
              class="tracking-tight leading-6 text-4xl font-extrabold text-slate-200 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl"
            >
              <span class="block xl:inline">Somos el puente entre la </span>
              <span class="block text-rose-700 xl:inline"
                >tecnología y los negocios.</span
              >
            </h1>
            <p
              class="leading-6 mx-auto text-base text-slate-200 sm:max-w-md lg:text-xl md:max-w-3xl tracking-tight"
            >
              Nuestros sistemas cuentan con tecnología avanzada que le permite
              tener mayor control sobre su negocio, maximizando el crecimiento y
              los resultados fijados para acelerar los negocios de sus socios
              adaptados a sus necesidades.
            </p>
            <div class="relative flex flex-col sm:flex-row sm:space-x-4">
              <!--<a href="#_" class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
              Try It Free
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="#_" class="flex items-center px-6 py-3 text-slate-500 bg-slate-100 rounded-md hover:bg-slate-200 hover:text-slate-600">
              Learn More
            </a>-->
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div class="w-full h-auto overflow-hidden">
            <img src="/img/svg/home5.svg" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mx-auto px-6 md:max-w-screen-xl" id="services">
    <div
      class="mx-auto mt-20 mb-16 block px-6 text-center text-slate-700 tracking-tight leading-6"
    >
      <h2
        class="mx-auto font-extrabold tracking-tight leading-6 text-4xl sm:text-5xl sm:leading-none md:text-center normal-case"
      >
        <span class="text-rose-700 font-extrabold"> JBS Go</span> es creada ...
      </h2>
      <div
        class="mx-auto mt-6 mb-auto block w-full text-xl font-medium lg:text-xl tracking-tight leading-6 md:w-3/4 xl:w-3/4"
      >
        <p>
          Gracias a la iniciativa, confianza y profesionalismo de cada uno de
          los miembros, es que
          <span class="text-rose-700 font-extrabold"> JBS Go</span> puede
          ofrecer múltiples soluciones en diversos sectores del mercado:
        </p>
      </div>
    </div>
    <div class="grid gap-5 pb-20 sm:grid-cols-2 lg:grid-cols-2">
      <RouterLink
        to="/licenciamiento"
        class="transform bg-slate-900 p-10 transition duration-700 ease-in-out rounded-lg border-l-8 border-rose-200 hover:border-rose-700 cursor-pointer hover:shadow-2xl hover:scale-90"
      >
        <div class="my-4 flex items-center">
          <div
            class="mr-4 flex h-20 w-20 items-center justify-center rounded-lg border border-spacing-10 border-rose-500 bg-slate-50 text-2xl"
          >
            <img
              class="w-12 h-12 lg:w-16 lg:h-16"
              src="https://img.icons8.com/?size=100&id=67464&format=png&color=be123c"
              alt="wallmount-camera"
            />
          </div>
          <h3
            class="tracking-tight leading-6 text-2xl font-extrabold text-slate-200"
          >
            Licenciamiento & Mayorista de tecnología
          </h3>
        </div>
        <p
          class="lg:text-xl tracking-tight leading-6 text-lg font-medium text-slate-200"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          repellendus.
        </p>
      </RouterLink>
      <RouterLink
        to="/ciberseguridad"
        class="transform bg-slate-900 p-10 transition duration-700 ease-in-out rounded-lg border-l-8 border-rose-200 hover:border-rose-700 cursor-pointer hover:shadow-2xl hover:scale-90"
      >
        <div class="my-4 flex items-center">
          <div
            class="mr-4 flex h-20 w-20 items-center justify-center rounded-lg border border-spacing-10 border-rose-500 bg-slate-50 text-2xl"
          >
            <img
              class="w-12 h-12 lg:w-16 lg:h-16"
              src="https://img.icons8.com/?size=100&id=RV7kciJyN5um&format=png&color=be123c"
              alt="wallmount-camera"
            />
          </div>
          <h3
            class="tracking-tight leading-6 text-2xl font-extrabold text-slate-200"
          >
            Ciberseguridad & Videovigilancia
          </h3>
        </div>
        <p class="tracking-tight leading-6 text-lg font-medium text-slate-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          repellendus.
        </p>
      </RouterLink>
      <RouterLink
        to="/mantenimiento"
        class="transform bg-slate-900 p-10 transition duration-700 ease-in-out rounded-lg border-l-8 border-rose-200 hover:border-rose-700 cursor-pointer hover:shadow-2xl hover:scale-90"
      >
        <div class="my-4 flex items-center">
          <div
            class="mr-4 flex h-20 w-20 items-center justify-center rounded-lg border border-spacing-10 border-rose-500 bg-slate-50 text-2xl"
          >
            <img
              class="w-12 h-12 lg:w-16 lg:h-16"
              src="https://img.icons8.com/?size=100&id=103122&format=png&color=be123c"
              alt="wallmount-camera"
            />
          </div>
          <h3
            class="tracking-tight leading-6 text-2xl font-extrabold text-slate-200"
          >
            Mantenimiento & Servicio
          </h3>
        </div>
        <p class="tracking-tight leading-6 text-lg font-medium text-slate-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          repellendus.
        </p>
      </RouterLink>
      <RouterLink
        to="/energia"
        class="transform bg-slate-900 p-10 transition duration-700 ease-in-out rounded-lg border-l-8 border-rose-200 hover:border-rose-700 cursor-pointer hover:shadow-2xl hover:scale-90"
      >
        <div class="my-4 flex items-center">
          <div
            class="mr-4 flex h-20 w-20 items-center justify-center rounded-lg border border-spacing-10 border-rose-500 bg-slate-50 text-2xl"
          >
            <img
              class="w-12 h-12 lg:w-16 lg:h-16"
              src="https://img.icons8.com/?size=100&id=h2vavgy2Hqlj&format=png&color=be123c"
              alt="wallmount-camera"
            />
          </div>
          <h3
            class="tracking-tight leading-6 text-2xl font-extrabold text-slate-200"
          >
            Energía & Sistemas de detección de incendios
          </h3>
        </div>
        <p class="tracking-tight leading-6 text-lg font-medium text-slate-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          repellendus.
        </p>
      </RouterLink>
      <RouterLink
        to="/logistica"
        class="transform bg-slate-900 p-10 transition duration-700 ease-in-out rounded-lg border-l-8 border-rose-200 hover:border-rose-700 cursor-pointer hover:shadow-2xl hover:scale-90"
      >
        <div class="my-4 flex items-center">
          <div
            class="mr-4 flex h-20 w-20 items-center justify-center rounded-lg border border-spacing-10 border-rose-500 bg-slate-50 text-2xl"
          >
            <img
              class="w-12 h-12 lg:w-16 lg:h-16"
              src="https://img.icons8.com/?size=100&id=ampvNvsTTwqT&format=png&color=be123c"
              alt="wallmount-camera"
            />
          </div>
          <h3
            class="tracking-tight leading-6 text-2xl font-extrabold text-slate-200"
          >
            Logística & transportación empresarial
          </h3>
        </div>
        <p class="tracking-tight leading-6 text-lg font-medium text-slate-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          repellendus.
        </p>
      </RouterLink>
    </div>
  </section>

  <section class="bg-slate-900" id="about">
    <div class="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
      <div class="grid items-center grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
        <div class="md:order-first">
          <div
            class="flex flex-col gap-12 mt-5 font-medium tracking-tight leading-6 text-slate-700"
          >
            <div
              data-aos="fade-up-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              class="bg-slate-50 mx-auto rounded-sm p-10 w-full"
            >
              <p class="mb-4 w-32 rounded-md bg-rose-100 px-2 py-1"></p>
              <p class="font-medium tracking-tight leading-6 mb-2 text-2xl">
                Centro Universitario Cuautitlán Izcalli
              </p>
              <p class="mb-6">
                Instalación de cableado estructurado en salones para clases
                híbridas, preparación de gabinete para centro de datos
              </p>
              <div class="flex space-x-2 items-center">
                <span class="text-rose-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>Ciberseguridad y Videovigilancia</span>
              </div>
            </div>

            <div
              data-aos="fade-up-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              class="bg-slate-50 mx-auto rounded-sm p-10 w-full"
            >
              <p class="mb-4 w-32 rounded-md bg-rose-100 px-2 py-1"></p>
              <p class="mb-2 text-2xl">
                Universidad de Cuautitlán Izcalli Plantel Balcones del Valle
              </p>
              <p class="mb-6">
                Instalación de cableado estructurado en salones para clases
                híbridas.
              </p>
              <div class="flex space-x-2 items-center">
                <span class="text-rose-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>Ciberseguridad y Videovigilancia</span>
              </div>
            </div>

            <div
              data-aos="fade-up-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              class="bg-slate-50 mx-auto rounded-sm p-10 w-full"
            >
              <p class="mb-4 w-32 rounded-md bg-purple-100 px-2 py-1"></p>
              <p class="mb-2 text-2xl">Centro Deportivo Coyoacan A.C.</p>
              <p class="mb-6">Inspección tierras fisicas de instalaciones.</p>
              <div class="flex space-x-2 items-center">
                <span class="text-rose-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>Energía y Sistemas de detección de incendios</span>
              </div>
            </div>

            <div
              data-aos="fade-up-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              class="bg-slate-50 mx-auto rounded-sm p-10 w-full"
            >
              <p class="mb-4 w-32 rounded-md bg-purple-100 px-2 py-1"></p>
              <p class="mb-2 text-2xl">Centro de monitoreo C5 Pachuca</p>
              <p class="mb-6">
                Inspeccion plantas de suministro de energía de respaldo y aparta
                rayos.
              </p>

              <div class="flex space-x-2 items-center">
                <span class="text-rose-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>Energía y Sistemas de detección de incendios</span>
              </div>
            </div>
          </div>
        </div>
        <div class="order-first block w-full h-full">
          <div class="sticky md:top-36">
            <h1
              class="font-extrabold tracking-tight leading-6 text-4xl text-slate-200 lg:text-5xl"
            >
              Nuestra máxima <br />
              <span class="text-rose-700">empresarial </span> es ...
            </h1>
            <p
              class="mt-4 tracking-tight text-base font-medium text-slate-200 text-balance text-justify"
            >
              El compromiso con México y toda aquella empresa o persona que
              requiera del uso de recursos y soluciones tecnológicas para
              re-incorporarse a la economía en esta nueva normalidad, a esta
              Revolución Tecnológica que ya no es una opción.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
