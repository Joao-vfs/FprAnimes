import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  border: solid var(--white) 1px;
  border-radius: 1rem;
  padding: 0.5rem;
  height: 1.5rem;

  input {
    border: none;
    background-color: transparent;
    color: var(--white);
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  @media (min-width: 361px) and (max-width: 912px) {
    width: 150px;
    padding: 0.5rem;
    height: 1rem;

    input {
      width: 100px;
    }
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    width: 250px;
    padding: 0.7rem;
    height: 1rem;

    input {
      width: 100px;
    }
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    width: 250px;
    padding: 0.6rem;
    height: 1rem;

    input {
      width: 100px;
    }
  }

  @media (min-width: 0px) and (max-width: 361px) {
    width: 150px;
    padding: 0.5rem;
    height: 1rem;

    input {
      width: 100px;
    }
  }
`;
