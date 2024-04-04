import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import Heading from "../../../shared/Heading/Heading.tsx";
import Error from "../../../shared/Error/Error.tsx";
import {Loader} from "../../../shared/Loader/Loader.tsx";
import useStore from "../../../shared/store";


const PostDetail: React.FC = () => {
  const { postId } = useParams<{ postId: any }>();
  const {currentPost,isLoading, error, fetchCurrentPost} = useStore()

  useEffect(() => {
    fetchCurrentPost(parseInt(postId, 10))
  }, [fetchCurrentPost, postId])

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
