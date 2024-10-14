import { useRef, useState } from 'react';

const AUDIO_URL = 'https://audioboom.com/posts/8562837.mp3';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function handleClick() {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
  }
  function handleReset() {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  }

  return (
    <>
      <button onClick={handleReset}>resetear</button>
      <button onClick={handleClick}>{isPlaying ? '⏸️' : '▶️'}</button>
      <audio ref={audioRef} src={AUDIO_URL} />
    </>
  );
}
