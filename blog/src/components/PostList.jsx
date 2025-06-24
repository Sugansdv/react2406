import React from 'react';
import PostItem from './PostItem';
import { FaSearch } from 'react-icons/fa';

const PostList = ({ posts, onDelete, onSearch }) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <div className="mb-4">
        <div className="input-group">
          <span className="input-group-text"><FaSearch /></span>
          <input
            type="text"
            className="form-control"
            placeholder="Search posts..."
            onChange={handleSearchChange}
          />
        </div>
      </div>
      {posts.length === 0 ? (
        <div className="alert alert-info">No posts found</div>
      ) : (
        <div className="row">
          {posts.map(post => (
            <div className="col-md-6 col-lg-4 mb-4" key={post.id}>
              <PostItem post={post} onDelete={onDelete} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;