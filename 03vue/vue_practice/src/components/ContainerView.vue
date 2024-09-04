<template>
   <div class="conatiner">
      <h2 class="mb-10">HOT & NEW</h2>
      <div class="cardWrap">
         <div class="card" v-for="(item, i) in data" v-bind:key="i">
            <div class="imgWrap">
               <img :src="`./images/${item.img}`" :alt="`${item.img}`" />
               <div class="hot" v-if="item.hoticon">HOT</div>
            </div>
            <div class="cardBody">
               <h4>{{ item.title }}</h4>
               <p>{{ item.num }}</p>
               <p>{{ item.won }}</p>
            </div>
            <div class="btn" v-on:click="$emit('openModal', i)">상세보기</div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'containerView',
   props: {
      data: Array,
      num: Number,
   },
};
</script>

<style lang="scss" scoped></style>
