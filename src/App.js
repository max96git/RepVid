import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AvatarEditor from './components/AvatarEditor';
import VideoUpload from './components/VideoUpload';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/avatar" element={<AvatarEditor />} />
        <Route path="/upload" element={<VideoUpload />} />
      </Routes>
    </Router>
  );
};

export default App;
