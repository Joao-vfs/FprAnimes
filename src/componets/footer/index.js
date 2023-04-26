import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import rodape from '../../img/rodape.png'

export const Rodape = styled.footer`
  background-image: url(${rodape});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-width: auto;
  height: 300px;

  @media (min-width: 400px) , (min-height: 850px) {
    min-width: 100%;
  }

  img{
    max-width: 100%;
    min-height: auto;
  }
`

export default function Footer() {
  return (
    <Rodape>
      <Link to={'/TodosOsAnimes'}></Link>
    </Rodape>
  )
}
