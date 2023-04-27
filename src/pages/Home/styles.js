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

  @media (min-width: 300px) and (max-width: 700px) {

  padding: 0.5rem;
  margin-top: 2rem;

  h2 {
    font-size: 20px;
  }

  }

  @media (min-width: 0px) and (max-width: 400px) {

    h2{
      font-size: 15px;
    }

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

  @media (min-width: 300px) and (max-width: 700px) {

  img {
    max-width: 90px;
    margin: 0.5rem 0 ;
  }

}

@media (min-width: 0px) and (max-width: 400px) {

  img {
    max-width: 70px;
    margin: 0.2rem 0 ;
  }

}
`;

export const Carousel_div = styled.div`
  margin: 5rem 0;
  z-index: -1;

  img{
    min-width: 100%;
    min-height: auto; 
  }

@media (min-width: 0px) and (max-width: 400px) {

img{
  height: 90px;
}

}

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
    border-radius: 1rem;
    margin: 1rem 0 ;
  }

  img:hover {
    transform: scale(1.1);
  }


  @media (min-width: 300px) and (max-width: 700px) {

    img {
    max-width: 90px;
    margin: 0.5rem 0 ;
  }
  }

  @media (min-width: 0px) and (max-width: 400px) {

    img {
    max-width: 70px;
    margin: 0.2rem 0 ;
  }

}
  
`;
