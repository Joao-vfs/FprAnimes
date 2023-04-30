import styled from "styled-components";


export const Baseboard = styled.footer`

display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
background-color: var(--gray);
padding: 2rem ;
border-left: solid 3.5rem var(--gray);
text-align: center;
font-size: 18px;
color: var(--white);

strong{
  color: var(--green);
}

button{
  background-color: transparent;
  border: solid 5px var(--orange) ;
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

margin-top: -6.7%;


`