import {createAsyncThunk} from '@reduxjs/toolkit';
import {PostsState} from "../../../shared/types";
import axios from "axios";

export const postsList = createAsyncThunk(
  'postsList',
  async () => {
    const response = await axios('https://jsonplaceholder.typicode.com/posts');

    return response.data;
  },
)

export const postsListExtraBuilder = (builder: any) => {
  builder.addCase(postsList.pending, (state: PostsState) => {
    state.isLoading = true
  })
  builder.addCase(postsList.fulfilled, (state: PostsState, action) => {
    state.isLoading = false
    state.posts = action.payload as any;
  })
  builder.addCase(postsList.rejected, (state: PostsState, action) => {
    state.isLoading = false
    state.error = action.error.message as string;
  })
}
