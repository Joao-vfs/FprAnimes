import React from 'react'
import {Link} from 'react-router-dom'

import { Rodape } from './styles'

import rodape from  '../../img/rodape.png'

export default function Footer() {
  return (
    <Rodape>
      <Link to={'/TodosOsAnimes'}><img src={rodape}/></Link>
    </Rodape>
  )
}
