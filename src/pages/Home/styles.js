import styled from "styled-components";

export const Content = styled.div`

display: flex;

`


export const HomeContainer = styled.div`
  padding: 2rem;
  text-align: left;
  border-left:solid 3.5rem #f46d1b;
  

  h2 {
    width: 100%;
    color: #34ac40;
  }

  strong {
    color: #f46d1b;
  }
`;


export const PopContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;

  img {
    transition: all 0.3s;
    max-width: 180px;
    height: auto;
    border-radius: 1rem;
    margin: 1rem 0 ;
  }

  img:hover {
    transform: scale(1.1);
  }
`;

export const CarouselContainer = styled.div`
  margin: 5rem 0;
  z-index: -1;
  
  img{
    min-width: 100%;
    min-height: auto; 
  }

`;


export const ClassfildsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
  margin-bottom: 10rem;


    img {
    transition: all 0.3s;
    max-width: 180px;
    height: auto;
    border-radius: 1rem;
    margin: 1rem 0;
  }

  img:hover {
    transform: scale(1.1);
  }
`;
