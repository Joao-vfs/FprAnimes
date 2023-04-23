import styled from "styled-components";



export const Cabecalho = styled.nav`
  position: absolute;
  width: 100%;
  top:0%;
  display: flex;
  justify-content: space-between;
  background-color: #262626; 
  opacity: 0.90;

  img{
    margin-left:10rem;
    
  }
  
    svg {
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  a{
    text-decoration: none;
    color:red;
  }

  ul{
    list-style: none;
  }
`
