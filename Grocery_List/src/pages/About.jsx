import React from 'react';

const About = () => {
  return (
    <div className="container mt-4">
      <h1>About Grocery List App</h1>
      <p className="lead">
        This application helps you manage your grocery shopping list efficiently.
      </p>
      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">Features</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Add items to your grocery list</li>
            <li className="list-group-item">Specify quantities for each item</li>
            <li className="list-group-item">Mark items as completed</li>
            <li className="list-group-item">Remove items you no longer need</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;