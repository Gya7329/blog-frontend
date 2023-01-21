import { createBlogApi, getAllBlogApi, getBlogByIdApi } from "api/index";
import { CREATE_BLOG, FETCH_ALL_BLOGS, FETCH_BY_ID } from "redux/types/types";

export const createBlog = (body, setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const blog = await createBlogApi(body);
    setLoading(false);
    alert("Blog Created Successfully");
    window.location.replace("/");
    dispatch({ type: CREATE_BLOG, payload: blog });
  } catch (err) {
    console.log(err);
    setLoading(false);
  }
};
export const getAllBlogs = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const blog = await getAllBlogApi();
    setLoading(false);
    dispatch({ type: FETCH_ALL_BLOGS, payload: blog?.data?.blogs });
  } catch (err) {
    console.log(err);
    setLoading(false);
  }
};
export const getSingleBlog = (id, setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const blog = await getBlogByIdApi(id);
    setLoading(false);
    dispatch({ type: FETCH_BY_ID, payload: blog?.data?.blog });
  } catch (err) {
    console.log(err);
    setLoading(false);
  }
};
