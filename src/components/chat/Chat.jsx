import React, { useState, useEffect } from "react";
import "./chat.scss";
import CloseIcon from '@mui/icons-material/Close';

const Chat = ({ user, setOpenChat }) => {
  // 1. State for Input
  const [inputText, setInputText] = useState("");
  
  
  const [allMessages, setAllMessages] = useState([
    { id: 1, text: "Hi, how are you?", sender: "friend" },
    { id: 2, text: "I'm good! Working on my project.", sender: "owner" }
  ]);

  
  useEffect(() => {
    if (user) {
      
      setAllMessages([
        { id: 1, text: `Hi, this is ${user.name}!`, sender: "friend" },
        { id: 2, text: "Hey! How can I help you?", sender: "owner" }
      ]);
    }
  }, [user]);

  
  const handleSend = () => {
    if (inputText.trim() !== "") {
      const newMessage = {
        id: Date.now(),
        text: inputText,
        sender: "owner"
      };
      setAllMessages([...allMessages, newMessage]);
      setInputText(""); // Clear input after send
    }
  };

  
  if (!user) {
    return (
      <div className="noChat">
        <p style={{ fontSize: "12px", color: "gray", textAlign: "center", padding: "20px" }}>
          Click on an online friend to start chatting.
        </p>
      </div>
    );
  }

  return (
    <div className="chatPopup">
      <div className="top">
        <div className="user">
          {/* Dynamic Image aur Name use kiya gaya hai */}
          <img src={user.img} alt={user.name} />
          <div className="details">
            <span>{user.name}</span>
            <p>Active now</p>
          </div>
        </div>
        
        <CloseIcon className="close" onClick={() => setOpenChat(null)} />
      </div>
      
      <div className="messages">
        {allMessages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender === "owner" ? "owner" : ""}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      <div className="inputArea">
        <input 
          type="text" 
          placeholder="Type a message..." 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()} 
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;