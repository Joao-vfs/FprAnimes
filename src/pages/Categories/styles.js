import styled from "styled-components";

export const BoxTodos = styled.div`

    h1{
        text-align: center;
        color: orange;
        margin: 2rem 0 ;
    }

    @media (min-width: 300px) and (max-width:700px) {
        h1{
            font-size: 28px;
        }
    }

    @media (min-width: 0px) and (max-width:400px) {

        h1{
            font-size: 20px;
        }
    }

`

export const AnimesList = styled.ul`
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr) );
        column-gap: 3rem;
        row-gap: 4rem;

    @media (min-width: 300px) and (max-width:700px) {
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr) );
    }

    @media (min-width: 0px) and (max-width:400px) {
        grid-template-columns: repeat(auto-fit, minmax(40px, 1fr) );
    }

`

export const Animes = styled.li`

        display: flex;
        flex-direction: column;
        align-items: center;
        

        
        img{
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }

    span{
        font-weight: bold;
        font-size: 120%;
        text-align: center;
    }

    a{
        transition: all 0.3s;
    }

    a:hover{
        transform: scale(1.1);
    }

    @media (min-width: 300px) and (max-width: 700px) {

                
        img{
        width: 100px;
    }

    span{
        font-size: 18px;
    }

    }

    @media (min-width: 0px) and (max-width: 400px) {

                
img{
width: 65px;
}

span{
font-size: 13px;
}

}
`
export const Container = styled.div`

display: flex;
justify-content: right;
margin: 0 3rem 0 1rem ;
gap: 1rem;
`

export const Btn = styled.button`

    padding: 0.5rem;
    border-radius: 0.7rem;
    background-color: #F46D1B;
    margin: 4rem 0;
    border: none;

    svg{
        color: white;
        font-size: 30px;
    }

    @media (min-width: 300px) and (max-width: 700px) {

    padding: 0.2rem;
    margin: 2rem 0;

    svg{
        font-size: 25px;  
    } 

    }

    @media (min-width: 0px) and (max-width: 400px) {

    padding: 0.2rem;
    margin: 1.5rem 0;

    svg{
        color: white;
        font-size: 20px;
        text-align: center;
    } 
    }
`
