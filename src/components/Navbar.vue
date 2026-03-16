<template>
  <nav
    :class="[
      scrollPosition > 80
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50 py-2'
        : 'bg-transparent border-b border-transparent py-4',
    ]"
    class="fixed w-full z-50 top-0 start-0 transition-all duration-300"
  >
    <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Logo -->
      <a href="/" class="flex items-center group">
        <span
          :class="[scrollPosition > 80 ? 'text-slate-900' : 'text-white']"
          class="text-2xl sm:text-3xl font-extrabold tracking-tight transition-all duration-300"
        >
          JBS 
          <span class="text-rose-600 group-hover:text-rose-500 transition-colors">GO</span>
          <span class="text-rose-500">.</span>
        </span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center space-x-1">
        <a 
          v-for="item in navItems" 
          :key="item.name"
          :href="item.href"
          :class="[
            scrollPosition > 80 ? 'text-slate-700 hover:text-rose-700' : 'text-slate-200 hover:text-white',
            'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-white/10'
          ]"
        >
          {{ item.name }}
        </a>
      </div>

      <!-- Right side buttons -->
      <div class="flex items-center gap-2">
        <!-- Services Dropdown (Desktop) -->
        <div class="relative hidden lg:block" ref="dropdownRef">
          <button
            @click="toggleDropdown"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
            :class="[
              scrollPosition > 80 
                ? 'bg-gradient-to-r from-rose-700 to-rose-600 hover:from-rose-600 hover:to-rose-500 text-white shadow-lg shadow-rose-600/20' 
                : 'bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20',
              'inline-flex items-center gap-2 px-5 py-2.5 font-semibold rounded-xl text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-slate-900'
            ]"
          >
            <span>Servicios</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="w-4 h-4 transition-transform duration-300" 
              :class="{ 'rotate-180': isDropdownOpen }" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <!-- Dropdown Menu -->
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <div 
              v-show="isDropdownOpen"
              @mouseenter="handleMouseEnter"
              @mouseleave="handleMouseLeave"
              class="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50"
            >
              <div class="px-5 py-3 bg-gradient-to-r from-rose-50 to-slate-50 border-b border-slate-200">
                <p class="text-xs font-bold text-rose-700 uppercase tracking-widest">Nuestros Servicios</p>
              </div>
              <ul class="py-2">
                <li v-for="service in services" :key="service.path">
                  <RouterLink
                    :to="service.path"
                    class="flex items-center gap-3 px-5 py-3 text-sm text-slate-700 hover:bg-gradient-to-r hover:from-rose-50 hover:to-transparent hover:text-rose-700 transition-all duration-200 group"
                    @click="closeDropdown"
                  >
                    <span class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-rose-100 to-rose-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <img 
                        class="w-4 h-4" 
                        :src="service.icon" 
                        :alt="service.name"
                        loading="lazy"
                      />
                    </span>
                    <span class="flex-1">{{ service.name }}</span>
                    <svg class="w-4 h-4 text-rose-500 opacity-0 group-hover:opacity-100 transition-all transform translate-x-0 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </RouterLink>
                </li>
              </ul>
            </div>
          </transition>
        </div>

        <!-- Contact Button (Desktop) -->
        <a
          href="#contact"
          :class="[
            scrollPosition > 80 
              ? 'border-slate-300 text-slate-700 hover:border-rose-500 hover:text-rose-700' 
              : 'border-white/30 text-white hover:border-white hover:bg-white/10',
            'hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl border transition-all duration-300'
          ]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>Contacto</span>
        </a>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          :class="[
            scrollPosition > 80 ? 'text-slate-700' : 'text-white',
            'lg:hidden inline-flex items-center p-2.5 rounded-xl hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-rose-500'
          ]"
          type="button"
        >
          <span class="sr-only">Open main menu</span>
          <svg 
            class="w-6 h-6" 
            :class="{ 'hidden': isMobileMenuOpen }"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg 
            class="w-6 h-6" 
            :class="{ 'hidden': !isMobileMenuOpen }"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0"
    >
      <div 
        v-show="isMobileMenuOpen"
        class="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-t border-slate-200 max-h-[calc(100vh-4rem)] overflow-y-auto"
      >
        <div class="px-4 py-6 space-y-4">
          <!-- Mobile Navigation Links -->
          <div class="space-y-1">
            <a 
              v-for="item in navItems" 
              :key="item.name"
              :href="item.href"
              class="block px-4 py-3 text-slate-700 font-medium rounded-xl hover:bg-rose-50 hover:text-rose-700 transition-all duration-200"
              @click="closeMobileMenu"
            >
              {{ item.name }}
            </a>
          </div>

          <!-- Mobile Services Section -->
          <div class="pt-4 border-t border-slate-200">
            <p class="px-4 mb-2 text-xs font-bold text-slate-400 uppercase tracking-widest">Servicios</p>
            <div class="space-y-1">
              <RouterLink
                v-for="service in services" 
                :key="service.path"
                :to="service.path"
                class="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 rounded-xl hover:bg-rose-50 hover:text-rose-700 transition-all duration-200"
                @click="closeMobileMenu"
              >
                <span class="flex-shrink-0 w-7 h-7 bg-rose-100 rounded-lg flex items-center justify-center">
                  <img class="w-4 h-4" :src="service.icon" :alt="service.name" loading="lazy" />
                </span>
                <span>{{ service.name }}</span>
              </RouterLink>
            </div>
          </div>

          <!-- Mobile Contact Button -->
          <div class="pt-4 border-t border-slate-200">
            <a
              href="#contact"
              class="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-rose-700 to-rose-600 text-white font-semibold rounded-xl hover:from-rose-600 hover:to-rose-500 transition-all duration-200"
              @click="closeMobileMenu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contacto</span>
            </a>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

// Scroll position
const scrollPosition = ref(0)

// Dropdown state
const isDropdownOpen = ref(false)
const dropdownTimeout = ref(null)

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Navigation items
const navItems = [
  /*{ name: 'Inicio', href: '/' },*/
]

// Services data
const services = [
  {
    name: 'Licenciamiento & Mayorista',
    path: '/licenciamiento',
    icon: 'https://img.icons8.com/?size=100&id=67464&format=png&color=be123c'
  },
  {
    name: 'Ciberseguridad & Videovigilancia',
    path: '/ciberseguridad',
    icon: 'https://img.icons8.com/?size=100&id=RV7kciJyN5um&format=png&color=be123c'
  },
  {
    name: 'Mantenimiento & Servicio',
    path: '/mantenimiento',
    icon: 'https://img.icons8.com/?size=100&id=103122&format=png&color=be123c'
  },
  {
    name: 'Energía & Detección de Incendios',
    path: '/energia',
    icon: 'https://img.icons8.com/?size=100&id=h2vavgy2Hqlj&format=png&color=be123c'
  },
  {
    name: 'Logística & Transportación',
    path: '/logistica',
    icon: 'https://img.icons8.com/?size=100&id=ampvNvsTTwqT&format=png&color=be123c'
  }
]

// Update scroll position
const updateScroll = () => {
  scrollPosition.value = window.scrollY
}

// Dropdown handlers
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const handleMouseEnter = () => {
  if (dropdownTimeout.value) {
    clearTimeout(dropdownTimeout.value)
  }
  isDropdownOpen.value = true
}

const handleMouseLeave = () => {
  dropdownTimeout.value = setTimeout(() => {
    isDropdownOpen.value = false
  }, 200)
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}

// Mobile menu handlers
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Prevent body scroll when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

// Close mobile menu on resize if screen becomes large
const handleResize = () => {
  if (window.innerWidth >= 1024 && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', updateScroll)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
  window.removeEventListener('resize', handleResize)
  // Clean up body overflow
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Smooth transitions for mobile menu */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Prevent content shift when scrollbar disappears */
html {
  scrollbar-gutter: stable;
}

/* Custom scrollbar for mobile menu */
.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: #f43f5e #e2e8f0;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #e2e8f0;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: #f43f5e;
  border-radius: 20px;
}
</style>