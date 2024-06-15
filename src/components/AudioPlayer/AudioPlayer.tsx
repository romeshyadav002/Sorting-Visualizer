import {
  AudioHTMLAttributes,
  FC,
  Ref,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { throttle } from 'lodash';

export const useAudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [currentTimestamp, setCurrentTimestamp] = useState(0);

  const playAudio = () => {
    audioRef?.current?.play();
    setIsAudioPlaying(true);
  };

  const pauseAudio = () => {
    audioRef?.current?.pause();
    setIsAudioPlaying(false);
  };

  const muteAudio = () => {
    if (!audioRef?.current) return;
    audioRef.current.muted = true;
  };

  const unmuteAudio = () => {
    if (!audioRef?.current) return;
    audioRef.current.muted = false;
  };

  const setVolume = (volume: number = 0.5) => {
    if (!audioRef?.current) return;
    audioRef.current.volume = volume;
  };

  const seekTo = (timestamp: number) => {
    if (!audioRef?.current) return;
    audioRef.current.currentTime = timestamp;
    setCurrentTimestamp(timestamp);
  };

  const handlePlay = () => {
    setIsAudioPlaying(true);
  };

  const handlePause = () => {
    setIsAudioPlaying(false);
  };

  const handleTimeChanged = () => {
    if (!audioRef?.current) return;
    setCurrentTimestamp(audioRef.current.currentTime);
  };

  const handleTimeChangedD = useMemo(
    () => throttle(handleTimeChanged, 700),
    [],
  );

  useEffect(() => {
    const player = audioRef.current;

    if (player) {
      player.addEventListener('play', handlePlay);
      player.addEventListener('pause', handlePause);
      player.addEventListener('timeupdate', handleTimeChangedD);

      return () => {
        // Remove event listeners
        player.removeEventListener('play', handlePlay);
        player.removeEventListener('pause', handlePause);
        player.addEventListener('timeupdate', handleTimeChangedD);
      };
    }
  }, [handleTimeChangedD]);

  return {
    audioRef,
    isAudioPlaying,
    currentTimestamp,
    playAudio,
    pauseAudio,
    seekTo,
    setVolume,
  };
};

export interface AudioPlayerProps
  extends AudioHTMLAttributes<HTMLAudioElement> {
  url?: string;
  ref?: any;
}

const AudioPlayer: FC<AudioPlayerProps> = forwardRef(
  ({ url, ...rest }, ref: Ref<HTMLAudioElement>) => {
    return (
      <audio controls ref={ref}>
        <source src={url} type="audio/mp3" />
      </audio>
    );
  },
);

AudioPlayer.displayName = 'AudioPlayer';

export default AudioPlayer;
