import styled from "styled-components";

export const Content = styled.div`
  display: flex;
`;

export const HomeContainer = styled.div`
  padding: 2rem;
  text-align: left;
  border-left: solid 3.5rem var(--orange);

  h2 {
    width: 100%;
    color: var(--green);
  }

  strong {
    color: var(--orange);
  }

  @media (min-width: 361px) and (max-width: 612px) {
    border-left: solid 1.9rem var(--orange);
    h2 {
      font-size: 25px;
      text-align: center;
    }
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    border-left: solid 3.2rem var(--orange);
    h2 {
      font-size: 40px;
      text-align: center;
    }
  }

  @media (min-width: 550px) and (max-width: 1024px) {
    border-left: solid 1.9rem var(--orange);
    h2 {
      font-size: 40px;
      text-align: center;
    }
  }

  @media (min-width: 550px) and (max-width: 824px) {
    border-left: solid 1.9rem var(--orange);

    h2 {
      font-size: 40px;
      text-align: center;
    }
  }

  @media (min-width: 0px) and (max-width: 375px) {
    border-left: solid 1.9rem var(--orange);
    h2 {
      font-size: 20px;
      text-align: center;
    }
  }
`;

export const PopContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  img {
    transition: all 0.3s;
    width: 225px;
    height: auto;
    border-radius: 1rem;
    margin: 1rem 0;
  }

  img:hover {
    transform: scale(1.1);
  }

  @media (min-width: 361px) and (max-width: 612px) {
    img {
      width: 160px;
    }
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    gap: 35px;

    img {
      width: 260px;
    }
  }

  @media (min-width: 550px) and (max-width: 1024px) {
    img {
      width: 250px;
    }
  }

  @media (min-width: 550px) and (max-width: 824px) {
    img {
      width: 200px;
    }
  }

  @media (min-width: 0px) and (max-width: 375px) {
    img {
      width: 110px;
    }
  }
`;

export const CarouselContainer = styled.div`
  padding: 5rem 0;
  width: 100%;

  .carousel {
    padding-bottom: 2rem;
    z-index: 0;
  }

  .carousel .control-dots .dot {
    background-color: var(--orange);
    width: 12px;
    height: 12px;
  }
  @media (min-width: 361px) and (max-width: 612px) {
    width: 100%;

    .carousel {
      img {
        height: 100px;
      }
    }
    .carousel .control-dots .dot {
      background-color: var(--orange);
      width: 10px;
      height: 10px;
    }
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    width: 100%;

    .carousel {
      img {
        height: 100px;
      }
    }
    .carousel .control-dots .dot {
      background-color: var(--orange);
      width: 10px;
      height: 10px;
    }
  }

  @media (min-width: 550px) and (max-width: 1024px) {
    width: 100%;

    .carousel {
      img {
        height: 100px;
      }
    }
    .carousel .control-dots .dot {
      background-color: var(--orange);
      width: 10px;
      height: 10px;
    }
  }

  @media (min-width: 550px) and (max-width: 824px) {
    width: 100%;

    .carousel {
      img {
        height: 100px;
      }
    }
    .carousel .control-dots .dot {
      background-color: var(--orange);
      width: 10px;
      height: 10px;
    }
  }

  @media (min-width: 0px) and (max-width: 375px) {
    width: 100%;

    .carousel {
      img {
        height: 100px;
      }
    }
    .carousel .control-dots .dot {
      background-color: var(--orange);
      width: 10px;
      height: 10px;
    }
  }
`;

export const ClassfildsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 5rem;

  img {
    transition: all 0.3s;
    width: 225px;
    height: auto;
    border-radius: 1rem;
    margin: 1rem 0;
  }

  img:hover {
    transform: scale(1.1);
  }
  @media (min-width: 361px) and (max-width: 612px) {
    img {
      width: 160px;
    }
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    gap: 35px;

    img {
      width: 260px;
    }
  }

  @media (min-width: 550px) and (max-width: 1024px) {
    img {
      width: 250px;
    }
  }

  @media (min-width: 550px) and (max-width: 824px) {
    img {
      width: 200px;
    }
  }

  @media (min-width: 0px) and (max-width: 375px) {
    img {
      width: 110px;
    }
  }
`;
