import { useEffect, useRef, useState } from "react";
import { Play, Pause, Music2 } from "lucide-react";
import song from "@/assets/make-you-feel-my-love.mp3.asset.json";

const BackgroundMusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(song.url);
    audio.loop = true;
    audio.volume = 0.5;
    audio.preload = "auto";
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch (e) {
        console.error("Audio play failed", e);
      }
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Pause background music" : "Play background music"}
      className="fixed bottom-6 left-6 z-40 group flex items-center gap-2 px-4 py-3 rounded-full bg-background/70 backdrop-blur-md border border-gold/30 text-cream shadow-lg hover:border-gold/60 hover:bg-background/90 transition-all"
    >
      <span className="relative flex items-center justify-center w-5 h-5">
        {playing ? <Pause size={16} className="text-gold" /> : <Play size={16} className="text-gold" />}
      </span>
      <span className="font-body text-[10px] tracking-[0.25em] uppercase text-cream/80 hidden sm:inline">
        {playing ? "Pause" : "Play"} Our Song
      </span>
      <Music2 size={14} className="text-gold/70 sm:hidden" />
    </button>
  );
};

export default BackgroundMusicPlayer;
