<template>
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
import { onMounted } from "vue";

onMounted(() => {
  // 버튼 필터링 기능
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
});
</script>

<style lang="scss" scoped></style>
