import { useState } from "react";

// Components
import VideoButton from "../UI/VideoButton";

// CSS
import { Button } from "@mantine/core";

// assets
import VideoBackground from "../../assets/video/Crossfit-Cinematic.mp4";

const Main = () => {
  const [toggleMute, setToggleMute] = useState(true);
  const [stopVideo, setStopVideo] = useState(false);
  return (
    <div>
      <div>Hello</div>
      {stopVideo ? (
        <img src="https://media.istockphoto.com/photos/young-man-exercising-using-battle-rope-picture-id1149241542?k=20&m=1149241542&s=612x612&w=0&h=_QYzSlE-UpHfFXrh38S3BnrMLQMUlw0iVHecDN0GuDc=" />
      ) : (
        <video
          type="video/mp4"
          src={VideoBackground}
          muted={toggleMute ? "True" : ""}
          loop
          autoPlay
        />
      )}
      <VideoButton action={() => setToggleMute(!toggleMute)}>
        Toggle Mute
      </VideoButton>
      <VideoButton action={() => setStopVideo(!stopVideo)}>
        Toggle Play
      </VideoButton>
    </div>
  );
};

export default Main;
