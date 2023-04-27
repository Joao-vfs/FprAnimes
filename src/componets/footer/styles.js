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
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  
}

@media (min-width: 400px) and (max-width: 700px) {

  min-height: auto;
  font-size: 10px;

  button{
  background-color: transparent;
  border: solid 2px #F46D1B ;
  font-size: 15px;
  padding: 0.2rem 0.5rem;
}
}

@media (min-width: 0px) and (max-width: 400px)  {

  
  height: auto;
  font-size: 7px;

  button{
  background-color: transparent;
  border: solid 1px #F46D1B ;
  font-size: 10px;
  padding: 0.2rem 0.5rem;
}
  
}

`
export const Gato = styled.img`

margin-top: -7%;

@media (min-width: 300px) and (max-width: 700px) {
  margin-top: -18%;
  width: 250px;
  height: auto;
  
}

@media (min-width: 0px) and (max-width: 400px) {
  margin-top: -40%;
  width: 170px;
  height: auto;
}
`