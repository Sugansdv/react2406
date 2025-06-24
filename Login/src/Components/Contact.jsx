import React from 'react';

export default function Contact() {
  return (
    <div className="container mt-4 w-50">
  <h2 className="text-center mb-4">Contact Us</h2>
  <form>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
    </div>

    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email</label>
      <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
    </div>

    <div className="mb-3">
      <label htmlFor="message" className="form-label">Message</label>
      <textarea className="form-control" id="message" rows="4" placeholder="Your message" required></textarea>
    </div>

    <div className="text-center">
      <button type="submit" className="btn btn-primary mt-2">Submit</button>
    </div>
  </form>
</div>

  );
}
