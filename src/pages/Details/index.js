import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Sidebar from "../../componets/Side-bar";
import Header from "../../componets/header";

import { Container, ImageDetails, DetailsDiv, Trailer, Video } from "./styles";
import { SidebarClosed } from "../../componets/Side-bar/styles";
import { Content } from "../Home/styles";

import notFoundImg from "../../assets/images/not_found.png";
import IconYoutube from "../../assets/images/Vector.png";

import { ImHeart, ImStarFull } from "react-icons/im";
import { FaBars } from "react-icons/fa";

export default function Details() {
  const [sidebar, setSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  const [openTrailer, setOpenTrailer] = useState(false);

  useEffect(() => {
    fetch(`https://kitsu.io/api/edge/anime/${id}`)
      .then((response) => response.json())
      .then((data) => setAnime(data.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!anime) {
    return <div>Loading...</div>;
  }

  const coverImageSrc = anime.attributes.coverImage?.small || notFoundImg;
  const posterImageSrc = anime.attributes.posterImage.small;

  return (
    <>
      <Content>
        <SidebarClosed>
          <FaBars onClick={handleToggleSidebar} />
          {sidebar && <Sidebar active={setSidebar} />}
        </SidebarClosed>

        <Header />
      </Content>

      <Container>
        <img src={coverImageSrc} alt="Banner do anime selecionado" />

        <ImageDetails>
          <img src={posterImageSrc} alt="Anime poster" />
          <div>
            <h1>{anime.attributes.canonicalTitle}</h1>
            <p>{anime.attributes.synopsis}</p>
          </div>
        </ImageDetails>
        <DetailsDiv>
          <button onClick={() => setOpenTrailer(!openTrailer)}>
            <img src={IconYoutube} alt="Logo do YouTube" />
            VER TRAILER
          </button>
          <br />
          <span>
            Aprovado por {anime.attributes.averageRating}% da comunidade
            <br />
          </span>
          <p>
            <ImHeart className="heart" /> # {anime.attributes.popularityRank}{" "}
            Mais Popular
          </p>
          <p>
            <ImStarFull className="star" /> # {anime.attributes.ratingRank} Mais
            Classificado
          </p>
        </DetailsDiv>
      </Container>
      {openTrailer && (
        <Trailer
          back={`${document.body.scrollHeight}px`}
          onClick={() => setOpenTrailer(false)}
        >
          <Video>
            <iframe
              src={`https://www.youtube.com/embed/${anime.attributes.youtubeVideoId}`}
              title="TRAILER"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Video>
        </Trailer>
      )}
    </>
  );
}
