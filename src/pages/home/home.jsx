import React from "react";
import Chat from "../../components/chat/Chat";
import Stories from "../../components/stories/stories"
import Posts from "../../components/posts/Posts" // Yahan 'Posts' ki jagah 'Post' likhein
//import Share from "../../components/share/Share"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Posts/>
      <Chat/>
    </div>
  )
}

export default Home