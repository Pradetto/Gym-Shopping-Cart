import { useState } from "react";

// assets
import VideoBackground from "../../assets/video/Crossfit.mp4";

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
          pause
          loop
          autoPlay
        />
      )}
      <button onClick={() => setToggleMute(!toggleMute)}>Toggle Mute</button>
      <button onClick={() => setStopVideo(!stopVideo)}>Toggle Play</button>
    </div>
  );
};

export default Main;
