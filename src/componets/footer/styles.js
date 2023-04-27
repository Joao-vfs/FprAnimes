import styled from "styled-components";


export const Rodape = styled.footer`

display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
background-color: #262626;
min-height: 310px;
padding: 2rem;
text-align: center;
font-size: 18px;
color: white;
margin-top: 5rem;

strong{
  color: #34AC40;
}

button{
  background-color: transparent;
  border: solid 5px #F46D1B ;
  color: #F46D1B;
  font-weight: bold;
  font-size: 20px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

div{
  display: flex;
  align-items: end;
  justify-content: space-between;
  font-size: 12px;
}

`

export const Gato = styled.img`

margin-top: -7%;
`