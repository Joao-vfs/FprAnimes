import styled from "styled-components";

export const Content = styled.div`

display: flex;

`


export const HomeContainer = styled.div`
  padding: 2rem;
  text-align: left;
  border-left:solid 3.5rem var(--orange);
  

  h2 {
    width: 100%;
    color: var(--green);
  }

  strong {
    color: var(--orange);
  }
`;


export const PopContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  img {
    transition: all 0.3s;
    width: 225px;
    height: auto;
    border-radius: 1rem;
    margin: 1rem 0 ;
  }

  img:hover {
    transform: scale(1.1);
  }
`;

export const CarouselContainer = styled.div`

padding: 5rem 0;

.carousel {
  padding-bottom: 2rem;
  z-index: 0;

}

.carousel .control-dots .dot{
  background-color: var(--orange) ;
  width: 12px;
  height: 12px;
}
`;


export const ClassfildsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 10rem;


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
`;
