<template>
  <NavbarView />
  <!-- <HomeView />
  <AboutView />
  <PortfolioView /> -->
  <router-view />
</template>

<script setup>
import AboutView from "./components/AboutView.vue";
import HomeView from "./components/HomeView.vue";
import NavbarView from "./components/NavbarView.vue";
import PortfolioView from "./components/PortfolioView.vue";
</script>

<style lang="scss" scoped></style>
