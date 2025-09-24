import React from "react";
import "./styles.css";
import albumCover from "../../assets/album-teen.jpg"
import blackSong from "../../assets/17 - Black.mp3"
const MusicPlayer: React.FC = () => {
  return (
    <div className="player-container">
      <img
        src={albumCover}
        alt="Pearl Jam - Ten"
        className="album-cover"
      />
      <h2>Pearl Jam - Black</h2>
      <audio controls>
        <source src={blackSong} type="audio/mp3" />
        Seu navegador não suporta o player de áudio.
      </audio>
    </div>
  );
};

export default MusicPlayer;
