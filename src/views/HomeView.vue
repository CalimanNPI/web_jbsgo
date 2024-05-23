<script>
import emailjs from "@emailjs/browser";
import { data } from "autoprefixer";

export default {
  data() {
    return {
      data: { name: "", email: "", message: "" },
      isSend: false,
      erroSend: false,
    };
  },
  methods: {
    async sendEmail(e) {
      try {
        let isSend = await emailjs.send(
          "service_6orqgzg",
          "template_345ffk6",
          this.data,
          "NS_lrf5OzRwX5v4f-"
        );

        if (isSend.status == 200) {
          this.isSend = true;
          this.data.email = "";
          this.data.name = "";
          this.data.message = "";
        } else {
          this.erroSend = true;
        }
      } catch (error) {
        this.errorSend = true;
      }
    },
  },
};
</script>

<template>
  <div
    class="mx-auto h-full px-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8"
  >
    <div class="flex flex-col items-center justify-between lg:flex-row">
      <div class=" ">
        <div class="lg:max-w-xl lg:pr-5">
          <p class="flex text-sm uppercase text-rose-700 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-1 inline h-10 w-10"
              viewBox="0 0 300 300"
            >
              <circle
                cx="159.09"
                cy="160.12"
                r="119.42"
                style="fill: rgb(190, 18, 60)"
              ></circle>
              <circle
                cx="140.91"
                cy="139.88"
                r="119.42"
                style="
                  fill: none;
                  stroke: rgb(37, 38, 52);
                  stroke-miterlimit: 10;
                  stroke-width: 3px;
                "
              ></circle>
            </svg>
            Usamos la tecnología a su favor
          </p>
          <h2
            class="mb-6 max-w-lg text-5xl font-medium leading-snug tracking-tight text-gray-700 sm:text-7xl sm:leading-snug"
          >
            Juntos Brindamos
            <span
              class="my-1 inline-block border-b-8 border-gray-900 bg-rose-700 px-4 font-extrabold text-white"
              >Soluciones</span
            >
          </h2>
          <p class="text-base text-gray-700">
            Somos el puente entre la tecnología y los negocios
          </p>
        </div>
        <div class="mt-10 flex flex-col items-center md:flex-row">
          <!--<a href="/" class="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-gray-700 px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-rose-700 focus:outline-none md:mr-4 md:mb-0 md:w-auto" >Stream Now</a>
          <a href="/" aria-label="" class="group inline-flex items-center font-semibold text-gray-700" >Watch how it works
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>-->
        </div>
      </div>

      <div class="relative text-rose-600 lg:ml-32 lg:w-1/2 hidden lg:block">
        <div class="border-b-8 border-b-rose-600 max-w-lg mx-auto mb-10">
          <img
            class="w-full h-full object-contain transition-all duration-300 ease-in-out hover:scale-105"
            src="/img/Business.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>

  <div
    class="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 -top-5"
    id="services"
  >
    <h2
      class="mb-1 text-5xl font-extrabold leading-tight text-rose-700 text-center"
    >
      Servicios
    </h2>
    <p class="mb-12 text-xl text-gray-700 text-center">
      Gracias a la iniciativa, confianza y profesionalismo de cada uno de los
      miembros, es que
      <span class="text-rose-700 font-bold"> JBS Go</span> puede ofrecer
      múltiples soluciones en diversos sectores del mercado:
    </p>
    <div class="w-full">
      <div class="flex flex-col w-full mb-10 sm:flex-row">
        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
          <div class="relative h-full ml-0 mr-0 sm:mr-10">
            <span
              class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"
            ></span>
            <div
              class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg"
            >
              <div class="flex items-center -mt-1">
                <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">
                  Licenciamiento & Mayorista de tecnología
                </h3>
              </div>
              <p
                class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase"
              >
                ------------
              </p>
              <p class="mb-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                quo soluta facere exercitationem laboriosam quisquam voluptatem
                ab repellendus at iusto assumenda odio, rerum quis placeat
                temporibus repudiandae eos illum non?
              </p>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2">
          <div class="relative h-full ml-0 md:mr-10">
            <span
              class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-violet-500 rounded-lg"
            ></span>
            <div
              class="relative h-full p-5 bg-white border-2 border-violet-500 rounded-lg"
            >
              <div class="flex items-center -mt-1">
                <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">
                  Ciberseguridad & Videovigilancia
                </h3>
              </div>
              <p
                class="mt-3 mb-1 text-xs font-medium text-violet-500 uppercase"
              >
                ------------
              </p>
              <p class="mb-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                quo soluta facere exercitationem laboriosam quisquam voluptatem
                ab repellendus at iusto assumenda odio, rerum quis placeat
                temporibus repudiandae eos illum non?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full mb-5 sm:flex-row">
        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
          <div class="relative h-full ml-0 mr-0 sm:mr-10">
            <span
              class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-400 rounded-lg"
            ></span>
            <div
              class="relative h-full p-5 bg-white border-2 border-purple-400 rounded-lg"
            >
              <div class="flex items-center -mt-1">
                <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">
                  Mantenimiento & Servicio
                </h3>
              </div>
              <p
                class="mt-3 mb-1 text-xs font-medium text-purple-400 uppercase"
              >
                ------------
              </p>
              <p class="mb-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                quo soluta facere exercitationem laboriosam quisquam voluptatem
                ab repellendus at iusto assumenda odio, rerum quis placeat
                temporibus repudiandae eos illum non?
              </p>
            </div>
          </div>
        </div>
        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
          <div class="relative h-full ml-0 mr-0 sm:mr-10">
            <span
              class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-fuchsia-400 rounded-lg"
            ></span>
            <div
              class="relative h-full p-5 bg-white border-2 border-fuchsia-400 rounded-lg"
            >
              <div class="flex items-center -mt-1">
                <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">
                  Energía & Sistemas de detección de incendios
                </h3>
              </div>
              <p
                class="mt-3 mb-1 text-xs font-medium text-fuchsia-400 uppercase"
              >
                ------------
              </p>
              <p class="mb-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                quo soluta facere exercitationem laboriosam quisquam voluptatem
                ab repellendus at iusto assumenda odio, rerum quis placeat
                temporibus repudiandae eos illum non?
              </p>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2">
          <div class="relative h-full ml-0 md:mr-10">
            <span
              class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-pink-500 rounded-lg"
            ></span>
            <div
              class="relative h-full p-5 bg-white border-2 border-pink-500 rounded-lg"
            >
              <div class="flex items-center -mt-1">
                <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">
                  Logística & transportación empresarial
                </h3>
              </div>
              <p class="mt-3 mb-1 text-xs font-medium text-pink-500 uppercase">
                ------------
              </p>
              <p class="mb-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                quo soluta facere exercitationem laboriosam quisquam voluptatem
                ab repellendus at iusto assumenda odio, rerum quis placeat
                temporibus repudiandae eos illum non?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section class="container px-0 md:px-0">
    <section class="relative px-10 md:p-0">
      <img
        class="xl:max-w-6xl"
        src="https://images.pexels.com/photos/5990153/pexels-photo-5990153.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1860"
        alt=""
      />
      <div
        class="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5"
      >
        <div class="flex justify-between font-bold text-sm">
          <p>Sobre nosotros</p>
        </div>
        <h2 class="text-3xl font-semibold mt-4 md:mt-10">
          Nuestra máxima <span class="text-rose-700">empresarial</span>
        </h2>
        <p class="my-3 text-justify font-medium text-gray-700 leading-relaxed">
          El compromiso con México y toda aquella empresa o persona que requiera
          del uso de recursos y soluciones tecnológicas para re-incorporarse a
          la economía en esta nueva normalidad, a esta Revolución Tecnológica
          que ya no es una opción.
        </p>
      </div>
    </section>
  </section>

  <div class="bg-white">
    <div
      class="container mx-auto py-8 px-4 md:px-0 md:flex md:justify-center md:items-center"
    >
      <div class="md:w-1/2 lg:w-1/3 md:mr-8">
        <h1 class="text-2xl font-bold mb-4 text-rose-700">
          Somos el puente entre la tecnología y los negocios
        </h1>
        <p class="text-lg font mb-4 text-gray-800">
          Nuestros sistemas cuentan con tecnología avanzada que le permite tener
          mayor control sobre su negocio. Maximizando el crecimiento y los
          resultados fijados para acelerar los negocios de sus socios adaptados
          a sus necesidades.
        </p>
      </div>
      <div class="md:w-1/2 lg:w-2/3 mt-8 md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
          alt="Responsive Design"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>

  <section class="bg-white" id="contact">
    <div class="container px-6 py-12 mx-auto">
      <div>
        <p class="font-medium text-rose-700">Contacta con nosotros</p>

        <h1 class="mt-2 text-3xl font-semibold text-gray-700 md:text-4xl">
          Trabajemos juntos
        </h1>

        <p class="mt-3 text-gray-500">
          Seleccionar el sistema adecuado para su negocio implica comprender sus
          necesidades ahora y en el futuro
        </p>
      </div>

      <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <span
              class="inline-block p-3 text-rose-700 rounded-full bg-rose-100/80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>

            <h2 class="mt-4 text-base font-medium text-gray-800">
              Correo electrónico
            </h2>
            <p class="mt-2 text-sm text-gray-500">
              Nuestro equipo está aquí para ayudar..
            </p>
            <p class="mt-2 text-sm text-rose-700">contacto@jbsgo.com.mx</p>
            <p class="mt-2 text-sm text-rose-700">ventas@jbsgo.com.mx</p>
          </div>

          <div>
            <span
              class="inline-block p-3 text-rose-500 rounded-full bg-rose-100/80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                troke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"
                ></path>
              </svg>
            </span>

            <h2 class="mt-4 text-base font-medium text-gray-800">Horarios</h2>
            <p class="mt-2 text-sm text-gray-500">Lunes a viernes</p>
            <p class="mt-2 text-sm text-rose-500">09:00 am a 06:00 pm</p>
            <p class="mt-2 text-sm text-gray-500">Sábado</p>
            <p class="mt-2 text-sm text-rose-500">12:00 am a 4:00 pm</p>
          </div>

          <div>
            <span
              class="inline-block p-3 text-rose-700 rounded-full bg-rose-100/80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>

            <h2 class="mt-4 text-base font-medium text-gray-700">Ubicación</h2>
            <p class="mt-2 text-sm text-gray-500">Ecatepec de Morelos,</p>
            <p class="mt-2 text-sm text-rose-700">Estado de México</p>
          </div>

          <div>
            <span
              class="inline-block p-3 text-rose-700 rounded-full bg-rose-100/80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </span>

            <h2 class="mt-4 text-base font-medium text-gray-700">Teléfono</h2>
            <p class="mt-2 text-sm text-gray-500">Celular</p>
            <p class="mt-2 text-sm text-rose-700">+52 (56) 2437 40450</p>
          </div>
        </div>

        <div class="p-4 py-6 rounded-lg bg-gray-50 md:p-8">
          <form @submit.prevent="sendEmail()">
            <div v-if="isSend">
              <div
                class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg"
              >
                <p class="text-lg font-semibold">Mensaje Enviado</p>
                <p>Nos pondremos en contacto la mas pronto posible con usted</p>
              </div>
            </div>

            <div v-if="erroSend">
              <div
                class="bg-green-100 border-l-4 border-yellow-400 text-yellow-700 p-4 rounded-lg"
              >
                <p class="text-lg font-semibold">Error al enviar su mensaje</p>
                <p>Intentelo mas tarde.</p>
              </div>
            </div>

            <div class="flex-1 px-2">
              <label class="block mb-2 text-sm text-gray-700">Nombre</label>
              <input
                type="text"
                placeholder="John "
                id="name"
                name="name"
                v-model="data.name"
                class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-rose-400 focus:ring-rose-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div class="mt-4">
              <label class="block mb-2 text-sm text-gray-700"
                >Correo electrónico</label
              >
              <input
                type="email"
                placeholder="jbsgo@example.com"
                v-model="data.email"
                id="email"
                name="email"
                class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-rose-400 focus:ring-rose-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div class="w-full mt-4">
              <label class="block mb-2 text-sm text-gray-700">Mensage</label>
              <textarea
                class="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-rose-400 focus:ring-rose-400 focus:outline-none focus:ring focus:ring-opacity-40"
                rows="4"
                placeholder="Mensaje ..."
                v-model="data.message"
                id="message"
                name="message"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-rose-500 rounded-lg hover:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-300 focus:ring-opacity-50"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
