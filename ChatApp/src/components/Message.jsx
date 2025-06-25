// src/components/Message.jsx
import React from 'react';

const Message = ({ msg, isCurrentUser }) => {
  return (
    <div className={`d-flex mb-2 ${isCurrentUser ? 'justify-content-end' : 'justify-content-start'}`}>
      <div className="d-flex align-items-center">
        {!isCurrentUser && (
          <img
            src={msg.photoURL}
            alt="avatar"
            className="rounded-circle me-2"
            width="30"
            height="30"
          />
        )}
        <div className={`p-2 rounded shadow-sm ${isCurrentUser ? 'bg-primary text-white' : 'bg-white text-dark'}`}>
          <strong className="d-block">{isCurrentUser ? 'You' : msg.displayName}</strong>
          <span>{msg.text}</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
