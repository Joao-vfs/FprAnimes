/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Banner_id, Container_id } from './styles';
import not from '../../img/not_found.png.png'

export default function Details() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);


  useEffect(() => {
    fetch(`https://kitsu.io/api/edge/anime/${id}`)
      .then((response) => response.json())
      .then((data) => setAnime(data.data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!anime) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Container_id key={anime.id}>


        <Banner_id src={anime?.attributes?.coverImage?.small
          ? anime?.attributes?.coverImage?.small
          // eslint-disable-next-line no-undef
          : `${not}`} />


        <img src={anime.attributes.posterImage.small} />
        <h1>{anime.attributes.canonicalTitle}</h1>
        <p>
          <strong>Tipo:</strong> {anime.attributes.showType}
        </p>
        <p>
          <strong>Status:</strong> {anime.attributes.status}
        </p>
        <p>
          <strong>Episódios:</strong> {anime.attributes.episodeCount}
        </p>
        <p>
          <strong>Descrição:</strong> {anime.attributes.description}
        </p>
      </Container_id>
    </Container>
  );
}
