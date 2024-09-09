<template>
  <div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="아이디"
        v-model="userData.userid"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="비밀번호"
        v-model="userData.password"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="이름"
        v-model="userData.username"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="주소"
        v-model="userData.addr"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="위도"
        v-model="userData.latitude"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="경도"
        v-model="userData.longitude"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="응원하는 팀"
        v-model="userData.team"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="응원하는 팀 영상 url"
        v-model="userData.video"
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
    <div class="btn btn-primary mb-5" @click="addUser">회원가입</div>
  </div>
  <FoodMapView />
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import FoodMapView from "./FoodMapView.vue";

const store = useStore();

const userData = ref({
  userid: null,
  password: null,
  username: null,
  addr: null,
  latitude: null,
  longitude: null,
  team: null,
  image: null,
  video: null,
});

const clearform = () => {
  userData.value.userid = null;
  userData.value.password = null;
  userData.value.username = null;
  userData.value.addr = null;
  userData.value.latitude = null;
  userData.value.longitude = null;
  userData.value.team = null;
  userData.value.image = null;
};

const addUser = () => {
  let uData = {
    userid: userData.value.userid,
    password: userData.value.password,
    username: userData.value.username,
    addr: userData.value.addr,
    image: userData.value.image,
    latitude: parseFloat(userData.value.latitude),
    longitude: parseFloat(userData.value.longitude),
    team: userData.value.team,
    video: userData.value.video,
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
</script>

<style lang="scss" scoped></style>
