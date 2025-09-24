import React, { useEffect, useState } from "react";
import "./styles.css";

const Tempo: React.FC = () => {
  const [tempo, setTempo] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const startDate = new Date("2025-06-07T00:00:00");

    const atualizar = () => {
      const agora = new Date();
      const diff = agora.getTime() - startDate.getTime();

      const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diff / (1000 * 60)) % 60);
      const segundos = Math.floor((diff / 1000) % 60);

      setTempo({ dias, horas, minutos, segundos });
    };

    atualizar();
    const intervalo = setInterval(atualizar, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="tempo-container">
      <h2 className="tempo-titulo">Te amando desde 07/06/2025</h2>
      <div className="tempo-digital">
        <span>{tempo.dias} dias</span> ·{" "}
        <span>{String(tempo.horas).padStart(2, "0")}h</span> ·{" "}
        <span>{String(tempo.minutos).padStart(2, "0")}m</span> ·{" "}
        <span>{String(tempo.segundos).padStart(2, "0")}s</span>
      </div>

      <div className="aniversario-texto">
        <div className="aniversario-texto">
  <h3>Feliz Aniversário, meu amor!</h3>

  <p>
    Na primeira vez que te dei um beijo, estava tocando minha música favorita no
    mundo. O que eu não sabia era que você ia virar a minha pessoa favorita do
    mundo  e aquela música se tornaria <strong>nossa música</strong>.
  </p>

  <p>
    Você é minha vida toda, branquinha, meu sol, meu mundo.
  </p>

  <p>
    Hoje não é apenas mais um dia, é a celebração da pessoa mais incrível que já
    conheci. Desde que você entrou na minha vida, tudo ganhou mais cor, mais
    sentido e mais alegria. Cada sorriso seu é um presente, cada abraço é um lar
    e cada momento ao seu lado é um tesouro que guardo no coração.
  </p>

  <p>
    Te desejo sempre o melhor, e que você tenha muitos anos de saúde para viver
    comigo, com Yohan, Helena e Mingau.
  </p>

  <h4>Parabéns pelo seu dia! 🎉</h4>
</div>

      </div>
    </div>
  );
};

export default Tempo;
