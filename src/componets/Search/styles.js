import styled from "styled-components";

export const Busca = styled.input`
  height: 1.5rem;
  min-width: 100%;
  background-color: transparent;
  border-color: #cfcfcf;
  border-radius: 32px;
  padding: 0.7rem;
  color: white;

  @media  (min-width: 300px) and (max-width: 700px) {
 
  height: 1rem;
  min-width: 130px;
  padding: 0.5rem;
  font-size: 13px;
  margin-top: 1rem;
  }

  @media (min-width: 0) and (max-width: 400px) {

  height: 0.2rem;
  width: 20px;
  background-color: transparent;
  border-color: #cfcfcf;
  border-radius: 32px;
  padding: 0.3rem;
  color: white;
  font-size: 12px;
  }
`;
