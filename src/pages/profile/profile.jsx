import React, { useState, useContext } from "react";
import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub"; 
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";
import { useParams } from "react-router-dom"; 
import { AuthContext } from "../../context/authContext";

const Profile = () => {
  const { id } = useParams(); 
  const { currentUser } = useContext(AuthContext); 
  const [followed, setFollowed] = useState(false);

  const otherUsers = [
    { id: 1, name: "Neha Wahane", img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" },
    { id: 2, name: "Aarav Sharma", img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" },
    { id: 3, name: "Ananya Verma", img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg" },
    { id: 4, name: "Vihaan Gupta", img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" },
    { id: 5, name: "Ishani Malhotra", img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" },
    { id: 6, name: "Kabir Kapoor", img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg" },
    { id: 7, name: "Sana Khanna", img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg" },
    { id: 8, name: "Rohan Mehta", img: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg" },
    { id: 9, name: "Diya Reddy", img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg" },
    { id: 10, name: "Aditya Bansal", img: "https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg" },
    { id: 11, name: "Kiara Agarwal", img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg" },
    { id: 12, name: "Ishaan Choudhury", img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg" },
    { id: 13, name: "Zoya Iyer", img: "https://images.pexels.com/photos/1181691/pexels-photo-1181691.jpeg" },
    { id: 14, name: "Reyansh Patil", img: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg" },
    { id: 15, name: "Meera Das", img: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg" }
  ];

  const isMyProfile = String(id) === String(currentUser.id);
  const displayUser = isMyProfile ? currentUser : otherUsers.find((u) => String(u.id) === String(id));

  if (!displayUser) return <div style={{padding: "20px", color: "#555"}}>User not found!</div>;

  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg" alt="" className="cover" />
        <img src={isMyProfile ? currentUser.profilePic : displayUser.img} alt="" className="profilePic" />
      </div>
      
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://facebook.com"><FacebookTwoToneIcon fontSize="large" /></a>
            <a href="https://instagram.com/ramteketruptisaroj" target="_blank" rel="noreferrer">
                <InstagramIcon fontSize="large" />
            </a>
            <a href="https://github.com"><GitHubIcon fontSize="large" /></a>
            <a href="https://linkedin.com"><LinkedInIcon fontSize="large" /></a>
          </div>
          <div className="center">
            <span className="name">{displayUser.name}</span>
            <div className="info">
              <div className="item"><PlaceIcon /><span>India</span></div>
              <div className="item"><LanguageIcon /><span>ConnectHub</span></div>
            </div>
            {/* Button text change from Update Profile to Follow */}
            <button 
                onClick={() => setFollowed(!followed)} 
                className="followBtn"
            >
              {followed ? "following" : "Follow"}
            </button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts userId={id} />
      </div>
    </div>
  );
};

export default Profile;