import React, { useState } from 'react';
import { uploadVideo } from '../services/cloudinary';

function VideoUpload() {
  const [video, setVideo] = useState(null);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const response = await uploadVideo(file);
      console.log('Uploaded video:', response);
    }
  };

  return (
    <div>
      <h2>Upload Video</h2>
      <input type="file" accept="video/*" onChange={handleUpload} />
    </div>
  );
}

export default VideoUpload;
