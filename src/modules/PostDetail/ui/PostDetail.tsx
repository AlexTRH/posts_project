import React from 'react';
import { Link } from 'react-router-dom';
import Heading from "../../../shared/Heading/Heading.tsx";
import Error from "../../../shared/Error/Error.tsx";
import {useStore} from "../../../shared/hooks/useStore.ts";
import {getPost} from "../store";
import {clearCurrentPost} from "../../../shared/store/slices/posts";
import {Loader} from "../../../shared/Loader/Loader.tsx";


const PostDetail: React.FC = () => {
  const { currentPost, isLoading, error } = useStore(getPost, clearCurrentPost);

  if (isLoading) return <Loader />;
  if (error) return <Error errorMessage={error || "Unknown error occurred"} />;


  return (
    <div>
      <Heading text={currentPost?.title || "No title"} />
      <p>{currentPost?.body}</p>
      <Link to="/posts">Go Back</Link>
      <br />
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default PostDetail
