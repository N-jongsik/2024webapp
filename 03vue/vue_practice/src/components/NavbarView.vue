<template>
   <div class="conWrap">
      <div class="container menu">
         <a href="#" class="on">영화</a>
         <a href="#" class="on">방송</a>
         <a href="#" class="on">랭킹</a>
         <a href="#" class="on">무료</a>
         <a href="#" class="on">이벤트</a>
         <a href="#" class="on">멤버십</a>
      </div>
   </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.conWrap {
   width: 100%;
   border-bottom: 1px solid #333;
   padding: 16px 0;
   .menu {
      display: flex;
      a {
         display: block;
         background-color: pink;
         padding-right: 40px;
         margin-right: 5px;
         position: relative;
         padding: 16px 0;
      }
      @media screen and (max-width: 560px) {
         padding-right: 15px;
      }
      a:hover::after {
         content: '';
         background-color: green;
         position: absolute;
         width: 50px;
         height: 5px;
         bottom: 19px;
         left: 0;
      }
   }
}
</style>
