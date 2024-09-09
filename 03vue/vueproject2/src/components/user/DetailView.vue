<template>
  <div class="container mt-5">
    <div class="row">
      <div class="card p-3 col-md-6 mb-5">
        <h5 class="card p-3" v-if="item">아이디 : {{ item.userid }}</h5>
        <h5 class="card p-3" v-if="item">이름 : {{ item.username }}</h5>
        <h5 class="card p-3" v-if="item">주소 : {{ item.addr }}</h5>
        <h5 class="card p-3" v-if="item">응원 team : {{ item.team }}</h5>
        <MapView :latitude="item.latitude" :longitude="item.longitude" />
      </div>
      <div class="col-md-6">
        <h5 class="card p-3 mb-5 text-center" v-if="item">
          {{ item.team }} 최고의 순간
        </h5>
        <iframe
          width="100%"
          height="315"
          :src="item.video"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import MapView from "./MapView.vue";

// Vuex store와 route 가져오기
const store = useStore();
const route = useRoute();

// 라우트의 num 파라미터에 해당하는 아이템 찾기
const item = computed(() => {
  // const id = parseInt(route.params.num); // 라우트에서 num을 정수로 변환
  const userid = route.params.userid;
  return store.state.userData.find((user) => user.userid === userid); // Vuex의 userData에서 일치하는 id 찾기
});

console.log(item.value);
</script>

<style lang="scss" scoped></style>
