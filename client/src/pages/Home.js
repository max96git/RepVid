import React from 'react';
import AvatarEditor from '../components/AvatarEditor';
import VideoUpload from '../components/VideoUpload';

function Home() {
  return (
    <div>
      <h1>Welcome to RepVid</h1>
      <AvatarEditor />
      <VideoUpload />
    </div>
  );
}

export default Home;
