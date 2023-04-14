import styled from "styled-components";

import banner from '../../img/banner.png'

export const Cabecalho = styled.nav`
    display: flex;
    justify-content: space-between;
    background-image: url(${banner});
    background-repeat: no-repeat;
    min-height: 73vh;
    margin: 0 auto;

  a{
    text-decoration: none;
    color:red;
  }

  ul{
    list-style: none;
  }
`  