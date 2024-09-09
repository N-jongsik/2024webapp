<template>
  <div class="container pb-5 pt-5">
    <h5>맛집 검색</h5>
    <input
      id="keyword"
      v-model="keyword"
      placeholder="검색어를 입력하세요"
      @keyup.enter="searchPlaces"
    />
    <button @click="searchPlaces" class="mb-3">검색</button>
    <div id="map" style="width: 100%; height: 350px"></div>
    <div id="menu_wrap">
      <ul id="placesList"></ul>
      <div id="pagination"></div>
    </div>
  </div>
  <div class="container portfolio">
    <h2 class="text-center conTitle m-3">야구장 먹거리 추천</h2>
    <div class="btn-group mb-3">
      <button data-filter="" class="btn btn-primary active" id="btn">
        ALL
      </button>
      <button data-filter=".LG" class="btn btn-primary">LG</button>
      <button data-filter=".Kiwoom" class="btn btn-primary">Kiwoom</button>
      <button data-filter=".KIA" class="btn btn-primary">KIA</button>
      <button data-filter=".Lotte" class="btn btn-primary">Lotte</button>
    </div>
    <div class="row view">
      <div class="col-6 col-lg-3 element-item LG mb-3">
        <a href="https://blog.naver.com/jung_taste/223151325876"
          ><img
            src="../assets/images/servicos/food1.jpg"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-6 col-lg-3 element-item Kiwoom mb-3">
        <a href="https://blog.naver.com/eunjeong178/223411762392"
          ><img
            src="../assets/images/servicos/food4.jpg"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-6 col-lg-3 element-item KIA mb-3">
        <a href="https://blog.naver.com/vhdpqj457/223464817026"
          ><img
            src="../assets/images/servicos/food6.jpg"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-6 col-lg-3 element-item Lotte mb-3">
        <a href="https://blog.naver.com/koreaeverywhere/223434907104"
          ><img
            src="../assets/images/servicos/food7.jpg"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-6 col-lg-3 element-item LG mb-3">
        <a href="https://blog.naver.com/thereissummer/222848254070"
          ><img
            src="../assets/images/servicos/food2.jpg"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-6 col-lg-3 element-item LG mb-3">
        <a href="https://blog.naver.com/songpamatgol/220964195595"
          ><img
            src="../assets/images/servicos/food3.jpg"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-6 col-lg-3 element-item Lotte mb-3">
        <a href="https://blog.naver.com/everyrule/223446264394"
          ><img
            src="../assets/images/servicos/food8.jpg"
            alt=""
            class="img-fluid"
        /></a>
      </div>
      <div class="col-6 col-lg-3 element-item Kiwoom mb-3">
        <a href="https://blog.naver.com/psalmuah/223113338032s"
          ><img
            src="../assets/images/servicos/food5.jpg"
            alt=""
            class="img-fluid"
        /></a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const keyword = ref(""); // 검색어
const map = ref(null); // 지도 객체
const infowindow = ref(null); // 인포윈도우 객체
let markers = []; // 마커 배열

onMounted(() => {
  const btns = window.$(".portfolio .btn-group button");

  btns.click(function () {
    let i = window.$(this).index();
    console.log(i);

    btns.removeClass("active"); // 기존 active 클래스 제거
    btns.eq(i).addClass("active"); // 클릭한 버튼에 active 클래스 추가

    let selector = btns.eq(i).attr("data-filter");
    console.log(selector);

    window.$(".portfolio .view").isotope({
      filter: selector,
    });
  });

  // 지도 생성
  const mapContainer = document.getElementById("map");
  const mapOption = {
    center: new kakao.maps.LatLng(37.51215, 127.071976),
    level: 3,
  };

  map.value = new kakao.maps.Map(mapContainer, mapOption); // 지도 생성
  infowindow.value = new kakao.maps.InfoWindow({ zIndex: 1 });
});

// 장소 검색 함수
const searchPlaces = () => {
  const ps = new kakao.maps.services.Places(); // 장소 검색 객체 생성

  if (!keyword.value.trim()) {
    alert("키워드를 입력해주세요!");
    return;
  }

  ps.keywordSearch(keyword.value, placesSearchCB); // 키워드로 장소 검색
};

// 검색 완료 후 콜백 함수
const placesSearchCB = (data, status, pagination) => {
  if (status === kakao.maps.services.Status.OK) {
    displayPlaces(data);
    displayPagination(pagination);
  } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
    alert("검색 결과가 존재하지 않습니다.");
  } else if (status === kakao.maps.services.Status.ERROR) {
    alert("검색 중 오류가 발생했습니다.");
  }
};

// 장소 목록과 마커를 표시하는 함수
const displayPlaces = (places) => {
  const listEl = document.getElementById("placesList");
  const bounds = new kakao.maps.LatLngBounds();

  removeAllChildNodes(listEl);
  removeMarkers();

  const fragment = document.createDocumentFragment();

  places.forEach((place, i) => {
    const placePosition = new kakao.maps.LatLng(place.y, place.x);
    const marker = addMarker(placePosition, i);
    const itemEl = getListItem(i, place);

    bounds.extend(placePosition);

    // 마커 및 리스트 항목 이벤트 처리
    kakao.maps.event.addListener(marker, "mouseover", () => {
      displayInfowindow(marker, place.place_name);
    });

    kakao.maps.event.addListener(marker, "mouseout", () => {
      infowindow.value.close();
    });

    itemEl.onmouseover = () => {
      displayInfowindow(marker, place.place_name);
    };

    itemEl.onmouseout = () => {
      infowindow.value.close();
    };

    fragment.appendChild(itemEl);
  });

  listEl.appendChild(fragment);
  map.value.setBounds(bounds);
};

// 검색 결과 리스트 항목 생성
const getListItem = (index, place) => {
  const el = document.createElement("li");
  let itemStr = `<span class="markerbg marker_${
    index + 1
  }"></span><div class="info"><h5>${place.place_name}</h5>`;

  if (place.road_address_name) {
    itemStr += `<span>${place.road_address_name}</span><span class="jibun gray">${place.address_name}</span>`;
  } else {
    itemStr += `<span>${place.address_name}</span>`;
  }

  itemStr += `<span class="tel">${place.phone}</span></div>`;
  el.innerHTML = itemStr;
  el.className = "item";

  return el;
};

// 마커 추가 함수
const addMarker = (position, idx) => {
  const imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png";
  const imageSize = new kakao.maps.Size(36, 37);
  const imgOptions = {
    spriteSize: new kakao.maps.Size(36, 691),
    spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10),
    offset: new kakao.maps.Point(13, 37),
  };
  const markerImage = new kakao.maps.MarkerImage(
    imageSrc,
    imageSize,
    imgOptions
  );
  const marker = new kakao.maps.Marker({
    position,
    image: markerImage,
  });

  marker.setMap(map.value);
  markers.push(marker);

  return marker;
};

// 마커 삭제
const removeMarkers = () => {
  markers.forEach((marker) => marker.setMap(null));
  markers = [];
};

// 페이지네이션 표시
const displayPagination = (pagination) => {
  const paginationEl = document.getElementById("pagination");
  const fragment = document.createDocumentFragment();

  removeAllChildNodes(paginationEl);

  for (let i = 1; i <= pagination.last; i++) {
    const el = document.createElement("a");
    el.href = "#";

    if (i === pagination.current) {
      el.className = "on";
    } else {
      el.onclick = () => {
        pagination.gotoPage(i);
      };
    }

    fragment.appendChild(el);
  }

  paginationEl.appendChild(fragment);
};

// 인포윈도우 표시
const displayInfowindow = (marker, title) => {
  const content = `<div style="padding:5px;z-index:1;">${title}</div>`;
  infowindow.value.setContent(content);
  infowindow.value.open(map.value, marker);
};

// 검색 결과 리스트 초기화
const removeAllChildNodes = (el) => {
  while (el.hasChildNodes()) {
    el.removeChild(el.lastChild);
  }
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 350px;
}
.item {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
.on {
  font-weight: bold;
}
</style>
