import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import {PostsState} from "../../../shared/types";

export const getPost = createAsyncThunk(
  'getPost',
  async (id: string) => {
    const response = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`);

    return response.data;
  },
)

export const getPostExtraBuilder = (builder: any) => {
  builder.addCase(getPost.pending, (state: PostsState) => {
    state.isLoading = true
  })
  builder.addCase(getPost.fulfilled, (state: PostsState, action) => {
    state.isLoading = false
    state.currentPost = action.payload as any;
  })
  builder.addCase(getPost.rejected, (state: PostsState, action) => {
    state.isLoading = false
    state.error = action.error.message as string;
  })
}
