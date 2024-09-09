<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h3 class="lst">야구 동아리 회원리스트</h3>
        <UserListView />
      </div>
      <div class="col-md-6">
        <h3 class="lst-sign">야구동아리 회원가입</h3>
        <UserSignView />
      </div>
    </div>
  </div>
</template>

<script setup>
import UserListView from "../components/user/UserListView.vue";
import UserSignView from "../components/user/UserSignView.vue";
</script>

<style lang="scss" scoped>
.lst {
  margin-left: 2em;
  margin-top: 1em;
}
.lst-sign {
  margin-bottom: 1em;
  margin-top: 1em;
}
</style>
