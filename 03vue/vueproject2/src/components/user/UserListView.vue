<template>
  <div
    v-for="(item, i) in $store.state.userData"
    :key="i"
    class="card d-flex gap-3 border rounded p-3 mb-3 justify-content-between"
  >
    <div class="avata">
      <img :src="item.image" alt="user image" />
    </div>
    <div class="user-info">
      <h3>아이디: {{ item.userid }}</h3>
      <h3>이름: {{ item.username }}</h3>
    </div>
    <div>
      <router-link
        :to="`/user/${item.id}`"
        class="nav-link pt-3 pb-3 bg-primary text-white"
        >상세보기</router-link
      >
      <button @click="deleteUser(item.id)" class="btn btn-danger">삭제</button>
      <button @click="editUser(item)" class="btn btn-warning">수정</button>
    </div>
  </div>
  <div v-if="editMode">
    <h2>사용자 수정</h2>
    <input v-model="editedUser.username" placeholder="이름 수정" />
    <button @click="confirmEdit" class="btn btn-primary">수정 확인</button>
    <button @click="cancelEdit" class="btn btn-secondary">취소</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

// 수정 모드 관련 상태 관리
const editMode = ref(false);
const editedUser = ref({});

// 삭제 기능
const deleteUser = (id) => {
  alert("해당회원을 삭제하시겠습니까?");
  store.commit("deleteUser", id);
};

// 수정 기능 시작
const editUser = (user) => {
  editedUser.value = { ...user }; // 수정할 사용자 정보 복사
  editMode.value = true; // 수정 모드 활성화
};

// 수정 확인
const confirmEdit = () => {
  store.commit("updateUser", editedUser.value); // Vuex에 수정 사항 저장
  editMode.value = false; // 수정 모드 비활성화
};

// 수정 취소
const cancelEdit = () => {
  editMode.value = false; // 수정 모드 비활성화
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
}

.nav-link {
  display: inline-block;
  width: 100%;
  text-align: center;
  background-color: #3498db;
  color: #fff;
  padding: 10px 0;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
}
button {
  margin-top: 10px;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-danger {
  background-color: #e74c3c;
  color: #fff;

  &:hover {
    background-color: #c0392b;
  }
}

.btn-warning {
  background-color: #f39c12;
  color: #fff;

  &:hover {
    background-color: #e67e22;
  }
}

.user-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h3 {
  margin: 0;
  font-weight: bold;
}

h3:first-child {
  color: #333;
  margin-bottom: 5px;
}

.avata {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
}
</style>
