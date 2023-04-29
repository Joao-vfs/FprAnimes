import styled from "styled-components";


export const Baseboard = styled.footer`

display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
background-color: #262626;
padding: 2rem ;
border-left: solid 3.5rem #F46D1B;
text-align: center;
font-size: 18px;
color: white;

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
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  width: 100%;
}


`
export const Mascot = styled.img`

margin-top: -7%;

`