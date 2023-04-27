import styled from "styled-components";



export const Container = styled.section`

h1{
    color:orange
}

img{
    width: 100%;
}


`

export const ImageDetails = styled.div`

display: flex;
padding: 1rem;

img{
    max-width: auto;
    max-height: auto;
    border-radius: 1rem ;
    margin: -3rem 2rem 0 2rem ;
}
`

export const DetailsDiv = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
gap: 15px;
margin-left: 3rem;


span{
    font-weight: bold;
    color:#16A085;
}

button{
    width: 180px;
    height: 50px;
    background-color: #F46D1B;
    color: white;
    border: none ;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
}
.star{
    color: #FFE145;
}

.heart{
    color: #FF4545
}

`