<template>
  <div class="inline-svg" v-html="svgMarkup"></div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  }
})

const svgMarkup = ref('')

watch(
  () => props.src,
  async (newSrc) => {
    if (!newSrc) {
      svgMarkup.value = ''
      return
    }

    try {
      const response = await fetch(newSrc)
      if (!response.ok) {
        throw new Error(`No se pudo cargar ${newSrc}`)
      }

      svgMarkup.value = await response.text()
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
