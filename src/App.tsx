import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home.tsx';
import PostList from './pages/PostList.tsx';
import PostDetail from './pages/PostDetail.tsx';
import {store} from "./shared/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:postId" element={<PostDetail />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
