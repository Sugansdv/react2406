import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaEdit, FaTrash } from 'react-icons/fa';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const foundPost = savedPosts.find(p => p.id === parseInt(id));
    if (foundPost) {
      setPost(foundPost);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const handleDelete = () => {
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const updatedPosts = savedPosts.filter(p => p.id !== parseInt(id));
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    navigate('/', { state: { alert: { message: 'Post deleted successfully', type: 'success' } } });
  };

  if (!post) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <button onClick={() => navigate('/')} className="btn btn-outline-secondary mb-3">
        <FaArrowLeft className="me-1" /> Back to Posts
      </button>
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h1 className="card-title">{post.title}</h1>
              <p className="text-muted">By: {post.author}</p>
            </div>
            <div>
              <button 
                onClick={() => navigate(`/edit/${post.id}`)}
                className="btn btn-outline-primary me-2"
              >
                <FaEdit /> Edit
              </button>
              <button 
                onClick={handleDelete}
                className="btn btn-outline-danger"
              >
                <FaTrash /> Delete
              </button>
            </div>
          </div>
          <hr />
          <div className="card-text" style={{ whiteSpace: 'pre-line' }}>
            {post.content}
          </div>
          <p className="text-muted mt-3">
            Posted on: {new Date(post.date).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;