import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

export const getRedirectOAuthURL = () => {
  return api.get(
    `/auth/github/login?redirect=${process.env.REACT_APP_URL}/github/OAuth`
  );
};

export const getSnippetList = (limit, offset) => {
  return api.get(`/codes?limit=${limit}&offset=${offset}`);
};

export const onCreateSnippet = ({ title, language, code, description }) => {
  return api
    .post(`/code`, {
      title: title,
      language: language,
      content: code,
      description: description,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      alert("코드 생성 에러");
    });
};
