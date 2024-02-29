import { createGlobalStyle } from "styled-components";

export const ResetCSS = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.dark};
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;

        &:hover{
            filter: brightness(0.8);
        }
    }
`;
