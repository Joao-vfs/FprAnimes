import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../../componets/Side-bar";
import Header from "../../componets/Header";

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

export default function All() {
  const [sidebar, setSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const [animes, setAnimes] = useState([]);

  const [url, setUrl] = useState(
    "https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&page%5Boffset%5D=0"
  );

  const [prev, setPrev] = useState("");
  const [next, setNext] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAnimes(data.data);
        setPrev(data.links?.prev);
        setNext(data.links.next);
      });
  }, [url]);

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
          {animes.map((anime) => {
            return (
              <Animes key={animes.id}>
                <Link to={`/details/${anime.id}`}>
                  <img
                    src={
                      anime.attributes?.posterImage?.small
                        ? anime.attributes?.posterImage?.small
                        : "https://telhafer.com.br/image/no_image.jpg"
                    }
                    alt={anime.titles}
                  />
                </Link>
                <span>{anime.attributes.canonicalTitle}</span>
              </Animes>
            );
          })}
        </AnimesList>

        <ContenteGeneral>
          {prev && (
            <ButtonGeneral
              onClick={() => {
                setUrl(prev);
              }}
            >
              <img src={ArrowLeft} alt="Arrow Left" />
            </ButtonGeneral>
          )}

          <ButtonGeneral
            onClick={() => {
              setUrl(next);
            }}
          >
            <img src={ArrowRight} alt="Arrow Right" />
          </ButtonGeneral>
        </ContenteGeneral>
      </ContainerGeneral>
    </>
  );
}
