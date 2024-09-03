<template>
   <div class="conWrap mb-10">
      <div class="container menu">
         <a href="#" class="on">영화</a>
         <a href="#">방송</a>
         <a href="#">랭킹</a>
         <a href="#">무료</a>
         <a href="#">이벤트</a>
         <a href="#">멤버십</a>
      </div>
   </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.conWrap {
   width: 100%;
   border-bottom: 1px solid #888;
   padding: 16px 0;
}

.menu {
   display: flex;
   a {
      display: block;
      //   background: pink;
      margin-right: 5px;
      padding-right: 40px;
      font-weight: bold;
      position: relative;
      padding: 16px 0;
      padding-right: 40px;
   }
   @media screen and (max-width: 560px) {
      padding-right: 15px;
   }

   a.on::after,
   a:hover::after {
      content: '';
      //   display: block;
      position: absolute;
      width: 50px;
      height: 5px;
      background-color: green;
      bottom: -19px;
      left: 0;
   }
}
</style>
