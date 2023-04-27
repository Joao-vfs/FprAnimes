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

  @media (min-width: 300px) and (max-width: 700px) {
    svg{
    position: absolute;
    left: 2%;
  }
  }

  a{
    font-size: 17px;
  }




  @media (min-width: 0px) and (max-width: 400px) {
    svg{
    position: absolute;
    left: 1%;
    width: 20px;
    height: 20px;
  }

  a{
    font-size: 12px;
  }


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

  @media (min-width: 300px) and (max-width: 700px) {
  
  padding: 0.3rem;

  img{
    width: 80px;
    height: 50px;
  }

  .lupa{
    width: 15px;
    height: 15px;
  }

  }

  @media (min-width: 0px) and (max-width: 400px) {

    padding: 0.3rem;

    img{
      width: 80px;
      height: 50px;
    }

    .lupa{
      width: 10px;
      height: 10px;
    }

  }

`