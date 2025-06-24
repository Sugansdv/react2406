import React, { useRef, useState, useEffect } from 'react';
import playlist from '../data/playlist';

function Player() {
  const audioRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);

  const currentSong = playlist[currentIndex];

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = volume;
    isPlaying ? audio.play() : audio.pause();

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    audio.addEventListener('timeupdate', updateProgress);
    return () => audio.removeEventListener('timeupdate', updateProgress);
  }, [isPlaying, currentIndex, volume]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const nextSong = () => {
    setCurrentIndex((currentIndex + 1) % playlist.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentIndex((currentIndex - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const percent = e.target.value;
    audio.currentTime = (percent / 100) * audio.duration;
    setProgress(percent);
  };

  return (
    <div className="card shadow p-4">
      <h5 className="mb-3">Now Playing</h5>
      <h4>{currentSong.title}</h4>
      <p className="text-muted">{currentSong.artist}</p>

      <audio ref={audioRef} src={currentSong.src} />

      <div className="d-flex align-items-center gap-3 mt-3">
        <button className="btn btn-outline-secondary" onClick={prevSong}>⏮️</button>
        <button className="btn btn-primary" onClick={togglePlay}>
          {isPlaying ? '⏸️ Pause' : '▶️ Play'}
        </button>
        <button className="btn btn-outline-secondary" onClick={nextSong}>⏭️</button>
      </div>

      <input
        type="range"
        className="form-range mt-3"
        min="0"
        max="100"
        value={progress}
        onChange={handleSeek}
      />

      <div className="mt-2">
        <label className="form-label">🔊 Volume</label>
        <input
          type="range"
          className="form-range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={e => setVolume(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
}

export default Player;
