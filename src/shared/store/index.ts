import {create} from "zustand";
import {Post, StoreState} from "../types";
import axios, {AxiosResponse} from "axios";

const useStore = create<StoreState>((set) => ({
  posts: [],
  currentPost: null,
  isLoading: false,
  error: null,
  fetchPosts: async () => {
    try {
      set({ isLoading: true });
      const response: AxiosResponse<Post[]> = await  axios.get('https://jsonplaceholder.typicode.com/posts')
      set({ posts: response.data, isLoading: false});
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  fetchCurrentPost: async (postId: number) => {
    try {
      set({ isLoading: true });
      const response: AxiosResponse<Post> = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      set({ currentPost: response.data, isLoading: false  });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  }
}))

export default useStore
