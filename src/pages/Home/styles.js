import styled from "styled-components";

export const Box = styled.div`
  padding: 1rem;
  text-align: left;
  margin-top: 5rem;

  h2 {
    width: 100%;
    color: #34ac40;
  }

  strong {
    color: #f46d1b;
  }
`;

export const Banner = styled.img`
  width: 100%;
  margin: -10% 0 0 0;
`;

export const Pop_Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;

  img {
    transition: all 0.3s;
    max-width: 180px;
    height: auto;
  }

  img:hover {
    transform: scale(1.1);
  }
`;

export const Carousel_div = styled.div`
  margin-bottom: 5rem;
`;

export const Image_Home = styled.img`
  max-width: 180px;
  height: auto;
  border-radius: 1rem;
  margin: 5rem 0;
`;

export const Classfilds_Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;

  img {
    transition: all 0.3s;
    max-width: 180px;
    height: auto;
  }

  img:hover {
    transform: scale(1.1);
  }
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
  
  @media screen and (max-width: 480px) {
    img {
      max-width: 180px;
      margin: 1rem 0;
    }
  }
`;
