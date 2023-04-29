import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import Header from "../../componets/Header";
import Sidebar from "../../componets/Side-bar";

import {
  Animes,
  AnimesList,
  ButtonGeneral,
  ContenteGeneral,
} from "../../Style/generalStyling";
import { Content } from "../Home/styles";
import { SearchContent } from "./styles";
import { SidebarClosed } from "../../componets/Side-bar/styles";

import ArrowLeft from "../../assets/images/arrow-left.png";
import ArrowRight from "../../assets/images/arrow-right.png";

import { FaBars } from "react-icons/fa";

export default function SearchPage() {
  const [sidebar, setSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(
    `https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(query)}/`
  );
  const [prev, setPrev] = useState("");
  const [next, setNext] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setResults(data.data);
        setLoading(false);
        setPrev(data.links?.prev);
        setNext(data.links.next);
      })
      .catch(() => setLoading(false));
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

      <SearchContent>
        {loading ? (
          <p>Carregando resultados...</p>
        ) : results.length > 0 ? (
          <AnimesList>
            {results.map((anime) => (
              <Animes key={anime.id}>
                <Link to={`/details/${anime.id}`}>
                  <img
                    src={anime.attributes.posterImage.small}
                    alt={anime.attributes.canonicalTitle}
                  />
                </Link>
                <span>{anime.attributes.canonicalTitle}</span>
              </Animes>
            ))}
          </AnimesList>
        ) : (
          <p>Nenhum resultado encontrado para a pesquisa "{query}".</p>
        )}

        <ContenteGeneral>
          {prev && (
            <ButtonGeneral
              onClick={() => {
                setUrl(prev);
              }}
            >
              <img src={ArrowLeft} alt="Arrow left" />
            </ButtonGeneral>
          )}

          <ButtonGeneral
            onClick={() => {
              setUrl(next);
            }}
          >
            <img src={ArrowRight} alt="Arrow rigth" />
          </ButtonGeneral>
        </ContenteGeneral>
      </SearchContent>
    </>
  );
}
