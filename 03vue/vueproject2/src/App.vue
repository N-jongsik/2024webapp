<template>
  <NavBarView />
  <router-view :data="userDataStore" />
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import NavBarView from "./components/NavBarView.vue";

const store = useStore();
const userDataStore = computed(() => store.state.userData);
</script>

<style lang="scss" scoped></style>
