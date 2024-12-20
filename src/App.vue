<script setup>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import Contact from "./components/Contact.vue";
import Icons from "./components/Icons.vue";

</script>

<template>
  <Navbar />
  <main class="bg-white z-0">
    <Transition>
      <RouterView />
    </Transition>
  </main>
  <Icons />
  <Contact />
  <Footer />
</template>

<style>
</style>
