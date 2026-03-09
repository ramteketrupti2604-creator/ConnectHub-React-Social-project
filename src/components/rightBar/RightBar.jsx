import React, { useState } from "react";
import "./rightBar.scss";
import Chat from "../chat/Chat"; 

const RightBar = () => {
  // 1. Chat ke liye state jo selected user ka data rakhegi
  const [selectedUser, setSelectedUser] = useState(null);

  const [suggestions, setSuggestions] = useState([
    {
      id: 1,
      name: "Aarav Sharma",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
      isFollowed: false,
    },
    {
      id: 2,
      name: "Ananya Verma",
      img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      isFollowed: false,
    },
  ]);

  const handleFollow = (id) => {
    setSuggestions(suggestions.map(user => 
      user.id === id ? { ...user, isFollowed: !user.isFollowed } : user
    ));
  };

  const handleDismiss = (id) => {
    setSuggestions(suggestions.filter(user => user.id !== id));
  };

  // Online Friends ka data array
  const onlineFriends = [
    { id: 101, name: "Arjun Joshi", img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 102, name: "Kiara Agarwal", img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600" },
   { id: 103, name: "Reyansh Patil", img: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { id: 104, name: "Meera Das", img: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { id: 105, name: "Sana Khanna", img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { id: 106, name: "Rohan Mehta", img: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { id: 107, name: "Diya Reddy", img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { id: 108, name: "Aditya Bansal", img: "https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { id: 109, name: "Ishaan Choudhury", img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 110, name: "Vihaan Gupta", img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { id: 111, name: "Ishani Malhotra", img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { id: 112, name: "Kabir Kapoor", img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600" },

  ];

  return (
    <div className="rightBar">
      <div className="container">
        
        {/* 1. CHAT SECTION - Pass selectedUser as prop */}
        <div className="item chatSection">
          <span>Direct Messages</span>
          {/* Chat component ko selected user ka data bhej rahe hain */}
          <Chat user={selectedUser} /> 
        </div>

        {/* 2. SUGGESTIONS SECTION */}
        <div className="item">
          <span>Suggestions For You</span>
          {suggestions.map((user) => (
            <div className="user" key={user.id}>
              <div className="userInfo">
                <img src={user.img} alt={user.name} />
                <span>{user.name}</span>
              </div>
              <div className="buttons">
                <button 
                  onClick={() => handleFollow(user.id)}
                  style={{ 
                    backgroundColor: user.isFollowed ? "#ccc" : "#5271ff", 
                    color: "white" 
                  }}
                >
                  {user.isFollowed ? "following" : "follow"}
                </button>
                <button onClick={() => handleDismiss(user.id)}>dismiss</button>
              </div>
            </div>
          ))}
        </div>

        {/* 3. LATEST ACTIVITIES */}
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <p><span>Vihaan Gupta</span> changed their cover picture</p>
            </div>
            <span> 4 min ago</span>
            
          </div>
        </div>

        {/* 4. ONLINE FRIENDS - Click event added */}
        <div className="item">
          <span>Online Friends</span>
          {onlineFriends.map((friend) => (
            <div 
              className="user" 
              key={friend.id} 
              onClick={() => setSelectedUser(friend)} // Click karne par state update hogi
              style={{ cursor: "pointer" }}
            >
              <div className="userInfo">
                <img src={friend.img} alt="" />
                <div className="online" />
                <span>{friend.name}</span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default RightBar;