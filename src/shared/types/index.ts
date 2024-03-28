
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsState {
  posts: Post[];
  isLoading: boolean;
  currentPost: Post | null;
  error: string | null;
}

