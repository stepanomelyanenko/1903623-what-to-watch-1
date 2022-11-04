import { useEffect, useRef } from 'react';

type VideoPlayerProps = {
  poster: string;
  src: string;
  isMute: boolean;
  isPlay: boolean;
}

export default function VideoPlayer({poster, src, isMute, isPlay}: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      if (isMute) {
        videoRef.current.muted = true;
      } else {
        videoRef.current.muted = false;
      }
    }
  }, [isMute]);

  useEffect(() => {
    if (videoRef.current !== null) {
      if (isPlay) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlay]);
  return(

    <video src={src} className="player__video" poster={poster} ref={videoRef}></video>

  );
}
