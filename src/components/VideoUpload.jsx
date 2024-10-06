import React, { useState } from 'react';
import axios from 'axios';

const VideoUpload = () => {
  const [video, setVideo] = useState(null);

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!video) return;

    const formData = new FormData();
    formData.append('file', video);
    formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, formData);
      console.log('Upload Successful:', response.data);
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <div className="video-upload">
      <h2>Upload Video</h2>
      <input type="file" accept="video/*" onChange={handleVideoChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default VideoUpload;
