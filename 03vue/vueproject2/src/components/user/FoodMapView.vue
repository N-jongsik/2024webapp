<template>
  <div>지도 {{ moveLat }} / {{ moveLng }}</div>
  <div id="map" style="width: 500px; height: 400px"></div>

  {{ latitude }}{{ longitude }}
</template>

<script setup>
import { onMounted, ref, defineEmits } from "vue";
import { watch } from "vue";

const latitude = ref(0);
const longitude = ref(0);

const moveLat = ref(0);
const moveLng = ref(0);

const emit = defineEmits(["update-latlng"]);

onMounted(() => {
  if (!("geolocation" in navigator)) {
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      console.log(pos.coords.latitude, pos.coords.longitude);

      latitude.value = pos.coords.latitude;
      longitude.value = pos.coords.longitude;

      //   initMap();

      if (window.kakao && window.kakao.maps) {
        initMap();
      } else {
        const script = document.createElement("script");
        /* global kakao */
        script.onload = () => kakao.maps.load(initMap);
        script.src =
          "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=98903d767dc464fe61bc5b5b5f312b0c";
        document.head.appendChild(script);
      }
    },
    (err) => {
      alert(err.message);
    }
  );
});

const initMap = () => {
  const container = document.getElementById("map");
  let options = {
    center: new kakao.maps.LatLng(latitude.value, longitude.value),
    level: 3,
  };

  let map = new kakao.maps.Map(container, options);

  var markerPosition = new kakao.maps.LatLng(latitude.value, longitude.value);
  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);

  //지도 중심좌표
  kakao.maps.event.addListener(map, "center_changed", function () {
    var latlng = map.getCenter();

    moveLat.value = latlng.getLat();
    moveLng.value = latlng.getLng();
  });
};
// watch를 사용해 moveLat 또는 moveLng 값이 변할 때 이벤트를 emit
watch([moveLat, moveLng], () => {
  // 부모 컴포넌트로 이벤트 전송
  emit("update-latlng", { lat: moveLat.value, lng: moveLng.value });
});
</script>

<style lang="scss" scoped></style>
