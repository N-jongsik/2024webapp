<template>
  <div class="container mt-5">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias expedita
    repudiandae doloribus unde itaque hic eligendi repellat. Eos, obcaecati
    similique.
  </div>
  <h1>{{ $route.params }} / {{ $route.name }}</h1>
  <hr />
  <h2>{{ $route }}</h2>
  <div class="btn btn-primary" @click="$router.push({ name: home })">home</div>
</template>

<script setup>
const props = defineProps({
  data: Array,
});
</script>

<style lang="scss" scoped></style>
