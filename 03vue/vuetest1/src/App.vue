<!-- 여기에 html 작성 -->
<template>
   <NavbarView></NavbarView>
   <div>
      <div class="container">
         <h2 class="mb-10">HOT & NEW</h2>
         <div class="cardWrap">
            <div class="card" v-for="(item, i) in data" v-bind:key="i">
               <div class="imgWrap">
                  <img :src="`./images/${item.img}`" :alt="`${item.img}`" />
                  <div class="hot" v-if="item.hoticon">HOT</div>
               </div>
               <div class="cardBody">
                  <h4>{{ item.title }}</h4>
                  <p>❤️ {{ item.num }}</p>
                  <p>대여 {{ item.won }}</p>
                  <p>👍{{ item.like }} <button @:click="increaseLike(i)">클릭</button></p>
                  <!-- 클릭을 하면 increaseLike함수 호출  @==v-on-->
               </div>
               <div class="btn btn-primary" v-on:click="modalOpen(i)">상세보기</div>
            </div>
         </div>
      </div>
      <div class="modal" v-if="isModal">
         <div class="inner">
            <h2 class="mb-10">{{ data[selectedNum].title }}</h2>
            <hr class="mb-10" />
            <p class="mb-10">{{ data[selectedNum].detail }}</p>
            <button class="btn btn-primary" v-on:click="isModal = false">닫기</button>
         </div>
      </div>
   </div>
</template>

<script>
import mdata from './assets/mdata';
import NavbarView from './components/NavbarView.vue'; //파일 만들고 import 등록하고 components에 추가하고

export default {
   name: 'appView',
   data() {
      return {
         data: mdata,
         isModal: false,
         selectedNum: 0,
      };
   },
   methods: {
      increaseLike(i) {
         console.log(i);
         this.data[i].like += 1;
         // 클릭을 하면 해당 영화 좋아요 갯수 +1
      },
      modalOpen(num) {
         this.isModal = true;
         this.selectedNum = num;
      },
   },
   components: {
      NavbarView: NavbarView,
   },
};
</script>

<style lang="scss">
//여기에 css작성
$radius: 5px; //기본적으로 10px안으로만
.container {
   width: 1000px;

   margin: 0 auto;

   @media screen and (max-width: 790px) {
      width: 100%;
      // 화면이 늘어났을 때는 1000px, 화면이 790px미만이 되면 width:100%로 사용
      padding: 0 16px;
   }
   img {
      display: block;
   }
}
.cardWrap {
   display: flex;
   flex-wrap: wrap;
   gap: 10px;
   .card {
      // width: 25%;
      width: calc((100%-30px) / 4); //4개의 화면으로 한 줄 나누면 gap은 총 3개가 들어가서 10px * 3 = 30px

      @media screen and (max-width: 790px) {
         width: calc((100%-10px) / 2);
      }

      @media screen and (max-width: 560px) {
         width: 100%;
      }
      .imgWrap {
         width: 100%;
         position: relative;
         overflow: hidden;
         cursor: pointer;
         border-radius: $radius;
         img {
            width: 100%;
            transition: 0.3s;
         }

         &:hover img {
            transform: scale(1.1);
         }

         .hot {
            position: absolute;
            top: 10px;
            left: 10px;
            background-color: skyblue;
            padding: 5px 10px;
            border-radius: 5px;
            font-weight: bold;
            color: white;
         }
      }
   }
}
.mb-10 {
   margin-bottom: 10px !important;
}
.btn {
   background: pink;
   border-radius: $radius;
   padding: 5px 16px;
   text-align: center;
   cursor: pointer;
   color: white;
   border: 0 none;
   display: block;
   width: 100%;

   &.btn-primary {
      background-color: skyblue;
   }
   &.btn-info {
      background-color: green;
   }
}

.modal {
   position: fixed; //크기 값이 항상 있어야 함
   background-color: rgba(0, 0, 0, 0.3);
   // width: 100%;
   // height: 100%;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   .inner {
      background: white;
      width: 400px;
      padding: 16px 16px;
      border-radius: $radius;
      @media screen and (max-width: 570px) {
         width: 90%;
      }
   }
}
</style>
