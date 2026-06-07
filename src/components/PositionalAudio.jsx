import { PositionalAudio } from "@react-three/drei";
import { useRef, useEffect } from "react";

export default function PositionalSound({ url, playing }) {
  const audioRef = useRef();

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.setVolume(0.5);      
    audioRef.current.setRolloffFactor(2);  
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  return (
    <PositionalAudio
      ref={audioRef}
      url={url}
      distance={2}
      loop
    />
  );
}