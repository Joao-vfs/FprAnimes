import styled from "styled-components";

export const SidebarContainer = styled.div`

svg{
    position: absolute;
    left: 1%;
    top: 2%;
    color: white;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  
  a{
    text-decoration: none;
    color:white;
  }

  ul{
    list-style: none;
  }

`

export const Cabecalho = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: #000000;
  opacity: 1;


  button{
    position: relative;
    right: 10%;
    background-color: transparent;
    border: none;
  }

`