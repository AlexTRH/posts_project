import React from 'react';
import { Link } from 'react-router-dom';
import {postsList} from '../modules/Posts/store';
import {useStore} from "../shared/hooks/useStore.ts";
import {clearPostList} from "../shared/store/slices/posts";
import {Loader} from "../shared/Loader/Loader.tsx";
import Heading from "../shared/Heading/Heading.tsx";
import Error from "../shared/Error/Error.tsx";
const PostList: React.FC = () => {
  const {  posts, isLoading, error } = useStore(postsList, clearPostList);

  if (isLoading) return <Loader />;
  if (error) return <Error errorMessage={error || "Unknown error occurred"} />;

  return (
    <div>
      <Heading text ='Posts'/>
      <ul>
        {posts?.map((post: any) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default PostList;
