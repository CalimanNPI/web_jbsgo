<script setup>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import Contact from "./components/Contact.vue";

</script>

<template>
  <Navbar />
  <main class="bg-white z-0">
    <Transition name="fade" mode="out-in">
      <RouterView />
    </Transition>
  </main>
  <Contact />
  <Footer />
</template>

<style>
</style>
