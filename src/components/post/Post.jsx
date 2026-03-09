import React, { useState } from "react";
import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/comments";

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);

  // --- Share Functionality Logic ---
  const handleShare = async () => {
    const shareData = {
      title: `${post.name}'s Post`,
      text: post.desc,
      url: window.location.href, // Current page ka link share karega
    };

    try {
      if (navigator.share) {
        // Mobile aur modern browsers ke liye native share menu
        await navigator.share(shareData);
      } else {
        // Fallback: Agar browser support nahi karta toh link copy karega
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard! Ab aap ise kahin bhi paste kar sakte hain.");
      }
    } catch (err) {
      console.log("Error sharing:", err);
    }
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <Link to={`/profile/${post.userId}`}>
              <img src={post.profilePic} alt="" />
            </Link>
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">Just now</span>
            </div>
          </div>
          <MoreHorizIcon style={{ cursor: "pointer" }} />
        </div>

        <div className="content">
          <p>{post.desc}</p>
          {post.img && <img src={post.img} alt="" />}
        </div>

        <div className="info">
          <div className="item" onClick={() => setLiked(!liked)}>
            {liked ? <FavoriteOutlinedIcon style={{color:"red"}}/> : <FavoriteBorderOutlinedIcon />}
            {liked ? 13 : 12} Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            2 Comments
          </div>
          {/* Share Item with onClick handler */}
          <div className="item" onClick={handleShare} style={{cursor: "pointer"}}>
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;