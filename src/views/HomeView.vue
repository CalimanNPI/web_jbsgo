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


<header class=" relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-slate-700 md:mx-auto md:flex-row md:items-center">
  <a href="#" class="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black">
    the future
  </a>
  <input type="checkbox" class="peer hidden" id="navbar-open" />
  <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
    <span class="sr-only">Toggle Navigation</span>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </label>
  <nav aria-label="Header Navigation" class="flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all peer-checked:mt-8 peer-checked:max-h-56 md:ml-24 md:max-h-full md:flex-row md:items-start">
    <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
      <li class="font-bold md:mr-12"><a href="#">Nosotros</a></li>
      <li class="md:mr-12">
        <button class="rounded-full border-2 border-rose-700 px-6 py-1 text-rose-700 transition-colors hover:bg-rose-700 hover:text-white">Servicios</button>
      </li>
    </ul>
  </nav>
</header>

<div class="bg-rose-50 relative">
  <div class="mx-auto max-w-xl lg:max-w-screen-xl py-16 lg:py-32 ">
    <div class="mb-16 text-center lg:mb-0 lg:max-w-lg lg:text-">
      <div class="mb-6 max-w-xl">
        <div>
          <p class="mb-4 inline-block rounded-full bg-white px-4 py-3 text-sm font-semibold tracking-wider text-rose-700 border border-rose-700">Juntos Brindamos Soluciones</p>
        </div>
        <h2 class="mb-6 max-w-lg font-sans text-4xl font-black tracking-tight text-slate-700 sm:text-6xl sm:leading-snug">
          Somos el puente entre la <span class="inline-block text-rose-700">tecnología y los negocios</span>
        </h2>
        <p class="font-sans text-lg text-gray-700 md:text-lg">
          Nuestros sistemas cuentan con tecnología avanzada que le permite tener
          mayor control sobre su negocio. Maximizando el crecimiento y los
          resultados fijados para acelerar los negocios de sus socios adaptados
          a sus necesidades.
        </p>
      </div>
      <div class="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 lg:justify-start">
        <button class="relative mt-4 rounded-lg border-2 border-rose-700 bg-rose-700 px-6 py-2 font-medium text-white transition hover:translate-y-1">
          <div class="-scale-x-100 absolute left-0 -bottom-10 inline-flex h-10 w-10 -rotate-12 text-rose-700">
            <svg viewBox="0 0 82 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 21.3963C0.189514 19.1422 0.475057 16.717 0.554355 14.2852C0.582363 13.435 0.32301 12.6326 1.24839 12.1517C1.43863 12.053 1.7169 11.8956 1.85767 11.9661C4.2446 13.1626 6.90906 13.1934 9.41312 13.8814C11.09 14.3423 12.6519 15.089 13.7134 16.5797C13.9251 16.8774 13.9105 17.3427 14 17.7305C13.6228 17.8077 13.2227 18.01 12.8727 17.9421C10.3283 17.4477 7.78825 16.9245 5.25946 16.353C4.46612 16.1737 4.32244 16.4862 4.22859 17.1961C4.0118 18.8342 3.66769 20.4541 3.43198 22.0899C3.33086 22.7891 3.36905 23.509 3.35123 24.2197C3.34977 24.2791 3.44107 24.3474 3.43052 24.3989C3.32213 24.9318 3.2712 25.8796 3.07114 25.9142C2.49387 26.0144 1.77655 25.8915 1.25603 25.5961C-0.352473 24.6832 0.143681 23.0129 0 21.3963Z" fill="currentColor" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M33.9279 29.9296C33.9687 30.0252 34.0103 30.1211 34.0512 30.2167L36.776 28.708C36.7189 28.6018 36.6613 28.4961 36.6041 28.3903C35.7123 28.9033 34.8197 29.4166 33.9279 29.9296ZM55.213 27.9357C55.2513 28.0076 55.2895 28.0795 55.3278 28.1513C56.8382 27.5018 58.3486 26.8518 59.8593 26.2019C59.8129 26.092 59.7661 25.9821 59.7197 25.8726C58.2175 26.5602 56.7153 27.2481 55.213 27.9357ZM40.7384 18.9565C40.5279 17.8215 40.3393 16.6815 40.0998 15.5525C39.952 14.8551 39.5106 14.6711 38.8099 14.825C36.6153 15.3082 34.9909 17.2686 34.7963 19.6189C34.584 22.1806 36.0472 23.7605 37.8517 25.1395C37.9927 25.2475 38.5155 25.0604 38.6986 24.8591C40.2045 23.1998 40.6396 21.163 40.7384 18.9565ZM47.8846 27.7513C53.9169 27.9699 58.9887 25.6539 63.5351 21.8258C68.7108 17.4677 72.7252 12.1435 76.2413 6.39113C77.3061 4.64903 78.3271 2.87833 79.4328 1.16371C79.7291 0.70344 80.2137 0.234515 80.706 0.0824723C81.0457 -0.0225277 81.5473 0.410268 81.9765 0.603333C81.8444 0.859247 81.7237 1.12306 81.5774 1.37032C81.1827 2.03645 80.7194 2.66758 80.3867 3.36306C79.3033 5.6264 78.3041 7.93113 77.1981 10.1824C76.4525 11.6998 75.639 13.1905 74.7457 14.6225C74.1814 15.5269 73.3694 16.269 72.7471 17.1414C71.7606 18.5237 70.9604 20.0611 69.8622 21.3395C68.1531 23.33 66.4111 25.3434 64.4139 27.0174C59.9989 30.718 54.9038 32.5263 49.0801 32.1605C46.3701 31.9904 43.6835 31.9283 41.122 30.8655C40.842 30.7492 40.3185 30.9333 40.0448 31.1527C37.2899 33.3656 34.1239 34.5277 30.6632 34.7456C28.0734 34.909 25.4198 35.1171 22.8828 34.7219C20.7546 34.3908 18.675 33.3742 16.7198 32.3694C14.9819 31.4756 13.3686 30.2773 11.8348 29.0418C9.65017 27.2812 8.09522 24.9795 7.06601 22.3556C6.91824 21.9789 7.17257 21.2819 7.46774 20.9267C7.79559 20.5315 8.26675 20.7212 8.80326 20.9647C10.4826 21.7271 11.1635 23.3172 12.0776 24.6916C13.809 27.2959 16.297 28.8333 19.144 29.6515C24.0015 31.0477 28.8342 30.4606 33.5239 28.7422C36.0572 27.8134 36.0323 27.708 34.1863 25.8643C31.7566 23.438 30.4122 20.5417 30.5982 17.0518C30.8143 13.0012 34.1347 10.1538 38.1338 10.4515C39.3892 10.5452 40.2439 11.3239 41.0648 12.1255C42.9294 13.9466 43.9712 16.2194 44.3347 18.7977C44.7112 21.4648 44.7806 24.1113 43.5286 26.6189C43.2264 27.2244 43.5171 27.489 44.1483 27.5187C45.3947 27.5778 46.6393 27.6719 47.8846 27.7513Z" fill="currentColor" />
            </svg>
          </div>
          Contactanos
        </button>
      </div>

    </div>
    <div class="hidden h-full justify-center overflow-hidden lg:absolute lg:bottom-0 lg:right-0 lg:flex lg:w-1/2 lg:items-end lg:justify-start">
      <svg class="h-full w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="img1" x="0" y="0" width="1" height="1">
            <image x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMaxYMax slice" href="https://images.unsplash.com/photo-1575218823251-f9d243b6f720?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          </pattern>
        </defs>
        <path fill="url(#img1)" d="M40,-62.6C52.2,-54.5,62.5,-43.9,66.9,-31.4C71.3,-18.9,69.6,-4.6,65.9,8.3C62.2,21.1,56.4,32.5,49.2,45.2C42.1,57.9,33.7,72.1,22.2,75.3C10.7,78.5,-3.9,70.7,-14.8,62.1C-25.7,53.5,-32.8,44.1,-44.9,35.8C-57,27.5,-74,20.3,-82.1,7.7C-90.3,-4.8,-89.5,-22.7,-80.8,-34.8C-72,-46.9,-55.2,-53.3,-40.4,-60.2C-25.6,-67,-12.8,-74.3,0.6,-75.2C13.9,-76.1,27.9,-70.6,40,-62.6Z" transform="translate(100 100)" />
      </svg>
    </div>
  </div>
</div>




  <div class="flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0" id="services">
      <p class="text-slate-500 mt-10 text-sm font-semibold tracking-wider text-center uppercase">Usamos la tecnología a su favor</p>
      <h2 class="mb-10 text-5xl font-extrabold leading-tight text-rose-700 text-center">Servicios</h2>
      <p class="mx-30 mb-12 text-xl text-center text-gray-700">
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
              class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
              <div class="flex items-center -mt-1">
                <svg viewBox="0 0 24 24" class="h-12 w-12 fill-current text-indigo-500">
                  <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"></path>
                </svg>
                <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">
                  Licenciamiento & Mayorista de tecnología
                </h3>
              </div>
              <p class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
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
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-violet-500 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-violet-500 rounded-lg">
              <div class="flex items-center -mt-1">
                <svg viewBox="0 0 24 24" class="h-12 w-12 fill-current text-violet-500">
                  <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"></path>
                </svg>
                <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">
                  Ciberseguridad & Videovigilancia
                </h3>
              </div>
              <p class="mt-3 mb-1 text-xs font-medium text-violet-500 uppercase">------------</p>
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
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-400 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-purple-400 rounded-lg">
              <div class="flex items-center -mt-1">
                <svg viewBox="0 0 24 24" class="h-12 w-12 fill-current text-purple-500">
                  <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"></path>
                </svg>
                <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">
                  Mantenimiento & Servicio
                </h3>
              </div>
              <p class="mt-3 mb-1 text-xs font-medium text-purple-400 uppercase">------------</p>
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
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-fuchsia-400 rounded-lg"></span>
            <div
              class="relative h-full p-5 bg-white border-2 border-fuchsia-400 rounded-lg">
              <div class="flex items-center -mt-1">
                <svg viewBox="0 0 24 24" class="h-12 w-12 fill-current text-fuchsia-500">
                  <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"></path>
                </svg>
                <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">
                  Energía & Sistemas de detección de incendios
                </h3>
              </div>
              <p class="mt-3 mb-1 text-xs font-medium text-fuchsia-400 uppercase">------------</p>
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
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-pink-500 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-pink-500 rounded-lg">
              <div class="flex items-center -mt-1">
                <svg viewBox="0 0 24 24" class="h-12 w-12 fill-current text-pink-500">
                  <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"></path>
                </svg>
                <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">
                  Logística & transportación empresarial
                </h3>
              </div>
              <p class="mt-3 mb-1 text-xs font-medium text-pink-500 uppercase">------------</p>
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
        <p class="text-lg font mb-4 text-gray-800">
          Nuestros sistemas cuentan con tecnología avanzada que le permite tener
          mayor control sobre su negocio. Maximizando el crecimiento y los
          resultados fijados para acelerar los negocios de sus socios adaptados
          a sus necesidades.
        </p>
        <h1 class="text-2xl font-bold mb-4 text-rose-700">
          Usamos la tecnología a su favor
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
