import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

const PostItem = ({ post, onDelete }) => {
  const excerpt = post.content.length > 100 
    ? `${post.content.substring(0, 100)}...` 
    : post.content;

  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{excerpt}</p>
        <p className="text-muted">By: {post.author}</p>
      </div>
      <div className="card-footer bg-transparent">
        <div className="d-flex justify-content-between">
          <Link to={`/post/${post.id}`} className="btn btn-sm btn-outline-primary">
            Read More
          </Link>
          <div>
            <Link to={`/edit/${post.id}`} className="btn btn-sm btn-outline-secondary me-2">
              <FaEdit />
            </Link>
            <button 
              onClick={() => onDelete(post.id)}
              className="btn btn-sm btn-outline-danger"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;