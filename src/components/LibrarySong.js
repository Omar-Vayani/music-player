import React from "react";

const LibrarySong = ({
  setSongs,
  songs,
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  id,
}) => {
  //
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    //active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        console.log("working");
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={`${song.name} album cover`} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
