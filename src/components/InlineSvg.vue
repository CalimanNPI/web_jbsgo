<template>
  <div class="inline-svg" v-html="svgMarkup"></div>
</template>

<script setup>
import { ref, watch } from 'vue'
import DOMPurify from 'dompurify'

const props = defineProps({
  src: {
    type: String,
    required: true
  }
})

const svgMarkup = ref('')

const isSafeSvgSource = (source) => {
  try {
    const resolved = new URL(source, window.location.origin)
    return resolved.origin === window.location.origin && resolved.pathname.toLowerCase().endsWith('.svg')
  } catch {
    return false
  }
}

watch(
  () => props.src,
  async (newSrc) => {
    if (!newSrc) {
      svgMarkup.value = ''
      return
    }

    if (!isSafeSvgSource(newSrc)) {
      console.warn(`Bloqueado SVG no seguro: ${newSrc}`)
      svgMarkup.value = ''
      return
    }

    try {
      const response = await fetch(newSrc, { credentials: 'same-origin' })
      if (!response.ok) {
        throw new Error(`No se pudo cargar ${newSrc}`)
      }

      const rawSvg = await response.text()
      svgMarkup.value = DOMPurify.sanitize(rawSvg, {
        USE_PROFILES: { svg: true, svgFilters: true }
      })
    } catch (error) {
      console.error(error)
      svgMarkup.value = ''
    }
  },
  { immediate: true }
)
</script>

<style scoped>
.inline-svg :deep(svg) {
  width: 100%;
  height: auto;
  display: block;
}
</style>
