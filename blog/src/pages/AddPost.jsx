import React, { useEffect, useState } from 'react';
import PostForm from '../components/PostForm';

const AddPost = () => {
  const [alert, setAlert] = useState(null);

  const handleSubmit = (newPost) => {
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const postWithId = { ...newPost, id: Date.now(), date: new Date().toISOString() };
    const updatedPosts = [...savedPosts, postWithId];
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    setAlert({ message: 'Post added successfully', type: 'success' });
  };

  return (
    <div className="container mt-4">
      {alert && (
        <Alert 
          message={alert.message} 
          type={alert.type} 
          onClose={() => setAlert(null)} 
        />
      )}
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddPost;