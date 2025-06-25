import React, { useEffect, useState, useRef } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';
import Message from './Message';

const ChatRoom = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      await addDoc(collection(db, 'messages'), {
        text: newMessage,
        uid: user.uid,
        photoURL: user.photoURL,
        displayName: user.displayName,
        timestamp: serverTimestamp(),
      });
      setNewMessage('');
    }
  };

  return (
    <div className="container mt-3">
      <div className="chat-box border rounded p-3 bg-light" style={{ height: '400px', overflowY: 'auto' }}>
        {messages.map((msg) => (
          <Message key={msg.id} msg={msg} isCurrentUser={msg.uid === user.uid} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={sendMessage} className="d-flex mt-3">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatRoom;
