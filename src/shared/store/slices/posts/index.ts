import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Post, PostsState} from "../../../types";
import { postsListExtraBuilder} from "../../../../modules/Posts/store";
import {RootState} from "../../index.ts";
import {getPostExtraBuilder} from "../../../../modules/PostDetail/store";

const initialState: PostsState = {
  posts: [],
  currentPost: null,
  isLoading: false,
  error: null,
};

export const posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    }, clearPostList: (state) => {
      state.posts = [];
    },
    clearCurrentPost: (state) => {
      state.currentPost = null;
    }
  },
  extraReducers: (builder: any) => {
    postsListExtraBuilder(builder);
    getPostExtraBuilder(builder);

  },
});


export const { setPosts, clearCurrentPost, clearPostList } = posts.actions;

export const selectPosts = (state: RootState) => state.posts;

export default posts.reducer;
