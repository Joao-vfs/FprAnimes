import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Header from "../../componets/header";
import Sidebar from "../../componets/Side-bar";

import {
  Animes,
  AnimesList,
  ContainerGeneral,
  ButtonGeneral,
  ContenteGeneral,
} from "../../Style/generalStyling";
import { Content } from "../Home/styles";
import { SidebarClosed } from "../../componets/Side-bar/styles";

import ArrowLeft from "../../assets/images/arrow-left.png";
import ArrowRight from "../../assets/images/arrow-right.png";

import { FaBars } from "react-icons/fa";

export default function Categories() {
  const [sidebar, setSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const { id } = useParams();
  const [animes, setAnime] = useState([]);
  const [url, setUrl] = useState(
    `https://kitsu.io/api/edge/categories/${id}/anime?page[limit]=20`
  );
  const [prev, setPrev] = useState("");
  const [next, setNext] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAnime(data.data);
        setPrev(data.links?.prev);
        setNext(data.links?.next);
      });
  }, [url]);

  function handlePrevClick() {
    setUrl(prev);
  }

  function handleNextClick() {
    setUrl(next);
  }

  useEffect(() => {
    setUrl(`https://kitsu.io/api/edge/categories/${id}/anime?page[limit]=20`);
  }, [id]);

  return (
    <>
      <Content>
        <SidebarClosed>
          <FaBars onClick={handleToggleSidebar} />
          {sidebar && <Sidebar active={setSidebar} />}
        </SidebarClosed>

        <Header />
      </Content>
      <ContainerGeneral>
        <AnimesList>
          {animes.map((anime) => (
            <Animes key={anime.id}>
              <Link to={`/details/${anime.id}`}>
                <img
                  src={
                    anime.attributes?.posterImage?.small ||
                    "https://telhafer.com.br/image/no_image.jpg"
                  }
                  alt={anime.titles}
                />
              </Link>
              <span>{anime.attributes.canonicalTitle}</span>
            </Animes>
          ))}
        </AnimesList>

        <ContenteGeneral>
          {prev && (
            <ButtonGeneral onClick={handlePrevClick}>
              <img src={ArrowLeft} alt="Arrow Left" />
            </ButtonGeneral>
          )}

          {next && (
            <ButtonGeneral onClick={handleNextClick}>
              <img src={ArrowRight} alt="Arrow Right" />
            </ButtonGeneral>
          )}
        </ContenteGeneral>
      </ContainerGeneral>
    </>
  );
}
