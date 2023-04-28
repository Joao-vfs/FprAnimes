import styled from "styled-components";

export const BoxTodos = styled.div`

    border-left: solid 3.5rem #F46D1B;

    h1{
        text-align: center;
        color: orange;
        
    }


`

export const AnimesList = styled.ul`
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr) );
        column-gap: 3rem;
        row-gap: 4rem;

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
    border: none;
    background-color: #F46D1B;
    margin-bottom: 10rem ;
    cursor: pointer;
    

    svg{
        color: white;
        font-size: 30px;
        text-align: center;
    }

`
