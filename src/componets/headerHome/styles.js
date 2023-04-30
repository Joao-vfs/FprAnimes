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
    color: var(--white);
  }

  ul {
    list-style: none;
  }

@media (min-width: 900px) and (max-width: 1600px) {

  height: 72vh;
  
}

`;
