import styled from "styled-components";



export const Container = styled.section`

h1{
    color:orange
}

img{
    width: 100%;
}

@media (min-width: 300px) and (max-width: 700px) {

    h1{
        font-size: 18px;
    }

    p{
        font-size: 12px;
    }

}

@media (min-width: 0px) and (max-width: 400px) {

    h1{
        font-size: 12px;
    }

    p{
        font-size: 8px;
        font-weight: bold;
    }

}


`

export const ImageDetails = styled.div`

display: flex;
padding: 1rem;

img{
    max-width: 180px;
    max-height: auto;
    border-radius: 1rem ;
    margin: -3rem 2rem 0 2rem ;
}
@media (min-width: 300px) and (max-width: 700px) {

    padding: 0.5rem;

    img{
        width: 100px;
        height: 150px;
        margin: -3rem 1rem 0 1rem ;
}

}

@media (min-width: 0px) and (max-width: 400px) {

    padding: 0.2rem;

    img{
        width: 80px;
        height: 100px;
        margin: -3rem 0.5rem 0 0.5rem ;
}

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

@media (min-width: 300px) and (max-width: 700px) {

gap: 5px;
margin-left: 1rem;



span{
    font-size: 12px;
}

button{
    width: 100px;
    height: 40px;
    font-size: 12px;
}
}

@media (min-width: 0px) and (max-width: 400px) {

gap: 5px;
margin-left: 0.5rem;



span{
    font-size: 8px;
}

button{
    width: 80px;
    height: 30px;
    font-size: 10px;
}


}

`