<template>
   <NavbarView />
   <SearchBarView :data="data_temp" @searchMovie="searchMovie" />
   <div class="container">
      <button @click="showAllView">전체보기</button>
   </div>
   <ContainerView :data="data_temp" :num="selectedNum" @openModal="modalOpen" @increaseLike="increaseLike($event)" />
   <ModalView :data="data" :isModal="isModal" :num="selectedNum" @closeModal="isModal = false" />
</template>

<script>
import mdata from './assets/mdata';
import NavbarView from './components/NavbarView.vue';
import ModalView from './components/ModalView.vue';
import ContainerView from './components/ContainerView.vue';
import SearchBarView from './components/SearchBarView.vue';

export default {
   name: 'appView',
   data() {
      return {
         data: mdata, //기존의 data
         isModal: false,
         selectedNum: 0,
         data_temp: [...mdata], //변형된 data
      };
   },
   methods: {
      increaseLike(i) {
         console.log(i);
         this.data[i].like += 1;
      },
      modalOpen(num) {
         this.isModal = true;
         this.selectedNum = num;
      },
      closeM() {
         this.isModal = false;
      },
      searchMovie(title) {
         console.log('영화이름 : ' + title);
         this.data_temp = this.data.filter(movie => {
            return movie.title.includes(title);
         });
      },
      showAllView() {
         this.data_temp = [...this.data];
      },
   },
   components: {
      NavbarView: NavbarView,
      ModalView: ModalView,
      ContainerView: ContainerView,
      SearchBarView: SearchBarView,
   },
};
</script>

<style lang="scss">
$radius: 5px;
.container {
   width: 1000px;
   margin: 0 auto;

   @media screen and (max-width: 790px) {
      width: 100%;
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
      width: calc((100% - 40px) / 5);
      // width: 25%;

      @media screen and (max-width: 790px) {
         width: calc((100% - 10px) / 2);
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
            padding: 2px 10px;
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
      background-color: greenyellow;
   }
}
</style>
