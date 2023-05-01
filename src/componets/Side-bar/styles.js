import styled from "styled-components";

export const SidebarClosed = styled.div`
  padding: 1rem;
  background-color: var(--orange);

  svg {
    color: var(--white);
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: white;
  }

  ul {
    list-style: none;
  }

  @media (min-width: 361px) and (max-width: 612px) {
    padding: 0.5rem;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    padding: 1rem;

    svg {
      width: 25px;
      height: 25px;
    }
  }

  @media (min-width: 550px) and (max-width: 1024px) {
    padding: 0.5rem;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (min-width: 550px) and (max-width: 824px) {
    padding: 0.5rem;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (min-width: 0px) and (max-width: 375px) {
    padding: 0.5rem;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const SidebarContainer = styled.div`
  background-color: var(--orange);
  position: fixed;
  height: 100%;
  top: 0px;
  left: ${({ sidebar }) => (sidebar ? "0px" : "-300px")};
  width: 300px;
  animation: ${({ sidebar }) =>
    sidebar ? "showSidebar .4s" : "hideSidebar .4s"};
  overflow: auto;
  color: var(--white);
  z-index: 1;

  svg {
    color: var(--white);
    width: 30px;
    height: 30px;
    position: fixed;
    top: 2%;
    left: 18%;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }

  @keyframes hideSidebar {
    from {
      opacity: 1;
      width: 300px;
    }
    to {
      opacity: 0;
      width: 0;
    }
  }
  @media (min-width: 361px) and (max-width: 612px) {
    left: ${({ sidebar }) => (sidebar ? "0px" : "-150px")};
    width: 150px;

    svg {
      width: 18px;
      height: 18px;
      top: 2%;
      left: 27%;
    }

    @keyframes showSidebar {
      to {
        opacity: 1;
        width: 150px;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    left: ${({ sidebar }) => (sidebar ? "0px" : "-230px")};
    width: 230px;

    svg {
      width: 25px;
      height: 25px;
      top: 2%;
      left: 15%;
    }

    @keyframes showSidebar {
      to {
        opacity: 1;
        width: 230px;
      }
    }
  }

  @media (min-width: 550px) and (max-width: 1024px) {
    left: ${({ sidebar }) => (sidebar ? "0px" : "-250px")};
    width: 250px;

    svg {
      width: 30px;
      height: 30px;
      top: 2%;
      left: 20%;
    }

    @keyframes showSidebar {
      to {
        opacity: 1;
        width: 250px;
      }
    }
  }

  @media (min-width: 540px) and (max-width: 824px) {
    left: ${({ sidebar }) => (sidebar ? "0px" : "-150px")};
    width: 150px;

    svg {
      width: 22px;
      height: 22px;
      top: 2%;
      left: 20%;
    }

    @keyframes showSidebar {
      to {
        opacity: 1;
        width: 150px;
      }
    }
  }

  @media (min-width: 0px) and (max-width: 375px) {
    left: ${({ sidebar }) => (sidebar ? "0px" : "-120px")};
    width: 120px;

    svg {
      width: 18px;
      height: 18px;
      top: 2%;
      left: 25%;
    }

    @keyframes showSidebar {
      to {
        opacity: 1;
        width: 120px;
      }
    }
  }
`;

export const SidebarContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  margin: 20% 0 10% 10%;
  cursor: pointer;

  h1 {
    cursor: default;
  }

  a {
    transition: all 0.3s;
    color: var(--white);
  }

  a:hover {
    transform: scale(0.9);
  }

  img {
    padding: 0.5rem;
  }

  @media (min-width: 361px) and (max-width: 612px) {
    gap: 2px;
    font-size: 15px;
    margin: 20% 0 10% 10%;

    h1 {
      margin-top: 1rem;
      font-size: 20px;
    }

    img {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    gap: 2px;
    font-size: 22px;
    margin: 20% 0 10% 10%;

    h1 {
      margin-top: 1rem;
      font-size: 32px;
    }

    img {
      display: none;
    }
  }

  @media (min-width: 550px) and (max-width: 1024px) {
    gap: 2px;
    font-size: 25px;
    margin: 20% 0 10% 10%;

    h1 {
      margin-top: 1rem;
      font-size: 39px;
    }

    img {
      display: none;
    }
  }

  @media (min-width: 550px) and (max-width: 824px) {
    gap: 2px;
    font-size: 20px;
    margin: 20% 0 10% 10%;

    h1 {
      margin-top: 1rem;
      font-size: 28px;
    }

    img {
      display: none;
    }
  }

  @media (min-width: 0px) and (max-width: 375px) {
    gap: 2px;
    font-size: 13px;
    margin: 20% 0 10% 10%;

    h1 {
      margin-top: 1rem;
      font-size: 16px;
    }

    img {
      display: none;
    }
  }
`;
