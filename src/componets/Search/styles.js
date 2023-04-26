import styled from "styled-components";

export const Busca = styled.input`
  height: 1.5rem;
  min-width: 220px;
  background-color: transparent;
  border-color: #cfcfcf;
  border-radius: 32px;
  padding: 0.7rem;
  color: white;

  @media screen and (min-width: 768px) {
    width: 50%;
    margin: 2rem auto;
  }

  @media screen and (min-width: 1024px) {
    width: 30%;
  }
`;
