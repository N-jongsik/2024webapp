<template>
  <div id="map" style="width: 100%; height: 100%"></div>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex"; // Vuex store 사용

let map;

onMounted(() => {
  const store = useStore(); // Vuex store에 접근
  const userData = store.getters.getUserData; // Vuex에서 userData를 가져옴

  var mapContainer = document.getElementById("map"),
    mapOption = {
      center: new kakao.maps.LatLng(37.51215, 127.071976),
      level: 8,
    };

  map = new kakao.maps.Map(mapContainer, mapOption); // 지도 생성

  // Vuex에서 가져온 userData를 사용해 마커를 표시합니다
  var imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

  userData.forEach((location) => {
    var imageSize = new kakao.maps.Size(24, 35);
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    var marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(location.latitude, location.longitude), // Vuex의 state에서 lat, lng 사용
      image: markerImage,
    });

    var content = `
      <div style="padding:5px; font-size:12px;">
        <p><strong>아이디:</strong> ${location.userid}</p>
        <p><strong>이름:</strong> ${location.username}</p>
        <p><strong>주소:</strong> ${location.addr}</p>
        <p><strong>위도:</strong> ${location.latitude}</p>
        <p><strong>경도:</strong> ${location.longitude}</p>
        <p><strong>응원하는 팀:</strong> ${location.team}</p>
      </div>
    `;

    var infowindow = new kakao.maps.InfoWindow({
      content: content, // HTML content
    });
    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    kakao.maps.event.addListener(
      marker,
      "mouseover",
      makeOverListener(map, marker, infowindow)
    );
    kakao.maps.event.addListener(
      marker,
      "mouseout",
      makeOutListener(infowindow)
    );
    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }
  });
});
</script>

<style scoped></style>
