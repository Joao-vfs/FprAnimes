import styled from "styled-components";



export const Cabecalho = styled.nav`

  display: flex;
  justify-content: space-between;
  background-color: #000000;
  opacity: 1;

  .Lupa{
    position: absolute;
    top: 7%;
    right: 3%;
  }
  .Bars{
    position: absolute;
    left: -1%;
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

export const Logo= styled.img`

margin: 10px 800px 0 0 ;

`
