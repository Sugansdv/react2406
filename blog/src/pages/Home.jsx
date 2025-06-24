import React, { useState, useEffect } from 'react';
import PostList from '../components/PostList';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [alert, setAlert] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    setPosts(savedPosts);
    setFilteredPosts(savedPosts);
  }, []);

  // Update filtered posts whenever search term changes
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, [searchTerm, posts]);

  const handleDelete = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    setFilteredPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    setAlert({ message: 'Post deleted successfully', type: 'success' });
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
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
      <h1 className="mb-4">Latest Blog Posts</h1>
      <PostList 
        posts={filteredPosts} 
        onDelete={handleDelete} 
        onSearch={handleSearch}
      />
    </div>
  );
};

export default Home;