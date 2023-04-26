/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Banner_id, Container_id, Box_id, Image_id } from './styles';
import { ImHeart, ImStarFull } from "react-icons/im";
import not from '../../img/not_found.png'
import Header from '../../componets/header';


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
    <>
  <Header />

    <Container>

      <div key={anime.id}>


        <Banner_id src={anime?.attributes?.coverImage?.small
          ? anime?.attributes?.coverImage?.small
          // eslint-disable-next-line no-undef
          : `${not}`} />

        <Image_id>
          <img src={anime.attributes.posterImage.small} />
        </Image_id>

        <Container_id>
          <h1>{anime.attributes.canonicalTitle}</h1><br />
          <p>
            {anime.attributes.synopsis}
          </p>

        </Container_id>

        <Box_id>

          <button>VER TRAILER</button><br />
          <span>aprovado por {anime.attributes.averageRating}% <br />da Comunidade</span>
          <p><ImHeart className='heart' /> # {anime.attributes.popularityRank}  Mais Popular</p>
          <p><ImStarFull className='star' /> # {anime.attributes.ratingRank}  Mais Classificado</p>

        </Box_id>

      </div>

    </Container>
    </>
  );
}
