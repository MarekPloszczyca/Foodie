import { useRef, useState } from "react";
import video from "../../assets/Video/MealVideo.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function Video() {
  const media = useRef<HTMLVideoElement>(null);
  const [play, setPlay] = useState(false);

  return (
    <div className="relative">
      <video ref={media} muted>
        <source src={video} type="video/mp4" />
      </video>
      {!play && (
        <button
          onClick={() => {
            setPlay(true);
            setTimeout(() => {
              setPlay(false);
            }, 18000);
            media.current !== null ? media.current.play() : null;
          }}
          className="absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange  p-8 rounded-full before:contents-[''] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:bg-orange before:rounded-full before:animate-button"
        >
          <FontAwesomeIcon
            className="relative left-1 top-1"
            icon={faPlay}
            style={{ width: "42px", height: "42px" }}
          />
        </button>
      )}
    </div>
  );
}
