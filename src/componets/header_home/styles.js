import styled from "styled-components";
import banner from '../../img/banner.png';


export const SidebarContainer = styled.div`

  svg{
    position: absolute;
    left: 1%;
    top: 2%;
    color: white;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: white;
  }

  ul {
    list-style: none;
  }

`

export const Cabecalho = styled.nav`

  display: flex;
  justify-content: space-between;
  align-items: start;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 72vh;

  button {
    position: relative;
    right: 10%;
    background-color: transparent;
    border: none;
  }

  a {
    text-decoration: none;
    color: white;
  }

  ul {
    list-style: none;
  }

`;
