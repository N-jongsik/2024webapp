import axios from "axios";

const API_SERVER_HOST = "http://loaclhost:8081";
const prefix = `${API_SERVER_HOST}/api/todo`;

//localhost:8081/api/todo/list?page=1&size=10
export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const res = await axios.get(`${prefix}/list`, {
    params: { page: page, size: size },
  });
  return res.data;
};

export const getOne = async (tno) => {
  const res = await axios.get(`${prefix}/${tno}`);
  return res;
};

export const postAdd = (obj) => {
  axios.post(`${prefix}/`, obj);
};
