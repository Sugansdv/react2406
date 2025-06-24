import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-4">
      <h1>Contact Us</h1>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Support</h5>
              <p className="card-text">
                For any questions or support, please email us at:
              </p>
              <a href="mailto:support@grocerylistapp.com" className="btn btn-primary">
                support@grocerylistapp.com
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Feedback</h5>
              <p className="card-text">
                We'd love to hear your feedback to improve our app!
              </p>
              <a href="mailto:feedback@grocerylistapp.com" className="btn btn-success">
                feedback@grocerylistapp.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;