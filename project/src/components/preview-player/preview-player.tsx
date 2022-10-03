import {useEffect, useRef} from 'react';
import {VIDEO_PREVIEW_DELAY} from '../../const';

type PreviewPlayerProps = {
  image: string,
  previewVideo: string,
};

function PreviewPlayer ({image, previewVideo}: PreviewPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const delay: NodeJS.Timeout = setTimeout(
      () => videoRef.current?.play(),
      VIDEO_PREVIEW_DELAY);

    return () => clearTimeout(delay);
  });

  return (
    <video
      ref={videoRef}
      poster={image}
      width="280"
      height="175"
      loop
      muted
    >
      <source src={previewVideo} type="video/mp4" />
      Your browser doesn&apos;t support this video.
    </video>
  );
}

export default PreviewPlayer;
