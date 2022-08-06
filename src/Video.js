import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import "./Video.css";

function Video() {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://v16-webapp.tiktok.com/417769c7a3b80bd7fbc3e3a4c9e3f83d/62e65c81/video/tos/alisg/tos-alisg-pve-0037/1f6488b9cec944a38d4713356b014576/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3976&bt=1988&btag=80000&cs=0&ds=3&ft=eXd.6HjzMyq8ZbMY1we2N-4Uml7Gb&mime_type=video_mp4&qs=0&rc=OGc6NzMzaGRmM2g8ZDo7NkBpanRveTc6ZjdlPDMzODgzNEBiLi0vX2ExNWExYi40Y18vYSM0Nl4tcjRvMnJgLS1kLy1zcw%3D%3D&l=202207310441280102510581822707C154"
      ></video>
      <VideoFooter
        channel="rafehqazi"
        description="Check out this dance"
        song="Usher-Yeah"
      />
      <VideoSidebar />
    </div>
  );
}

export default Video;
