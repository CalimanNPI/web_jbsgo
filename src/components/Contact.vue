<script>
import emailjs from "@emailjs/browser";

export default {
  data() {
    return {
      data: { name: "", email: "", phone: "", message: " " },
      isSend: false,
      erroSend: false,
      errors:[], 
    };
  },
  methods: {
    async sendEmail(e) { 

      this.validateForm();

      console.log(this.errors)
      if(this.errors.length==0){

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
        this.errors.push(`Error al enviar el mensaje: ${error} `)
      }             
      }
    },
    validateForm(){
      if(!this.data.name){
        this.errors.push('El nombre el requerido')
      }
      
      if(!this.data.email){
        this.errors.push('El email el requerido')
      }
      
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(this.data.email)){
        this.errors.push('Ingrese un correo electrónicos valido')
      }
     

      console.log(this.data.message.length)
      if(!this.data.message){
        this.errors.push('Mensaje es requerido')
      }


    }
  },
};
</script>

<template>
  <section class="relative z-10 overflow-hidden py-20 lg:py-[120px] text-slate-900"  id="contacto">
    <div class="container mx-auto">
      <div class="flex flex-wrap -mx-4 lg:justify-between">
        <div class="w-full px-4 lg:w-1/2 xl:w-6/12">
          <div class="mb-12 max-w-[570px] lg:mb-0">
            <span class="block mb-4 text-base font-semibold text-primary">
              Contacta con nosotros
            </span>
            <h2 class="text-rose-700 mb-6 text-[25] font-bold uppercase sm:text-[30px] lg:text-[30px] xl:text-[30px]">
              Trabajemos juntos, nuestro equipo está aquí para ayudar...
            </h2>
            <p class="text-base leading-relaxed text-body-color mb-9">
              Seleccionar el sistema adecuado para su negocio implica comprender
              sus necesidades ahora y en el futuro
            </p>
            <div class="mb-8 flex w-full max-w-[370px]">
              <div class="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style="fill: rgba(190, 18, 60, 1);transform: ;msFilter:;"><path d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"></path></svg>              </div>
              <div class="w-full">
                <h4 class="mb-1 text-xl font-bold text-rose-700">Ubicación</h4>
                <p class="text-base text-body-color">
                  Ecatepec de Morelos, Estado de México
                </p>
              </div>
            </div>
            <div class="mb-8 flex w-full max-w-[370px]">
              <div class="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style="fill: rgba(190, 18, 60, 1);transform: ;msFilter:;"><path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"></path></svg>              </div>
              <div class="w-full">
                <h4 class="mb-1 text-xl font-bold text-rose-700">
                  Teléfono Celular
                </h4>
                <p class="text-base text-body-color">+52 (56) 2437 40450</p>
              </div>
            </div>
            <div class="mb-8 flex w-full max-w-[370px]">
              <div class="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style="fill: rgba(190, 18, 60, 1);transform: ;msFilter:;"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>              </div>
              <div class="w-full">
                <h4 class="mb-1 text-xl font-bold text-rose-700">
                  Correos electrónicos
                </h4>
                <p class="text-base text-body-color">contacto@jbsgo.com.mx</p>
                <p class="text-base text-body-color">ventas@jbsgo.com.mx</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
          <div class="relative p-8 bg-white rounded-lg shadow-lg sm:p-12">
            <form @submit.prevent="sendEmail()">

              <TransitionGroup name="list" tag="ul">

              <div v-if="isSend">
                <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg">
                  <p class="text-lg font-semibold">Mensaje Enviado</p>
                  <p>
                    Nos pondremos en contacto lo más pronto posible con usted
                  </p>
                </div>
              </div>

              <div v-if="errors.length > 0" >
                <div class="bg-red-100 border-l-4 border-red-800 text-red-700 p-4 rounded-lg">
                  <ul class="space-y-4 list-disc list-inside">
                    <li v-for="error in errors" >{{ error }}</li>
                  </ul>
                </div>
              </div>
            </TransitionGroup>


              <div class="mb-6 mt-10">
                <input type="text" placeholder="Tú nombre" v-model="data.name" class="border-stroke text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"/>
              </div>
              <div class="mb-6">
                <input v-model="data.email" type="email" placeholder="Tú correo electrónicos" class="border-stroke text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"/>
              </div>
              <div class="mb-6">
                <textarea v-model="data.message" rows="6" placeholder="Tú mensage" class="border-stroke text-body-color focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none"></textarea>
              </div>
              <div>
                <button type="submit" class="w-full p-3 text-white transition border rounded border-primary bg-gradient-to-br from-rose-500 to-rose-900 focus:ring-4 focus:outline-none focus:ring-purple-200">
                  Enviar Mensaje
                </button>
              </div>
            </form>
            <div>
              <span class="absolute -top-10 -right-9 z-[-1]">
                <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><circle cx="159.09" cy="160.12" r="119.42" style="fill: rgb(190, 18, 60);"></circle><circle cx="140.91" cy="139.88" r="119.42" style="fill: none; stroke: rgb(37, 38, 52); stroke-miterlimit: 10; stroke-width: 3px;"></circle></svg>
              </span>
              <span class="absolute -right-10 top-[90px] z-[-1]">
                <svg width="134" height="150" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 300 300"><path fill="#d6d6e9" d="M24.2 33.67H70.53V61.07H24.2z" transform="rotate(-45 47.37 47.368)"></path><path fill="#d6d6e9" d="M232.19 241.66H278.52V269.06H232.19z" transform="rotate(-45 255.362 255.356)"></path><path fill="#A5A6BC" d="M9.58 67.17H151.14000000000001V94.57H9.58z" transform="rotate(-45 80.36 80.874)"></path><path fill="#A5A6BC" d="M148.59 206.18H290.15V233.58H148.59z" transform="rotate(-45 219.37 219.884)"></path><path fill="#4e4f66" d="M-8.81 101.42H239.07V128.82H-8.81z" transform="rotate(-45 115.13 115.132)"></path><path fill="#4e4f66" d="M60.93 171.17H308.81V198.57H60.93z" transform="rotate(-45 184.868 184.875)"></path><path fill="#be123c" d="M-9.95 135.73H308.81V163.13H-9.95z" transform="rotate(-45 149.428 149.435)"></path></svg>
              </span>
             
              <span class="absolute -left-7 -bottom-7 z-[-1]">
                <svg width="134" height="150" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 300 300"><path fill="#d6d6e9" d="M24.2 33.67H70.53V61.07H24.2z" transform="rotate(-45 47.37 47.368)"></path><path fill="#d6d6e9" d="M232.19 241.66H278.52V269.06H232.19z" transform="rotate(-45 255.362 255.356)"></path><path fill="#A5A6BC" d="M9.58 67.17H151.14000000000001V94.57H9.58z" transform="rotate(-45 80.36 80.874)"></path><path fill="#A5A6BC" d="M148.59 206.18H290.15V233.58H148.59z" transform="rotate(-45 219.37 219.884)"></path><path fill="#4e4f66" d="M-8.81 101.42H239.07V128.82H-8.81z" transform="rotate(-45 115.13 115.132)"></path><path fill="#4e4f66" d="M60.93 171.17H308.81V198.57H60.93z" transform="rotate(-45 184.868 184.875)"></path><path fill="#be123c" d="M-9.95 135.73H308.81V163.13H-9.95z" transform="rotate(-45 149.428 149.435)"></path></svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>