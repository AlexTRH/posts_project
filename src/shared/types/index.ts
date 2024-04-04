
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface StoreState {
  posts: Post[]
  currentPost: Post | null
  isLoading: boolean;
  error: string | null;
  fetchPosts: () => Promise<void>
  fetchCurrentPost: (postId: number) => Promise<void>
}
