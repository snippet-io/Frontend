import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("accessToken"),
  },
});

export const getOAuthUrlAPI = () => {
  return api.get(
    `/auth/github/login?redirect=${process.env.REACT_APP_URL}/github/OAuth`
  );
};

export const getCodesAPI = (limit, offset) => {
  return api.get(`/codes?limit=${limit}&offset=${offset}`);
};

export const getCodeAPI = (id) => {
  return api.get(`/codes/${id}`);
};

export const postCreateSnippetAPI = ({
  title,
  language,
  code,
  description,
}) => {
  return api
    .post(`/codes`, {
      title: title,
      language: language,
      content: code,
      description: description,
    })
    .then((res) => {
      console.log(res);
    })
    .catch(() => {
      alert("코드 생성 에러");
    });
};
