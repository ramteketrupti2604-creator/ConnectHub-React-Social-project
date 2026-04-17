import React from "react";
import { useContext, useState } from "react";
import "./Comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);

  
  const [commentList, setCommentList] = useState([
    {
      id: 1,
      name: "Aarav Sharma",
      userId: 1,
      profilePicture: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "This is an absolutely brilliant post! Very helpful. 🔥",
    },
    {
      id: 2,
      name: "Ananya Verma",
      userId: 2,
      profilePicture: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Love the way you explained this topic. Excellent work! ✨",
    },
  ]);

 
  const [writeComment, setWriteComment] = useState("");

  
  const handleSend = () => {
    if (writeComment.trim() === "") {
      alert("Please write something before sending!");
      return;
    }

    const newEntry = {
      id: commentList.length + 1,
      name: currentUser.name,
      userId: currentUser.id,
      profilePicture: currentUser.profilePic,
      desc: writeComment,
    };

   
    setCommentList([newEntry, ...commentList]);
    
    
    setWriteComment("");
  };

  return (
    <div className="comments">
      
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input
          type="text"
          placeholder="Write an excellent comment..."
          value={writeComment}
          onChange={(e) => setWriteComment(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>

      
      {commentList.map((comment) => (
        <div className="comment" key={comment.id}>
          <img src={comment.profilePicture} alt={comment.name} />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">just now</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;