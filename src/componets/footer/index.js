import React from 'react'
import { Link } from 'react-router-dom'
import { Gato, Rodape } from './styles'

import Yuzu from '../../img/yuzu 1.png'
import logoFooter from '../../img/icon logo animes branco 1.png'



export default function Footer() {
  return (
    <Rodape>
      <Gato src={Yuzu} />
      <h1>Ainda está procurando algo pra assistir?<strong><br/>
        Confira o nosso acervo completo</strong></h1>
        <Link to={'/all'}>
        <button>VER TUDO</button>
        </Link>
        <div>
          <p>© 2023 FPR Animes - Todos os direitos reservados.</p>
          <img src={logoFooter} />
        </div>
    </Rodape>
  )
}
