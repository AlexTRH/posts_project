import React from 'react';
import Heading from "../shared/Heading/Heading.tsx";
import PostList from "../modules/Posts/ui/PostList.tsx";
const PostListPage: React.FC = () => {

  return (
    <div>
      <Heading text ='Posts'/>
      <PostList />
    </div>
  );
};

export default PostListPage;
