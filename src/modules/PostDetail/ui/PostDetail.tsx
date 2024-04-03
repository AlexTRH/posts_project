import React from 'react';
import {Link, useParams} from 'react-router-dom';
import Heading from "../../../shared/Heading/Heading.tsx";
import Error from "../../../shared/Error/Error.tsx";
import { useGetPostByIdQuery} from "../../../shared/api/postsApi";
import {Loader} from "../../../shared/Loader/Loader.tsx";


const PostDetail: React.FC = () => {
  const { postId } = useParams<{ postId: any }>();

  const {
    data: currentPost,
    isLoading,
    isError,
    error
  } = useGetPostByIdQuery(postId);

  if (isLoading) return <Loader />;
  if (isError) return <Error errorMessage={error || "Unknown error occurred"} />;


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
