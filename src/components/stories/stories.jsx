import React, { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  const stories = [
    {
      id: 1,
      name: "Vihaan",
      img: "https://images.pexels.com/photos/1543767/pexels-photo-1543767.jpeg",
      type: "Birthday ✨",
    },
    {
      id: 2,
      name: "Ishani",
      img: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg",
      type: "Vacation 🏖️",
    },
    {
      id: 3,
      name: "Kabir",
      img: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
      type: "Coffee ☕",
    },
    {
      id: 4,
      name: "Myra",
      img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      type: "Coding 💻",
    },
  ];

  return (
    <div className="stories">
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        grabCursor={true}
        style={{ width: "100%" }}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {/* Your Story */}
        <SwiperSlide>
          <div className="story">
            <img
              src={
                currentUser?.profilePic ||
                "https://via.placeholder.com/150"
              }
              alt=""
            />
            <span>Your Story</span>
            <button>+</button>
          </div>
        </SwiperSlide>

        {/* Other Stories */}
        {stories.map((story) => (
          <SwiperSlide key={story.id}>
            <div className="story">
              <img src={story.img} alt="" />
              <span>{story.name}</span>
              <div className="storyType">{story.type}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Stories;