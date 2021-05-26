import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
});

api.interceptors.request.use((config) => {
  config.headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("accessToken"),
  };
  return config;
});

export const postLoginAPI = (code) => {
  return api.post(`/auth/github/accesstoken`, {
    code: code,
  });
};

export const postCreateSnippetAPI = ({
  title,
  language,
  code,
  description,
}) => {
  return api.post(`/codes`, {
    title: title,
    language: language,
    content: code,
    description: description,
  });
};

export const getOAuthUrlAPI = () => {
  return api.get(
    `/auth/github/login?redirect=${process.env.REACT_APP_URL}/github/OAuth`
  );
};

export const getCodesAPI = ({
  limit,
  offset,
  language,
  order,
  searchKeyword,
}) => {
  let uri = `/codes?limit=${limit}&offset=${offset}`;

  if (language) uri += `&language=${language}`;
  if (searchKeyword) uri += `&search=${searchKeyword}`;
  if (order) uri += `&order=${order}`;

  return api.get(uri);
};

export const getCodeAPI = (id) => {
  return api.get(`/codes/${id}`);
};

export const getUserAPI = (id) => {
  return api.get(`/users/${id}`);
};

export const modifySnippetAPI = (codeId, snippet) => {
  return api.put(`/codes/${codeId}`, {
    title: snippet.title,
    language: snippet.language,
    content: snippet.code,
    description: snippet.description,
  });
};

export const postStarAPI = (id) => {
  return api.post(`codes/${id}/stars`);
};

export const deleteStarAPI = (id) => {
  return api.delete(`codes/${id}/stars`);
};

export const getStarredUser = async (code_id, user_id) => {
  try {
    await api.get(`/codes/${code_id}/stars/${user_id}`);
  } catch (e) {
    return 0;
  }

  return code_id;
};
