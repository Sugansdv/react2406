import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const postToEdit = savedPosts.find(p => p.id === parseInt(id));
    if (postToEdit) {
      setPost(postToEdit);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const handleSubmit = (updatedPost) => {
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const updatedPosts = savedPosts.map(p => 
      p.id === parseInt(id) ? { ...updatedPost, id: p.id, date: p.date } : p
    );
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    setAlert({ message: 'Post updated successfully', type: 'success' });
    setTimeout(() => navigate('/'), 1000);
  };

  if (!post) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      {alert && (
        <Alert 
          message={alert.message} 
          type={alert.type} 
          onClose={() => setAlert(null)} 
        />
      )}
      <PostForm initialPost={post} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditPost;