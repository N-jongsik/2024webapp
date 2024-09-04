<template>
   <div class="container">
      <!-- input에 들어가 있는 값을 가져올 때 사용 -->
      <!-- <input type="search" @input="inputText = $event.target.value" placeholder="검색어를 입력하세요" /> -->
      <!-- <input type="search" v-model="inputText" placeholder="검색어를 입력하세요" /> -->
      <!-- v-model은 입력할 때 바로 반영 -->
      <!-- <input
         type="search"
         @change="
            $emit('searchMovie',$event.target.value;)
            inputText = $event.target.value;
            $event.target.value = '';
         "
      /> -->
      <!-- @change는 입력하고 엔터를 쳤을 때 반영 -->

      <input type="search" @change="handleSearch" placeholder="검색어를 입력하세요" />
      <button>검색</button>
      <p>{{ inputText }}</p>
   </div>
</template>

<script>
export default {
   name: 'SearchComp',
   data() {
      return {
         inputText: 'test',
      };
   },
   props: {
      data: Object,
   },
   methods: {
      handleSearch(event) {
         this.$emit('searchMovie', event.target.value);
         this.inputText = event.target.value;
         event.target.value = '';
      },
   },
   watch: {
      // watch는 실시간으로 감지 가능
      inputText(name) {
         console.log('watch' + name);
         const findName = this.data.filter(movie => {
            return movie.title.includes(name);
         }); //영화가 있는 지 없는 지 판별, 데이터를 가공할 수 있는 공간이 아님
         console.log(findName);

         console.log(findName.length);
         if (findName.length == 0) {
            alert('영화자료가 없습니다.');
         }
      },
   },
};
</script>

<style lang="scss" scoped></style>
