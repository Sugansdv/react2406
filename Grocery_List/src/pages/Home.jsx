import React from 'react';
import GroceryList from '../components/GroceryList';

const Home = () => {
  return (
    <div>
      <h1 className="text-center my-4">Welcome to Grocery List App</h1>
      <GroceryList />
    </div>
  );
};

export default Home;