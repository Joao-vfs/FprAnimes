import React from "react";
import { Link } from "react-router-dom";

import { Mascot, Baseboard } from "./styles";

import Yuzu from "../../assets/images/yuzu 1.png";
import LogoFooter from "../../assets/images/icon logo animes branco 1.png";

export default function Footer() {
  return (
    <Baseboard>
      <Mascot src={Yuzu} alt="Mascote do Rodapé" />

      <h1>
        Ainda está procurando algo pra assistir?
        <strong>
          <br />
          Confira o nosso acervo completo
        </strong>
      </h1>

      <Link to={"/all"}>
        <button>VER TUDO</button>
      </Link>

      <div>
        <p>© 2023 FPR Animes - Todos os direitos reservados.</p>
        <img src={LogoFooter} alt="Logo Fpr-Anime Branco Pequeno" />
      </div>
    </Baseboard>
  );
}
