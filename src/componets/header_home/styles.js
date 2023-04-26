import styled from "styled-components";

import banner from '../../img/banner.png'



export const Cabecalho = styled.nav`

  display: flex;
  justify-content: space-between;
  background-image: url(${banner});
  height: 71vh;
  

  .Bars{
    position: absolute;
    left: -1%;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }



  img{
    width: 192px;
    height: 118px;
    margin: 1rem 0 0 -37em ;

  }

  .Lupa{
    position: absolute;
    top: 7%;
    right: 3%;
  }

  a{
    text-decoration: none;
    color:red;
  }

  ul{
    list-style: none;
  }
`
