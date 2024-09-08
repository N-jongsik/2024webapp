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
        stadium: "잠실야구장",
        image: "https://picsum.photos/100",
        id: 1,
        latitude: 37.2151,
        longitude: 119.2127,
        video: "https://www.youtube.com/embed/KMP68_JFsUg?si=rMjWe-jZxfGY1OS3",
      },
      {
        userid: "Lotte-Fighting",
        password: "123",
        username: "홍삼이",
        addr: "부산",
        team: "Lotte Giants",
        stadium: "사직야구장",
        image: "https://picsum.photos/200",
        id: 2,
        latitude: 33.5665,
        longitude: 126.978,
        video: "https://www.youtube.com/embed/HfqKC-G3dDA?si=UJlO4Q1Db7K-hg5K",
      },
      {
        userid: "KIA-Fighting",
        password: "123",
        username: "종식",
        addr: "광주",
        team: "KIA Tigers",
        stadium: "챔피언스필드",
        image: "https://picsum.photos/300",
        id: 3,
        latitude: 35.5651,
        longitude: 121.9827,
        video: "https://www.youtube.com/embed/4I9XA-bwi8U?si=IvWOiB-r5ntEWf2B",
      },
    ],
  },
  mutations: {
    addUser(state, payload) {
      state.userData.push(payload);
    },
    deleteUser(state, payload) {
      state.userData = state.userData.filter((user) => user.id !== payload);
    },
    updateUser(state, payload) {
      const index = state.userData.findIndex((user) => user.id === payload.id);
      if (index !== -1) {
        state.userData[index] = updatedUser;
      }
    },
  },
  actions: {},
});
