<template>
  <div class="w-full py-24 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden" id="brands">
    <!-- Section Header -->
    <div class="text-center mb-16 px-4 relative" data-aos="fade-up">
      <!-- Decorative element -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>
      
      <span class="inline-block px-4 py-2 mb-6 text-sm font-bold tracking-wider text-rose-400 uppercase bg-rose-950/30 rounded-full border border-rose-800/30 backdrop-blur-sm">
        <span class="relative flex items-center gap-2">
          <span class="relative flex w-2 h-2">
            <span class="absolute inline-flex w-full h-full bg-rose-400 rounded-full opacity-75 animate-ping"></span>
            <span class="relative inline-flex w-2 h-2 bg-rose-500 rounded-full"></span>
          </span>
          Alianzas Comerciales
        </span>
      </span>

      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
        Como <span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-600">integradores</span>
        <br class="hidden sm:block" />de tecnología
      </h2>

      <p class="mt-4 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
        Contamos con alianzas comerciales sólidas dedicadas a la comercialización
        y distribución de las mejores marcas a nivel nacional.
      </p>
    </div>

    <!-- Marquee Container -->
    <div class="relative overflow-hidden py-8">
      <!-- Main Marquee Track -->
      <div class="marquee-wrapper">
        <div class="marquee-track flex gap-6" :style="{ animationDuration: `${animationSpeed}s` }">
          <!-- First set of logos -->
          <div 
            v-for="(brand, index) in brandLogos" 
            :key="`first-${index}`"
            class="logo-card group"
          >
            <div class="logo-image-wrapper">
              <img 
                :src="brand.src" 
                :alt="brand.alt"
                class="logo-image"
                loading="lazy"
              />
            </div>
            <!-- Tooltip on hover -->
            <div class="logo-tooltip">
              {{ brand.alt }}
            </div>
          </div>

          <!-- Duplicate set for seamless loop -->
          <div 
            v-for="(brand, index) in brandLogos" 
            :key="`second-${index}`"
            class="logo-card group"
          >
            <div class="logo-image-wrapper">
              <img 
                :src="brand.src" 
                :alt="brand.alt"
                class="logo-image"
                loading="lazy"
              />
            </div>
            <div class="logo-tooltip">
              {{ brand.alt }}
            </div>
          </div>
        </div>
      </div>

      <!-- Gradient Overlays -->
      <div class="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10"></div>
      <div class="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-10"></div>
    </div>

    <!-- Stats Section (Optional) -->
    <div class="max-w-4xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 px-4" data-aos="fade-up" data-aos-delay="200">
      <div v-for="(stat, index) in stats" :key="index" class="text-center group">
        <div class="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-600 mb-2 group-hover:scale-110 transition-transform">
          {{ stat.value }}
        </div>
        <div class="text-sm text-slate-500 uppercase tracking-wider">{{ stat.label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Brand logos data
const brandLogos = [
  { src: '/icons/aspel.png', alt: 'Aspel' },
  { src: '/icons/cyberpower.png', alt: 'CyberPower' },
  { src: '/icons/lenovo.png', alt: 'Lenovo' },
  { src: '/icons/hanwha.png', alt: 'Hanwha' },
  { src: '/icons/honeywell.webp', alt: 'Honeywell' },
  { src: '/icons/idis.webp', alt: 'IDIS' },
  { src: '/icons/intel.png', alt: 'Intel' },
  { src: '/icons/kaspersky.png', alt: 'Kaspersky' },
  { src: '/icons/google.png', alt: 'Google' },
  { src: '/icons/logoapc1.png', alt: 'APC' },
  { src: '/icons/NFPA.png', alt: 'NFPA' },
  { src: '/icons/panda.svg', alt: 'Panda Security' },
  { src: '/icons/ubiquiti_networks.png', alt: 'Ubiquiti Networks' }
]

// Stats data
const stats = [
  { value: '50+', label: 'Marcas Asociadas' },
  { value: '15+', label: 'Años de Experiencia' },
  { value: '100%', label: 'Certificaciones' },
  { value: '24/7', label: 'Soporte' }
]

// Animation speed control
const animationSpeed = ref(40)
const speedMultiplier = ref(1)

// Pause on hover functionality
const pauseMarquee = () => {
  speedMultiplier.value = 0
}

const resumeMarquee = () => {
  speedMultiplier.value = 1
}

// Adjust speed based on window width (responsive animation)
const updateAnimationSpeed = () => {
  if (window.innerWidth < 640) {
    animationSpeed.value = 30 // Faster on mobile
  } else if (window.innerWidth < 1024) {
    animationSpeed.value = 35
  } else {
    animationSpeed.value = 40
  }
}

onMounted(() => {
  updateAnimationSpeed()
  window.addEventListener('resize', updateAnimationSpeed)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateAnimationSpeed)
})
</script>

<style scoped>
/* Logo Card Styles */
.logo-card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 1rem;
  padding: 1.5rem 2.5rem;
  height: 6rem;
  min-width: 200px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.logo-card:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 20px 25px -5px rgba(190, 18, 60, 0.2), 0 10px 10px -5px rgba(190, 18, 60, 0.1);
  background: linear-gradient(135deg, #ffffff 0%, #fef2f2 100%);
}

/* Logo Image Wrapper */
.logo-image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.logo-image {
  max-height: 2.5rem;
  width: auto;
  object-fit: contain;
  filter: grayscale(0%) brightness(1);
  transition: filter 0.3s ease, transform 0.3s ease;
}

.logo-card:hover .logo-image {
  filter: grayscale(0%) brightness(1);
  transform: scale(1.1);
}

/* Tooltip */
.logo-tooltip {
  position: absolute;
  bottom: -2.5rem;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: #1e293b;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(190, 18, 60, 0.3);
  pointer-events: none;
  z-index: 20;
}

.logo-tooltip::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #1e293b;
}

.logo-card:hover .logo-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

/* Marquee Animation */
.marquee-wrapper {
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
}

.marquee-track {
  display: flex;
  gap: 1.5rem;
  width: max-content;
  animation: marquee-scroll linear infinite;
  will-change: transform;
}

@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

/* Pause on hover */
.marquee-wrapper:hover .marquee-track {
  animation-play-state: paused;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .logo-card {
    padding: 1rem 1.5rem;
    height: 5rem;
    min-width: 160px;
  }
  
  .logo-image {
    max-height: 2rem;
  }
}

/* Stats animation */
@keyframes countUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stats-item {
  animation: countUp 0.6s ease-out forwards;
}

/* Dark mode optimization */
@media (prefers-color-scheme: dark) {
  .logo-card {
    background: #1e293b;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  }
  
  .logo-card:hover {
    background: linear-gradient(135deg, #1e293b 0%, #2d1a24 100%);
  }
  
  .logo-image {
    filter: brightness(0.9) contrast(1.1);
  }
}
</style>