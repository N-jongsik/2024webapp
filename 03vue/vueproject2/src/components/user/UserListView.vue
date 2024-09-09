<template>
  <div class="card-container">
    <div
      v-for="(item, i) in $store.state.userData"
      :key="i"
      class="card d-flex gap-3 border rounded p-5 m-5 justify-content-between"
    >
      <router-link
        :to="`/user/${item.userid}`"
        class="d-flex gap-3"
        style="text-decoration: none; color: black"
      >
        <div class="avata">
          <img :src="item.image" alt="user image" />
        </div>
        <div class="user-info">
          <h5>아이디: {{ item.userid }}</h5>
          <h5>이름: {{ item.username }}</h5>
        </div>
      </router-link>
      <div>
        <button @click="deleteUser(item.userid)" class="sbtn bt1">삭제</button>
        <button @click="editUser(item)" class="sbtn bt2">수정</button>
      </div>
    </div>
    <div class="modal-wrap" v-if="editMode">
      <div class="col-md-6 modal-container">
        <div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="아이디"
              :v-model="editedUser.userid"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="비밀번호"
              :v-model="editedUser.password"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="이름"
              :v-model="editedUser.username"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="주소"
              :v-model="editedUser.addr"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="위도"
              :v-model="editedUser.latitude"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="경도"
              :v-model="editedUser.longitude"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="응원하는 팀"
              :v-model="editedUser.team"
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="file"
              class="form-control"
              id="fileform"
              @change="handleImage"
              accept="image/*"
            />
            <label class="input-group-text" for="fileform">이미지 Upload</label>
          </div>
        </div>
        <div class="row modal-btn">
          <button @click="confirmEdit" class="btn btn-primary">
            수정 확인
          </button>
          <button @click="cancelEdit" class="btn btn-secondary">취소</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

// 수정 모드 관련 상태 관리
const editMode = ref(false);
// const editedUser = ref({});
const editedUser = ref({});

// 삭제 기능
const deleteUser = (userid) => {
  alert("해당회원을 삭제하시겠습니까?");
  store.commit("deleteUser", userid);
};

// 수정 기능 시작
const editUser = (user) => {
  editedUser.value = { ...user }; // 수정할 사용자 정보 복사
  editMode.value = true; // 수정 모드 활성화
};

// 이미지 파일 처리
const handleImage = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      editedUser.value.image = e.target.result; // 이미지 데이터 URL 저장
    };
    reader.readAsDataURL(file);
  }
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
.card-container {
  overflow: hidden; /* 부모 요소에 적용 */

  .card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      transform: scale(1.1);
      transition: 0.3s;
    }
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

.modal-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}
/* modal or popup */
.modal-container {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  z-index: 999;
}

.bt1 {
  background-color: #e23030;
}
.bt2 {
  background-color: #5a5ac3;
}

.sbtn {
  top: 50%;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 15px;
  min-height: 30px;
  min-width: 120px;
  margin-right: 10px;

  &:hover {
    background-color: #3dd886;
    transition: 0.7s;
  }
}
</style>
