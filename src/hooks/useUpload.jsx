import { useState } from 'react';
// import axios from 'axios';

const useUpload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const uploadToCloudinary = async (files) => {
    setIsLoading(true);
    setError(null);
    const url = `https://api.cloudinary.com/v1_1/dxhqcov11/image/upload`;

    const promises = files.map(file => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'ml_default');
      formData.append('folder', 'tracking-system'); // Specify the folder here
      return fetch(url, {
        method: 'POST',
        body: formData
      })
      .then(response => response.json());
    });
     
    

    try {
      const responses = await Promise.all(promises);
      setIsLoading(false);
      return responses.map(res => res.url);
    } catch (err) {
      setError(err);
      setIsLoading(false);
      throw err;
    }
  };

  return { uploadToCloudinary, isLoading, error };
};

export default useUpload;