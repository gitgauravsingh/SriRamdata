import React, { useEffect, useRef, useState } from "react";
import Style from "./vedio.module.scss";

export interface IVedio {
  isfirstvedio: boolean;
  setIsfirstvedio: React.Dispatch<React.SetStateAction<boolean>>;
}

const Video: React.FC<IVedio> = ({ isfirstvedio, setIsfirstvedio }) => {
  const [isSecondvedio, setIsSecondvedio] = useState(false);
  const [thirdvedio, setThirdvedio] = useState(false);
  const [fourthvedio, setFourthvedio] = useState(false);
  const [fifthvedio, setFifthvedio] = useState(false);
  const [zoomin, setZoomin] = useState(false);
  const [showRoseVideo, setShowRoseVideo] = useState(false);
  const [showPrashadVedio, setShowPrashadVedio] = useState(false);
  const [showDiyaVedio, setShowDiyaVedio] = useState(false);
  const [showArtiVedio, setShowArtiVedio] = useState(false);
  const [showButtonBar, setShowButtonBar] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoEndedFirst, setVideoEndedFirst] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const audioref = useRef<HTMLAudioElement>(null);
  const videoRefs = {
    second: useRef<HTMLVideoElement>(null),
    third: useRef<HTMLVideoElement>(null),
    fourth: useRef<HTMLVideoElement>(null),
    fifth: useRef<HTMLVideoElement>(null),
    rose: useRef<HTMLVideoElement>(null),
    prashad: useRef<HTMLVideoElement>(null),
    diya: useRef<HTMLVideoElement>(null),
    arti: useRef<HTMLVideoElement>(null),
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleVideoEnd = () => {
    setIsSecondvedio(true);
    setZoomin(true);
  };

  const handleThirdVideoEnd = () => {
    setFourthvedio(true);
    setZoomin(true);
  };

  const handleFifthVideoEnd = () => {
    setVideoEnded(true);
    setVideoEndedFirst(false);
  };

  const playVideo = (
    ref: React.RefObject<HTMLVideoElement>,
    audioRef: React.RefObject<HTMLAudioElement>
  ) => {
    ref.current?.play();
    audioRef.current?.play();
  };

  const handleShowVideo = (
    setter: React.Dispatch<React.SetStateAction<boolean>>,
    ref: React.RefObject<HTMLVideoElement>,
    audioRef: React.RefObject<HTMLAudioElement>
  ) => {
    setter(true);
    playVideo(ref, audioRef);
  };

  const handleRoseClick = () =>
    handleShowVideo(setShowRoseVideo, videoRefs.rose, audioref);
  const handlePrashadClick = () =>
    handleShowVideo(setShowPrashadVedio, videoRefs.prashad, audioref);
  const handleDiyaClick = () =>
    handleShowVideo(setShowDiyaVedio, videoRefs.diya, audioref);
  const handleArtiClick = () =>
    handleShowVideo(setShowArtiVedio, videoRefs.arti, audioref);

  const handleTimeUpdate = () => {
    if (videoRefs.fifth.current) {
      const { currentTime, duration } = videoRefs.fifth.current;
      if (duration - currentTime <= 15) {
        setShowButtonBar(true);
        setVideoEndedFirst(true);
      }
    }
  };

  return (
    <div className={Style.vediobar}>
      {isfirstvedio && (
        <div className={Style.firstvedio}>
          <video
            onEnded={handleVideoEnd}
            autoPlay
            style={{ width: "100%", objectFit: "cover", height: "100vh" }}
          >
            <source
              src={
                !isMobile
                  ? "https://www.bhaskar.com/__static__/2.0/ram-mandir/videos/v8/hi-desktop-p3-v1.mp4"
                  : "https://www.bhaskar.com/__static__/2.0/ram-mandir/videos/v8/hi-mobile-p3-v1.mp4"
              }
              type="video/mp4"
            />
          </video>
        </div>
      )}
      {isSecondvedio && (
        <div className={Style.secondvedio}>
          <video
            ref={videoRefs.second}
            autoPlay
            style={{ width: "100%", objectFit: "cover", height: "100vh" }}
          >
            <source
              src="https://www.bhaskar.com/__static__/2.0/ram-mandir/interactions/desktop-ghanta1-vp9-chrome.webm"
              type="video/mp4"
            />
          </video>
          <div className={Style.iconimg}>
            <img
              src="https://images.bhaskarassets.com/thumb/128x0/web2images/web-frontend/3D-Ram-Mandir/new-bell-icon-hi.png"
              alt=""
              onClick={() => playVideo(videoRefs.second, audioref)}
            />
            <audio ref={audioref}>
              <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/ghanta2.mp3" />
            </audio>
          </div>
          <div className={Style.buttonbar}>
            <img
              className={`${zoomin ? Style.zoomin : ""} ${
                zoomin ? Style.zoomAnimation : ""
              }`}
              src="https://images.bhaskarassets.com/thumb/512x0/web2images/web-frontend/3D-Ram-Mandir/cta-button-2-hi.png"
              alt=""
              onClick={() => {
                setIsfirstvedio(false);
                setIsSecondvedio(false);
                setThirdvedio(true);
                setZoomin(false);
              }}
            />
          </div>
        </div>
      )}
      {thirdvedio && (
        <div className={Style.thirdvideo}>
          <video
            ref={videoRefs.third}
            onEnded={handleThirdVideoEnd}
            autoPlay
            style={{ width: "100%", objectFit: "cover", height: "100vh" }}
          >
            <source
              src={
                !isMobile
                  ? "https://www.bhaskar.com/__static__/2.0/ram-mandir/videos/v8/hi-desktop-p3-v2.mp4"
                  : "https://www.bhaskar.com/__static__/2.0/ram-mandir/videos/v8/hi-mobile-p3-v2.mp4"
              }
              type="video/mp4"
            />
          </video>
        </div>
      )}
      {fourthvedio && (
        <div className={Style.secondvedio}>
          <video
            ref={videoRefs.fourth}
            autoPlay
            style={{ width: "100%", objectFit: "cover", height: "100vh" }}
          >
            <source
              src="https://www.bhaskar.com/__static__/2.0/ram-mandir/interactions/desktop-ghanta1-vp9-chrome.webm"
              type="video/mp4"
            />
          </video>
          <div className={Style.iconimg}>
            <img
              src="https://images.bhaskarassets.com/thumb/128x0/web2images/web-frontend/3D-Ram-Mandir/new-bell-icon-hi.png"
              alt=""
              onClick={() => playVideo(videoRefs.fourth, audioref)}
            />
            <audio ref={audioref}>
              <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/ghanta2.mp3" />
            </audio>
          </div>
          <div className={Style.buttonbar}>
            <img
              className={`${zoomin ? Style.zoomin : ""} ${
                zoomin ? Style.zoomAnimation : ""
              }`}
              src="https://images.bhaskarassets.com/thumb/512x0/web2images/web-frontend/3D-Ram-Mandir/cta-button-3-hi.png"
              alt=""
              onClick={() => {
                setThirdvedio(false);
                setFourthvedio(false);
                setFifthvedio(true);
                setZoomin(false);
              }}
            />
          </div>
        </div>
      )}
      {fifthvedio && (
        <div className={Style.fifthvideodata}>
          <div className={Style.vediobar}>
            <video
              ref={videoRefs.fifth}
              autoPlay
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleFifthVideoEnd}
              style={{ width: "100%", objectFit: "cover", height: "100vh" }}
            >
              <source
                src={
                  !isMobile
                    ? "https://www.bhaskar.com/__static__/2.0/ram-mandir/videos/v8/hi-desktop-p3-v3.mp4"
                    : "https://www.bhaskar.com/__static__/2.0/ram-mandir/videos/v8/hi-mobile-p3-v3.mp4"
                }
                type="video/mp4"
              />
            </video>
          </div>
          {showButtonBar && (
            <div className={Style.prashadbar}>
              {videoEndedFirst && (
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
                    <h2>ज्योति जलाएं</h2>
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
                    <h2>ज्योति जलाएं</h2>
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
                onEnded={() => setShowRoseVideo(false)}
                style={{ width: "100%", objectFit: "cover" }}
              >
                <source
                  src="https://www.bhaskar.com/__static__/2.0/ram-mandir/interactions/v1/desktop/Flower_SingleAnim-vp9-chrome.webm"
                  type="video/webm"
                />
              </video>
              <audio ref={videoRefs.rose}>
                <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/audio/v1/flower-shower.mp3" />
              </audio>
            </div>
          )}
          {showPrashadVedio && (
            <div className={Style.prashadvideo}>
              <video
                autoPlay
                onEnded={() => setShowPrashadVedio(false)}
                style={{ width: "100%", objectFit: "cover" }}
              >
                <source
                  src="https://www.bhaskar.com/__static__/2.0/ram-mandir/interactions/v1/desktop/Prasad_SingleAnim-vp9-chrome.webm"
                  type="video/webm"
                />
              </video>
              <audio ref={videoRefs.prashad}>
                <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/audio/v1/prasad-audio.mp3" />
              </audio>
            </div>
          )}
          {showDiyaVedio && (
            <div className={Style.prashadvideo}>
              <video
                autoPlay
                onEnded={() => setShowDiyaVedio(false)}
                style={{ width: "100%", objectFit: "cover" }}
              >
                <source
                  src="https://www.bhaskar.com/__static__/2.0/ram-mandir/interactions/v1/desktop/RamJyoti_SingleAnim-vp9-chrome.webm"
                  type="video/webm"
                />
              </video>
              <audio ref={videoRefs.diya}>
                <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/audio/v1/ram-jyoti-audio.mp3" />
              </audio>
            </div>
          )}
          {showArtiVedio && (
            <div className={Style.prashadvideo}>
              <video
                autoPlay
                loop
                onEnded={() => setShowArtiVedio(false)}
                style={{ width: "100%", objectFit: "none" }}
              >
                <source
                  src="https://www.bhaskar.com/__static__/2.0/ram-mandir/interactions/v1/desktop/AartiThali_Loop-vp9-chrome.webm"
                  type="video/webm"
                />
              </video>
              <audio ref={videoRefs.arti}>
                <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/audio/v1/aarti-audio.mp3" />
              </audio>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Video;
