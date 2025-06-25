import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase';
import ChatRoom from './components/ChatRoom';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const handleLogin = () => signInWithPopup(auth, provider);
  const handleLogout = () => signOut(auth);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark p-2 justify-content-between">
        <span className="navbar-brand">💬 Firebase Chat</span>
        {user ? (
          <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>Logout</button>
        ) : (
          <button className="btn btn-outline-light btn-sm" onClick={handleLogin}>Sign In with Google</button>
        )}
      </nav>
      {user ? <ChatRoom user={user} /> : <p className="mt-5 text-center">Please sign in to continue</p>}
    </div>
  );
}

export default App;