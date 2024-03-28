import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './pages/HomePage.tsx';
import PostListPage from './pages/PostListPage.tsx';
import PostDetailPage from './pages/PostDetailPage.tsx';
import {store} from "./shared/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostListPage />} />
          <Route path="/posts/:postId" element={<PostDetailPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
