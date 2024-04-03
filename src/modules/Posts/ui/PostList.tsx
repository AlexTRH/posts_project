import React from 'react';
import {Link} from 'react-router-dom';
import {useGetPostsQuery} from "../../../shared/api/postsApi";
import {Loader} from "../../../shared/Loader/Loader.tsx";
import Error from "../../../shared/Error/Error.tsx";

const PostList: React.FC = () => {
  const {
    data: posts,
    isLoading,
    error
  } = useGetPostsQuery();

  // const {  posts, isLoading, error } = useStore(postsList, clearPostList);

  if (isLoading) return <Loader/>;
  if (error) return <Error errorMessage={error || "Unknown error occurred"}/>;

  return (
    <div>
      <Link to="/">Go Home</Link>
      <ul>
        {posts?.map((post: any) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
