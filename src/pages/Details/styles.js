import styled from "styled-components";



export const Container = styled.section`

h1{
    color:orange
}

`

export const Banner_id = styled.img`

width: 100%;

`

export const Container_id = styled.div`

display: flex;
justify-content: center;
flex-direction: column;
margin-left: 20%;
padding: 0 1rem;

p{
    font-size: 16px;
}

img{
    position: absolute;
    left: 6%;
    top:48%;
    width:180px;
    border-radius: 10px;
}

`

export const Box_id = styled.div`

display: flex;
flex-direction: column;
justify-content: left;
gap: 15px;
margin: 8.5% 0 10% 6%;


span{
    font-weight: bold;
    color:#16A085;
}

button{
    width: 180px;
    height: 50px;
    background-color: #F46D1B;
    color: white;
    border-color: black ;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
}
.star{
    color: #FFE145;
}

.heart{
    color: #FF4545
}

`