<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary p-3">
    <div class="container">
      <router-link class="navbar-brand" to="/"
        ><img src="../assets/images/logo-opera.svg" alt=""
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/user">USER</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/map">MAP</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped></style>
