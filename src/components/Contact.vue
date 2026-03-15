<script setup>
import { ref, reactive } from "vue";
import emailjs from "@emailjs/browser";

// Form state
const formData = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
  service: "",
  newsletter: false
});

// UI states
const isSending = ref(false);
const isSend = ref(false);
const errors = ref([]);

// Success state
const showSuccess = ref(false);

// Form validation
const validateForm = () => {
  errors.value = [];

  if (!formData.name?.trim()) {
    errors.value.push("El nombre es requerido");
  }

  if (!formData.email?.trim()) {
    errors.value.push("El correo electrónico es requerido");
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.value.push("Ingrese un correo electrónico válido");
    }
  }

  if (formData.phone && !/^[\d\s\+\-\(\)]{10,}$/.test(formData.phone)) {
    errors.value.push("Ingrese un número de teléfono válido");
  }

  if (!formData.message?.trim()) {
    errors.value.push("El mensaje es requerido");
  }

  return errors.value.length === 0;
};

// Send email
const sendEmail = async () => {
  if (!validateForm()) return;

  isSending.value = true;
  errors.value = [];

  try {
    const result = await emailjs.send(
      "service_6orqgzg",
      "template_345ffk6",
      {
        ...formData,
        phone: formData.phone || "No especificado",
        service: formData.service || "No especificado"
      },
      "NS_lrf5OzRwX5v4f-"
    );

    if (result.status === 200) {
      isSend.value = true;
      showSuccess.value = true;
      
      // Reset form
      Object.assign(formData, {
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "",
        newsletter: false
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        showSuccess.value = false;
        isSend.value = false;
      }, 5000);
    }
  } catch (error) {
    console.error("Error sending email:", error);
    errors.value.push("Error al enviar el mensaje. Por favor intente más tarde.");
  } finally {
    isSending.value = false;
  }
};

// Service options
const serviceOptions = [
  { value: "", label: "Seleccione un servicio" },
  { value: "licenciamiento", label: "Licenciamiento & Mayorista" },
  { value: "ciberseguridad", label: "Ciberseguridad & Videovigilancia" },
  { value: "mantenimiento", label: "Mantenimiento & Servicio" },
  { value: "energia", label: "Energía & Detección de Incendios" },
  { value: "logistica", label: "Logística & Transportación" },
  { value: "otro", label: "Otro" }
];
</script>

<template>
  <section class="relative z-10 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 py-20 lg:py-[120px]" id="contact">
    <!-- Animated background elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-96 h-96 bg-rose-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
    </div>

    <div class="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <div class="inline-flex items-center gap-2 px-4 py-2 mb-4 border rounded-full bg-rose-950/40 border-rose-800/30 backdrop-blur-sm">
          <span class="relative flex w-2 h-2">
            <span class="absolute inline-flex w-full h-full bg-rose-400 rounded-full opacity-75 animate-ping"></span>
            <span class="relative inline-flex w-2 h-2 bg-rose-500 rounded-full"></span>
          </span>
          <span class="text-sm font-medium text-rose-300">Contacto</span>
        </div>

        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Trabajemos 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-600">
            juntos
          </span>
        </h2>
        
        <p class="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Nuestro equipo está aquí para ayudar. Seleccionar el sistema adecuado implica comprender sus necesidades ahora y en el futuro.
        </p>
      </div>

      <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <!-- Contact info column -->
        <div class="w-full lg:w-5/12" data-aos="fade-right" data-aos-duration="800">
          <div class="sticky top-32 space-y-6">
            <!-- Info cards -->
            <div 
              v-for="(info, index) in contactInfo" 
              :key="index"
              class="group p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 hover:border-rose-500/30 transition-all duration-300"
            >
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-rose-600/20 to-rose-700/20 border border-rose-800/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-rose-600/30 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" :d="info.icon" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-white mb-1 group-hover:text-rose-400 transition-colors">
                    {{ info.title }}
                  </h4>
                  <div v-html="info.content" class="text-slate-400 text-sm leading-relaxed"></div>
                </div>
              </div>
            </div>

            <!-- Social media -->
            <div class="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm">
              <h4 class="font-bold text-white mb-4">Síguenos en:</h4>
              <div class="flex gap-3">
                <a 
                  v-for="social in socialLinks" 
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 rounded-xl bg-slate-700/50 border border-slate-600 flex items-center justify-center text-slate-400 hover:text-white hover:bg-rose-600/20 hover:border-rose-500/50 transition-all duration-300 group"
                  :aria-label="social.name"
                >
                  <svg class="w-5 h-5" fill="currentColor" :viewBox="social.viewBox">
                    <path :d="social.path" />
                  </svg>
                </a>
              </div>
            </div>

            <!-- Map preview -->
            <div class="rounded-2xl overflow-hidden border border-slate-700/50 h-48 bg-slate-800/40">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120465.93858549655!2d-99.072753!3d19.601389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f2b4b2b2b2b3%3A0x3b3b3b3b3b3b3b3b!2sEcatepec%20de%20Morelos%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1620000000000!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style="border:0; filter: grayscale(1) invert(0.9);"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Ubicación de JBS GO en Ecatepec"
              ></iframe>
            </div>
          </div>
        </div>

        <!-- Contact form column -->
        <div class="w-full lg:w-7/12" data-aos="fade-left" data-aos-duration="800">
          <div class="p-6 sm:p-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700/50 shadow-2xl">
            <!-- Success message -->
            <transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <div v-if="showSuccess" class="mb-6 p-4 bg-green-900/30 border border-green-700/50 rounded-xl backdrop-blur-sm">
                <div class="flex items-center gap-3">
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-green-600/20 flex items-center justify-center">
                    <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-green-400">¡Mensaje enviado con éxito!</p>
                    <p class="text-sm text-green-500/80">Nos pondremos en contacto lo más pronto posible.</p>
                  </div>
                </div>
              </div>
            </transition>

            <!-- Error messages -->
            <transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
            >
              <div v-if="errors.length > 0" class="mb-6 p-4 bg-red-900/30 border border-red-700/50 rounded-xl backdrop-blur-sm">
                <div class="flex items-start gap-3">
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center">
                    <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-red-400 mb-2">Por favor corrija los siguientes errores:</p>
                    <ul class="space-y-1 list-disc list-inside text-sm text-red-400/80">
                      <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </transition>

            <form @submit.prevent="sendEmail">
              <!-- Name field -->
              <div class="mb-5">
                <label class="block text-slate-300 text-sm font-medium mb-2">
                  Nombre completo <span class="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  v-model="formData.name"
                  placeholder="Juan Pérez"
                  class="w-full rounded-xl border border-slate-600 bg-slate-900/50 text-slate-100 placeholder-slate-500 py-3.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent transition hover:border-slate-500"
                  :class="{ 'border-rose-500': errors.includes('El nombre es requerido') }"
                />
              </div>

              <!-- Email field -->
              <div class="mb-5">
                <label class="block text-slate-300 text-sm font-medium mb-2">
                  Correo electrónico <span class="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  v-model="formData.email"
                  placeholder="juan@empresa.com"
                  class="w-full rounded-xl border border-slate-600 bg-slate-900/50 text-slate-100 placeholder-slate-500 py-3.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent transition hover:border-slate-500"
                  :class="{ 'border-rose-500': errors.includes('El correo electrónico es requerido') || errors.includes('Ingrese un correo electrónico válido') }"
                />
              </div>

              <!-- Phone field (optional) -->
              <div class="mb-5">
                <label class="block text-slate-300 text-sm font-medium mb-2">
                  Teléfono <span class="text-slate-500 text-xs">(opcional)</span>
                </label>
                <input
                  type="tel"
                  v-model="formData.phone"
                  placeholder="+52 56 2437 4050"
                  class="w-full rounded-xl border border-slate-600 bg-slate-900/50 text-slate-100 placeholder-slate-500 py-3.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent transition hover:border-slate-500"
                />
              </div>

              <!-- Service selection (optional) -->
              <div class="mb-5">
                <label class="block text-slate-300 text-sm font-medium mb-2">
                  Servicio de interés <span class="text-slate-500 text-xs">(opcional)</span>
                </label>
                <select
                  v-model="formData.service"
                  class="w-full rounded-xl border border-slate-600 bg-slate-900/50 text-slate-100 py-3.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent transition hover:border-slate-500"
                >
                  <option 
                    v-for="option in serviceOptions" 
                    :key="option.value" 
                    :value="option.value"
                    class="bg-slate-800"
                  >
                    {{ option.label }}
                  </option>
                </select>
              </div>

              <!-- Message field -->
              <div class="mb-6">
                <label class="block text-slate-300 text-sm font-medium mb-2">
                  Mensaje <span class="text-rose-500">*</span>
                </label>
                <textarea
                  v-model="formData.message"
                  rows="5"
                  placeholder="Cuéntenos sobre su proyecto, necesidades o consulta..."
                  class="w-full rounded-xl border border-slate-600 bg-slate-900/50 text-slate-100 placeholder-slate-500 py-3.5 px-4 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent transition hover:border-slate-500"
                  :class="{ 'border-rose-500': errors.includes('El mensaje es requerido') }"
                ></textarea>
              </div>

              <!-- Newsletter checkbox -->
              <div class="mb-6">
                <label class="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    v-model="formData.newsletter"
                    class="w-4 h-4 rounded border-slate-600 bg-slate-900 text-rose-600 focus:ring-rose-500 focus:ring-offset-0 focus:ring-offset-slate-900"
                  />
                  <span class="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    Deseo recibir información sobre novedades y promociones
                  </span>
                </label>
              </div>

              <!-- Submit button -->
              <button
                type="submit"
                :disabled="isSending"
                class="relative w-full py-4 px-6 bg-gradient-to-r from-rose-700 to-rose-600 hover:from-rose-600 hover:to-rose-500 text-white font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-rose-500/40 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden"
              >
                <span class="relative z-10 flex items-center justify-center gap-2">
                  <svg v-if="!isSending" class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <svg v-else class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ isSending ? 'Enviando...' : 'Enviar Mensaje' }}
                </span>
              </button>

              <!-- Privacy notice -->
              <p class="mt-4 text-xs text-center text-slate-500">
                Al enviar este formulario, aceptas nuestra 
                <a href="#" class="text-rose-500 hover:text-rose-400 underline underline-offset-2 transition-colors">
                  Política de Privacidad
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

/* Form input autofill styles */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: #f1f5f9;
  -webkit-box-shadow: 0 0 0px 1000px #1e293b inset;
  transition: background-color 5000s ease-in-out 0s;
}

/* Loading animation */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>

<script>
// Contact info data (separado del setup para mejor organización)
const contactInfo = [
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Ubicación",
    content: "Ecatepec de Morelos,<br />Estado de México"
  },
  {
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    title: "Teléfono",
    content: "+52 (56) 2437 4050<br /><span class='text-xs text-slate-500'>Lun-Vie 9:00 - 18:00</span>"
  },
  {
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    title: "Correo electrónico",
    content: "contacto@jbsgo.com.mx<br />ventas@jbsgo.com.mx"
  }
];

// Social media links
const socialLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com/jbsgo",
    viewBox: "0 0 24 24",
    path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/jbsgo",
    viewBox: "0 0 24 24",
    path: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/jbsgo",
    viewBox: "0 0 24 24",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/jbsgo",
    viewBox: "0 0 24 24",
    path: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.467.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
  }
];
</script>