import axios from "axios";

const API = axios.create({
  baseURL: "https://blog-api-8npz.onrender.com",
  // change base URL to "http://localhost:4800" for local testing
  //   baseURL: "http://localhost:4800",
});

export const createBlogApi = (blog) => API.post(`/v1/blog/create`, blog);
export const getAllBlogApi = () => API.get(`/v1/blog/all`);
export const getBlogByIdApi = (id) => API.get(`/v1/blog/${id}`);
