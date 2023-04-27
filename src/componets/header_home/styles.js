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

  @media (min-width:300px) and (max-width:700px) {
    svg{
    position: absolute;
    left: 2%;
  }

  a {
    font-size: 15px;
  }

  }

@media (min-width:0px) and (max-width:400px) {

  svg{
    position: absolute;
    left: 1%;
    width: 20px;
    height: 20px;
  }

  a {
    font-size: 12px;
}

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

  @media (min-width:300px) and (max-width:700px) {

  height: 37vh;

    img{
      width: 75px ;
      height: 50px ;
    }

    .lupa{
      width:15px;
      height:15px;
    }

  }

  @media (min-width:0px) and (max-width:400px) {

  height: 22vh;

  img{
    width: 60px ;
    height: 40px ;
  }

  .lupa{
    width:10px;
    height:10px;
  }

}

`;
