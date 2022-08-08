import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    //BEM
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://v16-webapp.tiktok.com/f96e00140fb51d3abf81715a29ff5fd1/62ee79f8/video/tos/alisg/tos-alisg-pve-0037/0766b36ef1f047188c37c4475114efad/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=4462&bt=2231&btag=80000&cs=0&ds=3&ft=z_piDPd82NvjVAZC4OzfuaYQFAe4nRQjlg3JyeOB&mime_type=video_mp4&qs=0&rc=Njo8ZDo2ZGc7aDVlZGRoZEBpM2ptcjQ6ZmlqZDMzODgzNEAuXzVgMGM1Xy8xYmM2Xy9hYSNzZC9jcjQwMmtgLS1kLy1zcw%3D%3D&l=20220806082500010245242107212C6F4F"
          channel="rafehqazi"
          description="WOW this works..."
          song="The sunny sonny"
          likes={123}
          message={400}
          shares={200}
        />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
