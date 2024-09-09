import { createStore } from "vuex";

export default createStore({
  state: {
    userData: [
      {
        userid: "LG-Fighting",
        password: "123",
        username: "남종식",
        addr: "서울",
        team: "LG Twins",
        image: "https://picsum.photos/100",
        latitude: 37.51215,
        longitude: 127.071976,
        video: "https://www.youtube.com/embed/KMP68_JFsUg?si=rMjWe-jZxfGY1OS3",
      },
      {
        userid: "Lotte-Fighting",
        password: "123",
        username: "홍삼이",
        addr: "부산",
        team: "Lotte Giants",
        image: "https://picsum.photos/200",
        latitude: 35.1139,
        longitude: 129.0342,
        video: "https://www.youtube.com/embed/HfqKC-G3dDA?si=UJlO4Q1Db7K-hg5K",
      },
      {
        userid: "KIA-Fighting",
        password: "123",
        username: "종식",
        addr: "광주",
        team: "KIA Tigers",
        image: "https://picsum.photos/300",
        latitude: 35.16942496,
        longitude: 126.8888055,
        video: "https://www.youtube.com/embed/4I9XA-bwi8U?si=IvWOiB-r5ntEWf2B",
      },
    ],
  },
  getters: {
    getUserData: (state) => state.userData,
  },
  mutations: {
    addUser(state, payload) {
      state.userData.push(payload);
    },
    deleteUser(state, payload) {
      state.userData = state.userData.filter((user) => user.userid !== payload);
    },
    updateUser(state, payload) {
      const index = state.userData.findIndex(
        (user) => user.userid === payload.userid
      );
      if (index !== -1) {
        state.userData[index] = payload; // 수정된 사용자 정보로 교체
      }
    },
  },
  actions: {},
});
