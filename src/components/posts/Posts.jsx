import React from "react";
import PostItem from "../post/Post";
import "./posts.scss";

const Posts = () => {
  const posts = [
    
    { id: 2, userId: 2, name: "Aarav Sharma", profilePic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600", desc: "The mountains are calling and I must go! 🏔️", img: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 3, userId: 3, name: "Ananya Verma", profilePic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600", desc: "Captured this beautiful sunset today. 🌅✨", img: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 4, userId: 4, name: "Vihaan Gupta", profilePic: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600", desc: "Nothing beats a healthy breakfast! 🍓🥣", img: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 5, userId: 5, name: "Ishani Malhotra", profilePic: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600", desc: "Believe in yourself and you will be unstoppable. 🌟", img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 6, userId: 6, name: "Kabir Kapoor", profilePic: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600", desc: "The only bad workout is the one that didn't happen. 💪", img: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 7, userId: 7, name: "Sana Khanna", profilePic: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1600", desc: "A room without books is like a body without a soul. 📖☕", img: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 8, userId: 8, name: "Rohan Mehta", profilePic: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1600", desc: "Leveling up! Finally built my dream gaming setup. 🎮🔥", img: "https://images.pexels.com/photos/4523000/pexels-photo-4523000.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 9, userId: 9, name: "Diya Reddy", profilePic: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1600", desc: "Every canvas is a journey all its own. 🎨✨", img: "https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 10, userId: 10, name: "Aditya Bansal", profilePic: "https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg?auto=compress&cs=tinysrgb&w=1600", desc: "Opportunities don't happen, you create them. 🤝", img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 11, userId: 11, name: "Kiara Agarwal", profilePic: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600", desc: "Style is a way to say who you are. 👗✨", img: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 12, userId: 12, name: "Ishaan Choudhury", profilePic: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1600", desc: "Where words fail, music speaks. 🎸🎧", img: "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 13, userId: 13, name: "Zoya Iyer", profilePic: "https://images.pexels.com/photos/1181691/pexels-photo-1181691.jpeg?auto=compress&cs=tinysrgb&w=1600", desc: "Home is where the heart is. 🏠🌿", img: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 14, userId: 14, name: "Reyansh Patil", profilePic: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1600", desc: "Success is the only option. 🏎️💨", img: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 15, userId: 15, name: "Meera Das", profilePic: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1600", desc: "Small changes lead to big results. 🌍💚", img: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1600" }
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;