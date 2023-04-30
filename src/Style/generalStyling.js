import styled from "styled-components";

export const ContainerGeneral = styled.div`
  border-left: solid 3.5rem var(--orange);
  padding: 2rem;

  @media (min-width: 361px) and (max-width: 612px) {
    border-left: solid 1.9rem var(--orange);
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    border-left: solid 3.2rem var(--orange);
  }

  @media (min-width: 550px) and (max-width: 1024px) {
    border-left: solid 1.9rem var(--orange);
  }

  @media (min-width: 550px) and (max-width: 824px) {
    border-left: solid 1.9rem var(--orange);
  }

  @media (min-width: 0px) and (max-width: 375px) {
    border-left: solid 1.9rem var(--orange);
  }
`;

export const AnimesList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Animes = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 225px;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }

  a {
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }
`;
export const ContenteGeneral = styled.div`
  display: flex;
  justify-content: right;
  gap: 1rem;
  margin: 3rem 0;
`;

export const ButtonGeneral = styled.button`
  padding: 0.5rem;
  border-radius: 0.7rem;
  border: none;
  background-color: var(--orange);
  cursor: pointer;
`;
