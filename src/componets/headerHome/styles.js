import styled from "styled-components";

import banner from '../../assets/images/banner.png';

export const ContainerHeaderHome = styled.nav`

  display: flex;
  justify-content: space-between;
  align-items: start;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 72vh;
  width: 100%;
  

  a {
    text-decoration: none;
    color: white;
  }

  ul {
    list-style: none;
  }


`;
