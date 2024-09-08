<template>
  <div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="userid"
        v-model="userData.userid"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="password"
        v-model="userData.password"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="username"
        v-model="userData.username"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="addr"
        v-model="userData.addr"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="favorite-team"
        v-model="userData.team"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="latitude"
        v-model="userData.latitude"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="longitude"
        v-model="userData.longitude"
      />
    </div>
    <div class="input-group mb-3">
      <input
        type="file"
        class="form-control"
        id="fileform"
        @change="handleImage"
        accept="image/*"
      />
      <label class="input-group-text" for="fileform">이미지 Upload</label>
    </div>
    <div class="input-group mb-3">
      <input
        type="file"
        class="form-control"
        id="videoform"
        @change="handleVideo"
        accept="video/*"
      />
      <label class="input-group-text" for="fileform">동영상 Upload</label>
    </div>
    <div class="btn btn-primary" @click="addUser">회원가입</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const userData = ref({
  userid: null,
  password: null,
  username: null,
  addr: null,
  image: null,
});

const clearform = () => {
  userData.value.userid = null;
  userData.value.password = null;
  userData.value.username = null;
  userData.value.addr = null;
};

const addUser = () => {
  let uData = {
    userid: userData.value.userid,
    password: userData.value.password,
    username: userData.value.username,
    addr: userData.value.addr,
    image: userData.value.image,
  };
  store.commit("addUser", uData);
  clearform();
};

const handleImage = (e) => {
  const file = e.target.files[0];
  console.log(file);
  if (file) {
    userData.value.image = URL.createObjectURL(file);
  }
};

const handleVideo = (e) => {
  const file = e.target.files[0];
  console.log(file);
  if (file) {
    userData.value.video = URL.createObjectURL(file);
  }
};
</script>

<style lang="scss" scoped></style>
