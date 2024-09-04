<template>
   <NavbarView />
   <ContainerView :data="data" :num="selectedNum" @openModal="modalOpen" />
</template>

<script>
import NavbarView from './components/NavbarView.vue';
import ContainerView from './components/ContainerView.vue';
import mdata from './assets/mdata';
export default {
   name: 'appView',
   data() {
      return {
         data: mdata,
         isModal: false,
      };
   },
   methods: {
      modalOpen(num) {
         this.isModal = true;
         this.selectedNum = num;
      },
   },
   components: {
      NavbarView: NavbarView,
      ContainerView: ContainerView,
   },
};
</script>

<style lang="scss" scoped>
.mb-10 {
   margin-bottom: 10px !important;
}

.container {
   width: 1000px;
   margin: 0 auto;
   @media screen and(max-width:790px) {
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
         border-radius: 5px;
         img {
            width: 100%;
            transition: 0.3s;
         }
         &:hover {
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
      .btn {
         background: pink;
         border-radius: 5px;
         padding: 5px 16px;
         text-align: center;
         cursor: pointer;
         color: white;
         border: 0 none;
         display: block;
         width: 100%;
      }
   }
}
</style>
