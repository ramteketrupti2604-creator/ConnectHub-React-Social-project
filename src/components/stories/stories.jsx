import React, { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  // EXCELLENT & VARIED TOPICS STORIES DATA
  const stories = [
    {
      id: 1,
      name: "Vihaan Gupta",
      // Topic: Birthday Celebration
      img: "https://images.pexels.com/photos/1543767/pexels-photo-1543767.jpeg?auto=compress&cs=tinysrgb&w=1600",
      type: "Birthday ✨",
    },
    {
      id: 2,
      name: "Ishani Malhotra",
      // Topic: Travel/Nature
      img: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1600",
      type: "Vacation 🏖️",
    },
    {
      id: 3,
      name: "Kabir Kapoor",
      // Topic: Food/Coffee
      img: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1600",
      type: "Coffee Mood ☕",
    },
    {
      id: 4,
      name: "Myra Singh ",
      // Topic: Coding/Work
      img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1600",
      type: "Coding Life 💻",
    },
  ];

  return (
    <div className="stories">
      {/* Aapki apni story section */}
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>Your Story</span>
        <button>+</button>
      </div>

      {/* Baki friends ki stories with different topics */}
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
          {/* Chota sa badge ya text topic dikhane ke liye */}
          <div className="storyType">{story.type}</div>
        </div>
      ))}
    </div>
  );
};

export default Stories;