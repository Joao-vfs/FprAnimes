import styled from "styled-components";

export const Container = styled.div`
  margin-top: -6rem;
  border-left: solid 3.5rem var(--orange);
  z-index: -1;
  min-height: 75vh;

  img {
    width: 100%;
  }

  @media (min-width: 361px) and (max-width: 612px) {
    margin: 0;
    border-left: solid 1.9rem var(--orange);
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    margin: 0;
    border-left: solid 3.2rem var(--orange);
  }

  @media (min-width: 550px) and (max-width: 1024px) {
    margin: 0;
    border-left: solid 1.9rem var(--orange);
  }

  @media (min-width: 550px) and (max-width: 824px) {
    margin: 0;
    border-left: solid 1.9rem var(--orange);
  }

  @media (min-width: 0px) and (max-width: 375px) {

    margin-top: 0rem;
    border-left: solid 1.9rem var(--orange);

  }
  @media (min-width: 390px) and (max-width: 700px) {
    margin: 0;
}
`;

export const ImageDetails = styled.div`
  display: flex;
  padding: 1rem;

  img {
    width: 221px;
    border-radius: 1rem;
    margin: -3rem 2rem 0 2rem;
  }

@media( min-width: 0px) and (max-width: 375px) {

    padding: 0;

    h1{
      font-size: 14px;
    }

    p{
      font-size: 10px;
    }

  img {
    width: 90px;
    height: 130px;
    margin: -1rem 0.5rem 1rem 1rem;
  }
}

@media (min-width: 390px) and (max-width: 700px) {

padding: 0;

h1{
  font-size: 18px;
}

p{
  font-size: 12px;
}

img {
width: 90px;
height: 130px;
margin: -1rem 0.5rem 1rem 1rem;
}

}

@media (min-width: 768px) and (max-width: 1024px) {

img {
height: 400px;
}

}

`;

export const DetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  margin-left: 3rem;
  padding-bottom: 3rem;
  

  span {
    font-weight: bold;
    color: var(--blue);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 221px;
    height: 50px;
    background-color: var(--orange);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;

    img {
      width: 41px;
      height: 29px;
    }
  }
  .star {
    color: var(--yellow);
  }

  .heart {
    color: var(--red);
  }

  @media( min-width: 0px) and (max-width: 375px) {
  
  gap: 10px;
  margin-left: 1rem;
  font-size: 3px;

  span{
    font-size: 12px;
    }

  button {
    width: 90px;
    height: 30px;
    border: none;
    border-radius: 10px;
    font-size: 10px;

    img {
      width: 19px;
      height: 15px;
    }
  }
  
  p {
   font-size: 12px;
  }

}
@media (min-width: 360px) and (max-width: 700px) {

  gap: 10px;
  margin-left: 1rem;
  font-size: 3px;

  span{
    font-size: 12px;
    }

  button {
    width: 90px;
    height: 30px;
    border: none;
    border-radius: 10px;
    font-size: 10px;

    img {
      width: 19px;
      height: 15px;
    }
  }
  
  p {
   font-size: 12px;
  }

}

@media (min-width: 830px) and (max-width: 1024px) {


}
`;

export const Trailer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  min-width: 100%;
  background: rgba(0, 0, 0, 0.85);
  height: ${(props) => props.back || "100%"};
`;

export const Video = styled.div`

  iframe {
    width: 905px;
    height: 509px;
  }

  @media( min-width: 0px) and (max-width: 375px) {
  
  position: absolute;
  top: 185px;
  left: 55px;

  iframe {
    width: 300px;
    height: 190px;
  }
}
@media (min-width: 390px) and (max-width: 800px) {

  position: absolute;
  top: 185px;
  left: 70px;

  iframe {
    width: 300px;
    height: 190px;
  }

}

@media (min-width: 360px) and (max-width: 400px){

  left: 45px;

}

@media (min-width: 450px) and (max-width: 700px){

left: 140px;

}

@media (min-width: 720px) and (max-width: 1024px){

position: absolute;
top: 185px;
left: 100px;

iframe {
  width: 300px;
  height: 150px;
}

}


@media (min-width: 830px) and (max-width: 1024px){

  position: absolute;
  top: 185px;
  left: 120px;

  iframe {
    width: 600px;
    height: 400px;
  }

}

@media (min-width: 900px) and (max-width: 1024px){

position: absolute;
top: 185px;
left: 190px;

iframe {
  width: 600px;
  height: 400px;
}

}

@media (min-width: 100px) and (max-width: 1600px){

position: absolute;
top: 185px;
left: 240px;

iframe {
  width: 600px;
  height: 400px;
}

}
`;
