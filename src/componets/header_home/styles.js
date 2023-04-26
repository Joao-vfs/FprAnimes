import styled from "styled-components";
import banner from '../../img/banner.png';

export const Cabecalho = styled.nav`
  display: flex;
  justify-content: space-between;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 72vh;
  min-width: auto;

  .Bars {
    position: absolute;
    left: -1.5%;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  .Logo {
    display: flex;
    align-items: center;
  }

  img {
    width: 192px;
    height: 118px;
    margin-right: 720px; 
  }

  .Lupa {
    position: absolute;
    top: 7%;
    right: 3%;
  }

  a {
    text-decoration: none;
    color: red;
  }

  ul {
    list-style: none;
  }

  @media screen and (max-width: 768px) { 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 50vh;

    .Bars {
      margin-top: 16px;
    }

    .Logo {
      margin-bottom: 16px;
    }

    img {
      width: 128px;
      height: 80px;
      margin-right: 0;
    }

    .Lupa {
      top: 3%;
      right: 3%;
    }
  }
`;
