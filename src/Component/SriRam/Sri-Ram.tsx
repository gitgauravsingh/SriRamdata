import React, { useRef, useState } from "react";
import Style from "./sriram.module.scss";

export interface ISriRam {
  isSriRam: any;
  setIsSriRam: any;
}

const SriRam: React.FC<ISriRam> = ({ isSriRam, setIsSriRam }) => {
  const [showRoseVideo, setShowRoseVideo] = useState(false);
  const [showPrashadVedio, setShowPrashadVedio] = useState(false);
  const [showDiyaVedio, setShowDiyaVedio] = useState(false);
  const [showArtiVedio, setShowArtiVedio] = useState(false);
  const [showButtonBar, setShowButtonBar] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [vedioEndedFirst, setVideoEndedFirst] = useState(false);
  const fifthvedioref: any = useRef(null);
  const roseref: any = useRef(null);
  const prashadref: any = useRef(null);
  const diyaref: any = useRef(null);
  const artiref: any = useRef(null);

  const Roseended = () => {
    setShowRoseVideo(false);
  };

  const Prashadended = () => {
    setShowPrashadVedio(false);
  };

  const diyaended = () => {
    setShowDiyaVedio(false);
  };

  const artiended = () => {
    setShowArtiVedio(false);
  };

  const handleRoseClick = () => {
    setShowRoseVideo(true);
    if (roseref.current) {
      roseref.current.play();
    }
  };

  const handlePrashadClick = () => {
    setShowPrashadVedio(true);
    if (prashadref.current) {
      prashadref.current.play();
    }
  };

  const handleDiyaClick = () => {
    setShowDiyaVedio(true);
    if (diyaref.current) {
      diyaref.current.play();
    }
  };

  const handleArtiClick = () => {
    setShowArtiVedio(true);
    if (artiref.current) {
      artiref.current.play();
    }
  };

  const handleTimeUpdate = () => {
    if (fifthvedioref.current) {
      const currentTime = fifthvedioref.current.currentTime;
      const duration = fifthvedioref.current.duration;
      if (duration - currentTime <= 15) {
        setShowButtonBar(true);
        setVideoEndedFirst(true);
      }
    }
  };

  const handleFifthVideoEnd = () => {
    setIsSriRam(false);
    setVideoEnded(true);
    setVideoEndedFirst(false);
  };

  return (
    <div className={Style.Sriramji}>
      {isSriRam && (
        <div className={Style.fifthvideodata}>
          <div className={Style.vediobar}>
            <video
              ref={fifthvedioref}
              autoPlay
              controls
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleFifthVideoEnd}
              style={{ width: "100%", objectFit: "cover", height: "100vh" }}
            >
              <source
                src="https://www.bhaskar.com/__static__/2.0/ram-mandir/videos/v8/hi-desktop-p3-v3.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          {showButtonBar && (
            <div className={Style.prashadbar}>
              {vedioEndedFirst && (
                <div className={Style.dataanimation}>
                  <div className={Style.mainflower}>
                    <span>
                      <img
                        className={Style.img3}
                        src="https://images.bhaskarassets.com/thumb/512x0/web2images/web-frontend/3D-Ram-Mandir/pusph-chadhaye-new.png"
                      />
                    </span>
                    <h2>पुष्प चढ़ाएं</h2>
                  </div>
                  <div className={Style.mainflower}>
                    <span>
                      <img
                        className={Style.img3}
                        src="https://images.bhaskarassets.com/thumb/512x0/web2images/web-frontend/3D-Ram-Mandir/prasad-chadhayye-new.png"
                      />
                    </span>
                    <h2>प्रसाद चढ़ाएं</h2>
                  </div>
                  <div className={Style.mainflower}>
                    <span>
                      <img
                        className={Style.img3}
                        src="https://images.bhaskarassets.com/thumb/512x0/web2images/web-frontend/3D-Ram-Mandir/sri-ram-joti-jalayen-new.png"
                      />
                    </span>
                    <h2>श्रीराम ज्योति जलाएं</h2>
                  </div>
                  <div className={Style.mainflower}>
                    <span>
                      <img
                        className={Style.img3}
                        src="https://images.bhaskarassets.com/thumb/512x0/web2images/web-frontend/3D-Ram-Mandir/poori-arti-kare-new.png"
                      />
                    </span>
                    <h2>पूरी आरती करें</h2>
                  </div>
                </div>
              )}
              <div className={Style.overlaybar}></div>
              {videoEnded && (
                <div className={Style.databar}>
                  <p>
                    <span>
                      <img
                        className={Style.img1}
                        src="https://images.bhaskarassets.com/thumb/512x0/web2images/web-frontend/3D-Ram-Mandir/light-effect.png"
                        alt=""
                      />

                      <img
                        className={Style.img2}
                        src="https://images.bhaskarassets.com/thumb/512x0/web2images/web-frontend/3D-Ram-Mandir/pusph-chadhaye-new.png"
                        onClick={handleRoseClick}
                      />
                    </span>
                    <h2>पुष्प चढ़ाएं</h2>
                  </p>
                  <p>
                    <span>
                      <img
                        className={Style.img1}
                        src="https://images.bhaskarassets.com/thumb/512x0/web2images/web-frontend/3D-Ram-Mandir/light-effect.png"
                        alt=""
                      />

                      <img
                        className={Style.img2}
                        src="https://images.bhaskarassets.com/thumb/512x0/web2images/web-frontend/3D-Ram-Mandir/prasad-chadhayye-new.png"
                        onClick={handlePrashadClick}
                      />
                    </span>
                    <h2>प्रसाद चढ़ाएं</h2>
                  </p>

                  <p>
                    <span>
                      <img
                        className={Style.img1}
                        src="https://images.bhaskarassets.com/thumb/512x0/web2images/web-frontend/3D-Ram-Mandir/light-effect.png"
                        alt=""
                      />

                      <img
                        className={Style.img2}
                        src="https://images.bhaskarassets.com/thumb/512x0/web2images/web-frontend/3D-Ram-Mandir/sri-ram-joti-jalayen-new.png"
                        onClick={handleDiyaClick}
                      />
                    </span>
                    <h2>श्रीराम ज्योति जलाएं</h2>
                  </p>

                  <p>
                    <span>
                      <img
                        className={Style.img1}
                        src="https://images.bhaskarassets.com/thumb/512x0/web2images/web-frontend/3D-Ram-Mandir/light-effect.png"
                        alt=""
                      />

                      <img
                        className={Style.img2}
                        src="https://images.bhaskarassets.com/thumb/512x0/web2images/web-frontend/3D-Ram-Mandir/poori-arti-kare-new.png"
                        onClick={handleArtiClick}
                      />
                    </span>
                    <h2>पूरी आरती करें</h2>
                  </p>
                </div>
              )}
            </div>
          )}
          {showRoseVideo && (
            <div className={Style.rosevideo}>
              <video
                autoPlay
                onEnded={Roseended}
                style={{ width: "100%", objectFit: "cover" }}
              >
                <source
                  src="https://www.bhaskar.com/__static__/2.0/ram-mandir/interactions/v1/desktop/Flower_SingleAnim-vp9-chrome.webm"
                  type="video/webm"
                />
              </video>
              <audio ref={roseref}>
                <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/audio/v1/flower-shower.mp3" />
              </audio>
            </div>
          )}
          {showPrashadVedio && (
            <div className={Style.prashadvideo}>
              <video
                autoPlay
                onEnded={Prashadended}
                style={{ width: "100%", objectFit: "cover" }}
              >
                <source
                  src="https://www.bhaskar.com/__static__/2.0/ram-mandir/interactions/v1/desktop/Prasad_SingleAnim-vp9-chrome.webm"
                  type="video/webm"
                />
              </video>
              <audio ref={prashadref}>
                <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/audio/v1/prasad-audio.mp3" />
              </audio>
            </div>
          )}
          {showDiyaVedio && (
            <div className={Style.prashadvideo}>
              <video
                autoPlay
                onEnded={diyaended}
                style={{ width: "100%", objectFit: "cover" }}
              >
                <source
                  src="https://www.bhaskar.com/__static__/2.0/ram-mandir/interactions/v1/desktop/RamJyoti_SingleAnim-vp9-chrome.webm"
                  type="video/webm"
                />
              </video>
              <audio ref={diyaref}>
                <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/audio/v1/ram-jyoti-audio.mp3" />
              </audio>
            </div>
          )}
          {showArtiVedio && (
            <div className={Style.prashadvideo}>
              <video
                autoPlay
                loop
                onEnded={artiended}
                style={{ width: "100%", objectFit: "cover" }}
              >
                <source
                  src="https://www.bhaskar.com/__static__/2.0/ram-mandir/interactions/v1/desktop/AartiThali_Loop-vp9-chrome.webm"
                  type="video/webm"
                />
              </video>
              <audio ref={artiref}>
                <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/audio/v1/aarti-audio.mp3" />
              </audio>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SriRam;
