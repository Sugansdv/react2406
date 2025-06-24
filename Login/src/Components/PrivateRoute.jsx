
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ user, children, onDeny }) {
  useEffect(() => {
    if (!user && onDeny) {
      onDeny();
    }
  }, [user, onDeny]);

  return user ? children : <Navigate to="/" />;
}
