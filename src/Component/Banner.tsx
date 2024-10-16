import React, { useState } from "react";
import Style from "./banner.module.scss";
import Video from "./Video";
import SriRam from "./SriRam/Sri-Ram";

const Banner = () => {
  const [showImage, setShowImage] = useState(true);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isVideoSriRam, setIsVideoSriRam] = useState(false);

  const handleClick = () => {
    setIsVideoVisible(true);
    setShowImage(false);
  };

  const handleSriRam = () => {
    setIsVideoSriRam(true);
    setShowImage(false);
  };

  return (
    <div className={Style.bannerbar}>
      {showImage && (
        <div className={Style.wrapper}>
          <div className={Style.imgbar}>
            <>
              <img
                src="https://images.bhaskarassets.com/thumb/512x0/web2images/web-frontend/3D-Ram-Mandir/pura-mandir-dekhe-btn-hi.png"
                onClick={handleClick}
                alt="Show Video"
              />
              <img
                src="https://images.bhaskarassets.com/thumb/512x0/web2images/web-frontend/3D-Ram-Mandir/ram-lala-ke-darshon-btn-hi.png"
                alt="Another Action"
                onClick={handleSriRam}
              />
            </>
          </div>
        </div>
      )}
      <Video
        isfirstvedio={isVideoVisible}
        setIsfirstvedio={setIsVideoVisible}
      />
      <SriRam isSriRam={isVideoSriRam} setIsSriRam={setIsVideoVisible} />
    </div>
  );
};

export default Banner;
