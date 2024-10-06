import React, { useState } from 'react';
import axios from 'axios';

const VideoUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'your_upload_preset');

    const response = await axios.post(
      'https://api.cloudinary.com/v1_1/your_cloud_name/video/upload',
      formData
    );

    if (response.data.secure_url) {
      // Save the video URL to your backend or Firestore
      console.log('Video uploaded:', response.data.secure_url);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Video</button>
    </div>
  );
};

export default VideoUpload;
