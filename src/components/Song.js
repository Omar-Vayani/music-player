import React from "react";

const Song = ({ currentSong, isPlaying }) => {
  const s = {
    boxShadow: `0px 0px 60px ${currentSong.color[0]}, 0px 0px 20px ${currentSong.color[1]}`,
  };
  return (
    <div className="song-container">
      <img
        className={isPlaying ? "active" : "continue"}
        style={s}
        src={currentSong.cover}
        alt={`Album: ${currentSong.name}}`}
      />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
