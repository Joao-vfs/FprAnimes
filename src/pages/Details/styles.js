import styled from "styled-components";

export const Container = styled.div`
  margin-top: -6rem;
  border-left: solid 3.5rem #f46d1b;
  z-index: -1;

  img {
    width: 100%;
  }
`;

export const ImageDetails = styled.div`
  display: flex;
  padding: 1rem;

  img {
    width: 221px;
    height: 313px;
    border-radius: 1rem;
    margin: -3rem 2rem 0 2rem;
  }
`;

export const DetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  margin-left: 3rem;
  padding-bottom: 10rem;

  span {
    font-weight: bold;
    color: #16a085;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 180px;
    height: 50px;
    background-color: #f46d1b;
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
    color: #ffe145;
  }

  .heart {
    color: #ff4545;
  }
`;

export const Trailer = styled.div`
  position: absolute;
  top: 0;
  min-width: 100%;
  background: rgba(0, 0, 0, 0.85);
  height: ${(props) => props.back || "100%"};
`;

export const Video = styled.div`
  position: absolute;
  top: 385px;
  left: 231px;

  iframe {
    width: 905px;
    height: 509px;
  }
`;
