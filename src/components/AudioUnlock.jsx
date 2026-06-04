import { useEffect } from "react";
import { AudioContext } from "three";

export function useAudioUnlock() {
  useEffect(() => {
    const unlock = () => {
      AudioContext.getContext().resume();

      window.removeEventListener("click", unlock);
      window.removeEventListener("touchstart", unlock);
    };

    window.addEventListener("click", unlock);
    window.addEventListener("touchstart", unlock);
    return () => {
      window.removeEventListener("click", unlock);
      window.removeEventListener("touchstart", unlock);
    };
  }, []);
}