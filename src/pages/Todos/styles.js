import styled from "styled-components";

export const BoxTodos = styled.div`

    

    h1{
        text-align: center;
        color: orange;
        margin: 5rem 0 ;
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