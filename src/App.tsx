import React from "react";
import Carousel from "./components/Carrosel";
import MusicPlayer from "./components/musica";
import Tempo from "./components/Timer";

const App: React.FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* Player vem primeiro */}
      <MusicPlayer />
      <div style={{ marginTop: "40px" }}>
        <Carousel />
      </div>
      <Tempo/>
    </div>
  );
};

export default App;
