import { useState, useRef } from 'react';

function useVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  function toggleVideo() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
  }

  return { isPlaying, toggleVideo, videoRef };
}

export default function VideoPlayer() {
  const { isPlaying, toggleVideo, videoRef } = useVideo();

  return (
    <>
      <button onClick={toggleVideo}>{isPlaying ? 'Pause' : 'Play'}</button>
      <video ref={videoRef} width="250">
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
