<template>
  <div
    class="section-separator"
    :class="[
      `variant-${variant}`,
      themeClass,
      spacingClass,
      { 'with-content': $slots.default, 'full-width': fullWidth, animated },
      bgClass,
    ]"
  >
    <!-- Variant 1: Simple Line -->
    <div v-if="variant === 'line'" class="line-separator">
      <div class="line"></div>
    </div>

    <!-- Variant 2: Line with Icon -->
    <div v-else-if="variant === 'icon'" class="icon-separator">
      <div class="line left"></div>
      <div class="icon-wrapper">
        <slot name="icon">
          <svg
            v-if="!$slots.icon"
            class="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        </slot>
      </div>
      <div class="line right"></div>
    </div>

    <!-- Variant 3: Wave Pattern -->
    <div v-else-if="variant === 'wave'" class="wave-separator">
      <svg class="wave" preserveAspectRatio="none" viewBox="0 0 1200 120">
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="wave-fill"
        ></path>
      </svg>
    </div>

    <!-- Variant 4: Triangle Pattern -->
    <div v-else-if="variant === 'triangle'" class="triangle-separator">
      <svg class="triangle" preserveAspectRatio="none" viewBox="0 0 1200 120">
        <polygon points="1200,0 0,0 600,120" class="triangle-fill" />
      </svg>
    </div>

    <!-- Variant 5: Dots Pattern -->
    <div v-else-if="variant === 'dots'" class="dots-separator">
      <div class="dots-container">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>

    <!-- Variant 6: Gradient Line -->
    <div v-else-if="variant === 'gradient'" class="gradient-separator">
      <div class="gradient-line"></div>
    </div>

    <!-- Variant 7: With Text Content -->
    <div v-else-if="variant === 'text'" class="text-separator">
      <div class="line left"></div>
      <div class="text-content">
        <slot>
          <span class="separator-text">Sección</span>
        </slot>
      </div>
      <div class="line right"></div>
    </div>

    <!-- Variant 8: Glowing Line -->
    <div v-else-if="variant === 'glow'" class="glow-separator">
      <div class="glow-line"></div>
    </div>

    <!-- Default: Simple Line -->
    <div v-else class="line-separator">
      <div class="line"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /**
   * Separator variant
   * Options: line, icon, wave, triangle, dots, gradient, text, glow
   */
  variant: {
    type: String,
    default: "line",
    validator: (value) =>
      [
        "line",
        "icon",
        "wave",
        "triangle",
        "dots",
        "gradient",
        "text",
        "glow",
      ].includes(value),
  },

  /**
   * Background color   */
  bg: {
    type: String,
    default: "transparent",
    validator: (value) =>
      ["transparent", "light", "dark", "slate", "rose", "emerald", "blue", "amber"].includes(
        value,
      ),
  },
  /**
   * Options: light, dark, slate, rose, emerald, blue, amber
   */
  theme: {
    type: String,
    default: "slate",
    validator: (value) =>
      ["light", "dark", "slate", "rose", "emerald", "blue", "amber"].includes(
        value,
      ),
  },

  /**
   * Spacing (padding top/bottom)
   */
  spacing: {
    type: String,
    default: "md",
    validator: (value) => ["sm", "md", "lg", "xl", "none"].includes(value),
  },

  /**
   * Full width separator
   */
  fullWidth: {
    type: Boolean,
    default: false,
  },

  /**
   * Animated separator
   */
  animated: {
    type: Boolean,
    default: false,
  },
});

// Theme classes
const themeClass = computed(() => `theme-${props.theme}`);

// Spacing classes
const spacingClass = computed(() => `spacing-${props.spacing}`);

// Background classes
const bgClass = computed(() => `bg-${props.bg}`);
</script>

<style scoped>
/* Base Styles */
.section-separator {
  position: relative;
  width: 100%;
  overflow: hidden;
  --separator-color: #64748b;
  --separator-color-rgb: 100 116 139;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

/* Background Variants */
.bg-transparent {
  background-color: transparent;
}

.bg-light {
  background-color: #f8fafc;
}

.bg-dark {
  background-color: #0f172a;
}

.bg-slate {
  background-color: #1e293b;
}

.bg-rose {
  background-color: #4c0519;
}

.bg-emerald {
  background-color: #022c22;
}

.bg-blue {
  background-color: #172554;
}

.bg-amber {
  background-color: #451a03;
}

/* Spacing Variants */
.spacing-sm {
  padding: 2rem 0;
}

.spacing-md {
  padding: 3rem 0;
}

.spacing-lg {
  padding: 4rem 0;
}

.spacing-xl {
  padding: 6rem 0;
}

.spacing-none {
  padding: 0;
}

/* Full Width */
.section-separator.full-width {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

/* Theme Colors */
.theme-rose {
  --separator-color: #e11d48;
  --separator-color-rgb: 225 29 72;
}

.theme-emerald {
  --separator-color: #10b981;
  --separator-color-rgb: 16 185 129;
}

.theme-blue {
  --separator-color: #3b82f6;
  --separator-color-rgb: 59 130 246;
}

.theme-amber {
  --separator-color: #f59e0b;
  --separator-color-rgb: 245 158 11;
}

.theme-slate {
  --separator-color: #64748b;
  --separator-color-rgb: 100 116 139;
}

.theme-light {
  --separator-color: #ffffff;
  --separator-color-rgb: 255 255 255;
}

.theme-dark {
  --separator-color: #0f172a;
  --separator-color-rgb: 15 23 42;
}

.section-separator .line,
.section-separator .gradient-line,
.section-separator .glow-line {
  background: linear-gradient(90deg, transparent, var(--separator-color), transparent);
}

.section-separator .dot {
  background: var(--separator-color);
}

.section-separator .wave-fill,
.section-separator .triangle-fill {
  fill: var(--separator-color);
}

.section-separator .icon,
.section-separator .separator-text {
  color: var(--separator-color);
}

/* Line Separator */
.line-separator {
  display: flex;
  justify-content: center;
  align-items: center;
}

.line-separator .line {
  width: 100px;
  height: 2px;
  border-radius: 2px;
  transition: width 0.3s ease;
}

.section-separator:hover .line-separator .line {
  width: 150px;
}

/* Icon Separator */
.icon-separator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.icon-separator .line {
  flex: 1;
  height: 1px;
  max-width: 100px;
  transition: max-width 0.3s ease;
}

.icon-separator .icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgb(var(--separator-color-rgb) / 0.1);
  border: 1px solid rgb(var(--separator-color-rgb) / 0.2);
  transition: all 0.3s ease;
}

.icon-separator .icon {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}

.icon-separator:hover .icon-wrapper {
  transform: rotate(180deg) scale(1.1);
  background: rgb(var(--separator-color-rgb) / 0.2);
}

.icon-separator:hover .line {
  max-width: 150px;
}

/* Wave Separator */
.wave-separator {
  position: relative;
  width: 100%;
  height: 60px;
}

.wave-separator .wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.wave-separator .wave-fill {
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.wave-separator:hover .wave-fill {
  opacity: 0.8;
}

/* Triangle Separator */
.triangle-separator {
  position: relative;
  width: 100%;
  height: 60px;
}

.triangle-separator .triangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.triangle-separator .triangle-fill {
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.triangle-separator:hover .triangle-fill {
  opacity: 0.8;
}

/* Dots Separator */
.dots-separator {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dots-container {
  display: flex;
  gap: 0.75rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

.section-separator:hover .dot {
  transform: scale(1.5);
}

/* Gradient Separator */
.gradient-separator {
  display: flex;
  justify-content: center;
  align-items: center;
}

.gradient-line {
  width: 200px;
  height: 3px;
  background: linear-gradient(90deg, transparent, currentColor, transparent);
  border-radius: 3px;
  transition:
    width 0.3s ease,
    opacity 0.3s ease;
}

.section-separator:hover .gradient-line {
  width: 300px;
  opacity: 0.8;
}

/* Text Separator */
.text-separator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.text-separator .line {
  flex: 1;
  height: 1px;
  max-width: 100px;
  transition: max-width 0.3s ease;
}

.text-separator .text-content {
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  white-space: nowrap;
}

.separator-text {
  transition: all 0.3s ease;
}

.section-separator:hover .separator-text {
  letter-spacing: 0.2em;
}

.section-separator:hover .text-separator .line {
  max-width: 150px;
}

/* Glow Separator */
.glow-separator {
  display: flex;
  justify-content: center;
  align-items: center;
}

.glow-line {
  width: 150px;
  height: 4px;
  border-radius: 4px;
  color: var(--separator-color);
  box-shadow: 0 0 20px currentColor;
  transition:
    width 0.3s ease,
    box-shadow 0.3s ease;
}

.section-separator:hover .glow-line {
  width: 250px;
  box-shadow: 0 0 30px currentColor;
}

/* Animations */
.section-separator.animated .line,
.section-separator.animated .gradient-line,
.section-separator.animated .glow-line {
  animation: pulse 2s infinite;
}

.section-separator.animated .dot {
  animation: bounce 1s infinite;
}

.section-separator.animated .icon-wrapper {
  animation: spin 10s linear infinite;
}

.section-separator.animated .wave-fill,
.section-separator.animated .triangle-fill {
  animation: wave 5s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.5;
    width: 100px;
  }
  50% {
    opacity: 1;
    width: 150px;
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes wave {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* Responsive */
@media (max-width: 640px) {
  .spacing-sm {
    padding: 1rem 0;
  }
  .spacing-md {
    padding: 2rem 0;
  }
  .spacing-lg {
    padding: 3rem 0;
  }
  .spacing-xl {
    padding: 4rem 0;
  }

  .text-separator {
    gap: 1rem;
  }

  .text-separator .text-content {
    font-size: 0.75rem;
  }

  .icon-separator .icon-wrapper {
    width: 36px;
    height: 36px;
  }

  .icon-separator .icon {
    width: 18px;
    height: 18px;
  }
}
</style>
