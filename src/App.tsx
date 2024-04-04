import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import PostListPage from './pages/PostListPage.tsx';
import PostDetailPage from './pages/PostDetailPage.tsx';

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostListPage />} />
          <Route path="/posts/:postId" element={<PostDetailPage />} />
        </Routes>
      </Router>
  );
};

export default App;
