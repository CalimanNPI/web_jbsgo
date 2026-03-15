<script setup>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import Contact from "./components/Contact.vue";
import Icons from "./components/Icons.vue";
import SectionSeparator from "./components/SectionSeparator.vue";
</script>

<template>
  <Navbar />
  <Transition>
    <RouterView />
  </Transition>
  <Icons />
  <SectionSeparator variant="gradient" theme="rose" spacing="sm" bg="dark" :animated="true"/>

  <Contact />
  <Footer />
</template>

<style></style>
