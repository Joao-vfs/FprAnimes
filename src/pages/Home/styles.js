import styled from "styled-components";

export const Contente = styled.div`

display: flex;

`


export const Box = styled.div`
  padding: 1rem;
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
    border-radius: 1rem;
    margin: 1rem 0 ;
  }

  img:hover {
    transform: scale(1.1);
  }
`;

export const Carousel_div = styled.div`
  margin: 5rem 0;
  z-index: -1;

  img{
    min-width: 100%;
    min-height: auto; 
  }

`;

export const Classfilds_Container = styled.div`
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
