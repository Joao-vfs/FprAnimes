import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Banner, ContainerDetails, ImageDetails, DetailsDiv } from './styles';
import { ImHeart, ImStarFull } from 'react-icons/im';
import notFoundImg from '../../img/not_found.png';
import Header from '../../componets/header';

export default function Details() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    fetch(`https://kitsu.io/api/edge/anime/${id}`)
      .then(response => response.json())
      .then(data => setAnime(data.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!anime) {
    return <div>Loading...</div>;
  }

  const coverImageSrc = anime.attributes.coverImage?.small || notFoundImg;
  const posterImageSrc = anime.attributes.posterImage.small;

  return (
    <>
      <Header />
      <Container>
        <Banner src={coverImageSrc} />
        <ImageDetails>
          <img src={posterImageSrc} alt="Anime poster" />
        </ImageDetails>
        <ContainerDetails>
          <h1>{anime.attributes.canonicalTitle}</h1>
          <p>{anime.attributes.synopsis}</p>
        </ContainerDetails>
        <DetailsDiv>
          <button>VER TRAILER</button>
          <br />
          <span>
            Aprovado por {anime.attributes.averageRating}% da comunidade
            <br />
          </span>
          <p>
            <ImHeart className="heart" /> # {anime.attributes.popularityRank} Mais Popular
          </p>
          <p>
            <ImStarFull className="star" /> # {anime.attributes.ratingRank} Mais Classificado
          </p>
        </DetailsDiv>
      </Container>
    </>
  );
}

