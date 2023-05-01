import styled from "styled-components";

import banner from "../../assets/images/banner.png";

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

  @media (min-width: 361px) and (max-width: 612px) {
    height: 20vh;

    .Logo {
      width: 90px;
      height: 50px;
    }
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    height: 50vh;

    .Logo {
      width: 180px;
      height: 120px;
    }
  }

  @media (min-width: 550px) and (max-width: 1024px) {
    height: 35vh;

    .Logo {
      width: 150px;
      height: 100px;
    }
  }

  @media (min-width: 550px) and (max-width: 824px) {
    height: 30vh;

    .Logo {
      width: 90px;
      height: 60px;
    }
  }

  @media (min-width: 0px) and (max-width: 375px) {
    height: 20vh;

    .Logo {
      width: 80px;
      height: 50px;
    }
  }
`;
