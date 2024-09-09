<template>
  <div id="map" style="width: 100%; height: 400px"></div>
</template>

<script setup>
import { onMounted, ref, defineProps } from "vue";

// Props를 정의합니다
const props = defineProps({
  latitude: {
    type: Number,
    default: 0,
  },
  longitude: {
    type: Number,
    default: 0,
  },
});

const moveLat = ref(props.latitude);
const moveLng = ref(props.longitude);

onMounted(() => {
  if (!("geolocation" in navigator)) {
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      console.log(pos.coords.latitude, pos.coords.longitude);

      moveLat.value = pos.coords.latitude;
      moveLng.value = pos.coords.longitude;

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
    center: new kakao.maps.LatLng(props.latitude, props.longitude),
    level: 3,
  };

  let map = new kakao.maps.Map(container, options);

  var markerPosition = new kakao.maps.LatLng(props.latitude, props.longitude);

  var imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

  // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
  var markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    ),
    markerPosition = new kakao.maps.LatLng(props.latitude, props.longitude); // 마커가 표시될 위치입니다

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage, // 마커이미지 설정
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);

  // 지도 중심좌표
  kakao.maps.event.addListener(map, "center_changed", function () {
    var latlng = map.getCenter();

    moveLat.value = latlng.getLat();
    moveLng.value = latlng.getLng();
  });
};
</script>

<style lang="scss" scoped></style>
