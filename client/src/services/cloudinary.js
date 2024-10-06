import axios from 'axios';

const CLOUDINARY_URL = process.env.REACT_APP_CLOUDINARY_URL;
const UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

export const uploadVideo = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', UPLOAD_PRESET);

  try {
    const response = await axios.post(CLOUDINARY_URL, formData);
    return response.data;
  } catch (error) {
    console.error('Error uploading video:', error);
    throw error;
  }
};
