import styled from "styled-components";

export const SearchContent = styled.div`

border-left: solid 3.5rem var(--orange);
min-height: 75vh;
text-align: center;
padding: 2rem;
@media (min-width: 361px) and (max-width: 612px) {

border-left:solid 1.9rem var(--orange);

}


@media (min-width: 768px) and (max-width: 1280px) {

border-left:solid 3.2rem var(--orange);

}

@media (min-width: 550px) and (max-width: 1024px) {

border-left:solid 1.9rem var(--orange);

}

@media (min-width: 550px) and (max-width: 824px) {

border-left:solid 1.9rem var(--orange);

}

@media( min-width: 0px) and (max-width: 375px) {

border-left:solid 1.9rem var(--orange);


}
`