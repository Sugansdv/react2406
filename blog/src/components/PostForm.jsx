import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostForm = ({ initialPost = {}, onSubmit }) => {
  const [post, setPost] = useState({
    title: initialPost.title || '',
    content: initialPost.content || '',
    author: initialPost.author || '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!post.title.trim() || !post.content.trim() || !post.author.trim()) {
      setError('All fields are required');
      return;
    }
    onSubmit(post);
    navigate('/');
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{initialPost.id ? 'Edit Post' : 'Add New Post'}</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">Content</label>
            <textarea
              className="form-control"
              id="content"
              name="content"
              rows="5"
              value={post.content}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">Author</label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              value={post.author}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary me-2">
            {initialPost.id ? 'Update' : 'Submit'}
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;