import { combineReducers } from "redux";
import { blogReducer } from "./blog.reducer";

export const reducers = combineReducers({
  blog: blogReducer,
});
