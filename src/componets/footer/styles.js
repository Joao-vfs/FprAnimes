import styled from "styled-components";

export const Baseboard = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: var(--gray);
  padding: 2rem;
  text-align: center;
  font-size: 18px;
  color: var(--white);

  strong {
    color: var(--green);
  }

  button {
    background-color: transparent;
    border: solid 5px var(--orange);
    color: #f46d1b;
    font-weight: bold;
    font-size: 20px;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    width: 100%;
  }

  @media (min-width: 361px) and (max-width: 912px) {
    font-size: 8.5px;

    button {
      border: solid 3px var(--orange);
      font-size: 15px;
      padding: 0.3rem 0.5rem;
    }

    div {
      img {
        width: 10px;
        height: 20px;
      }
      font-size: 7px;
    }
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    font-size: 8.5px;

    button {
      border: solid 3px var(--orange);
      font-size: 15px;
      padding: 0.3rem 0.5rem;
    }

    div {
      img {
        width: 10px;
        height: 20px;
      }
      font-size: 7px;
    }
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    font-size: 16px;

    button {
      border: solid 5px var(--orange);
      font-size: 20px;
      padding: 0.5rem 1rem;
    }

    div {
      img {
        width: 15px;
        height: 35px;
      }
      font-size: 14px;
    }
  }

  @media (min-width: 0px) and (max-width: 461px) {
    font-size: 4.9px;

    button {
      border: solid 2px var(--orange);
      font-size: 10px;
      padding: 0.3rem 0.5rem;
    }

    div {
      img {
        width: 10px;
        height: 20px;
      }
      font-size: 6px;
    }
  }
`;
export const Mascot = styled.img`
  margin-top: -6.7%;

  @media (min-width: 300px) and (max-width: 812px) {
    width: 160px;
    margin-top: -27%;
  }

  @media (min-width: 300px) and (max-width: 612px) {
    width: 160px;
    margin-top: -25%;
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    width: 280px;
    margin-top: -10%;
  }

  @media (min-width: 912px) and (max-width: 1024px) {
    margin-top: -12%;
  }

  @media (min-width: 0px) and (max-width: 375px) {
    width: 150px;
    margin-top: -25%;
  }
`;
