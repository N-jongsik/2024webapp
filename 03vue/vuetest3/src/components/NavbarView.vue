<template>
  <nav class="navbar">
    <div class="toggle">
      <i class="fa-solid fa-bars-staggered"></i>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  background: white;
  padding: 20px;
  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  .toggle {
    margin-left: auto;
    // background: skyblue;
    display: flex;
    width: 36px;
    height: 36px;
    justify-content: center;
    align-items: center;
  }
}
</style>
