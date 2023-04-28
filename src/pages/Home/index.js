import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  Box,
  Pop_Container,
  Classfilds_Container,
  Carousel_div,
  Contente,
} from "./styles";

import { BiStar, BiLike } from "react-icons/bi";

import { FaBars } from "react-icons/fa";

import { Link } from "react-router-dom";

import banner1 from "../../img/banner interno 1.png";
import banner2 from "../../img/banner interno 2.png";
import banner3 from "../../img/banner interno 3.png";
import Header_Home from "../../componets/Header_Home";
import Sidebar from "../../componets/SideBar";

import { SidebarClosed } from "../../componets/SideBar/styles";
import Tooltip from "../../componets/Tootlip";


export default function Home({ active }) {
  const [sidebar, setSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const [pop, setPop] = useState([]);
  const [classified, setClassified] = useState([]);

  const carouselBanners = [banner1, banner2, banner3];

  useEffect(() => {
    fetch(
      "https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=popularityRank"
    )
      .then((response) => response.json())
      .then((data) => setPop(data.data));
  }, []);

  useEffect(() => {
    fetch(
      "https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-average_rating"
    )
      .then((response) => response.json())
      .then((data) => setClassified(data.data));
  }, []);

  return (
    <>
      <Contente>
        <SidebarClosed>
          <FaBars onClick={handleToggleSidebar} />
          {sidebar && <Sidebar active={setSidebar} />}
        </SidebarClosed>

        <Header_Home />
      </Contente>

      <Box>
        <Pop_Container>
          <h2>
            <strong>
              <BiStar /> Animes
            </strong>{" "}
            Mais Populares
          </h2>
          {pop.map((pops) => {
            return (
              <Tooltip
                key={pops.id}
                title={pops.attributes.canonicalTitle}
                averageRating={pops.attributes.averageRating}
                popularityRank={pops.attributes.popularityRank}
                ratingRank={pops.attributes.ratingRank}
                description={pops.attributes.description ?? "Sem descrição"}
              >
                <Link to={`details/${pops.id}`}>
                <img
                  src={pops.attributes.posterImage.small}
                  alt={pops.attributes.canonicalTitle}
                />
                </Link>
              </Tooltip>
            );
          })}
        </Pop_Container>

        <Carousel_div>
          <Carousel_div>
            <Carousel
              showThumbs={false}
              showStatus={false}
              showArrows={false}
              autoPlay={true}
              infiniteLoop={true}
              transitionTime={3}
            >
              {carouselBanners.map((img) => (
                <img src={img} key={img} />
              ))}
            </Carousel>
          </Carousel_div>
        </Carousel_div>

        <Classfilds_Container>
          <h2>
            <strong>
              <BiLike /> Animes
            </strong>{" "}
            Mais bem Classificados
          </h2>
          {classified.map((classifieds) => {
            return (
              <Tooltip
                key={classifieds.id}
                title={classifieds.attributes.canonicalTitle}
                averageRating={classifieds.attributes.averageRating}
                popularityRank={classifieds.attributes.popularityRank}
                ratingRank={classifieds.attributes.ratingRank}
                description={classifieds.attributes.description ?? "Sem descrição"}
              >
                <Link to={`details/${classifieds.id}`}>
                <img
                  src={classifieds.attributes.posterImage.small}
                  alt={classifieds.attributes.canonicalTitle}
                />
                </Link>
              </Tooltip>
            );
          })}
        </Classfilds_Container>
      </Box>
    </>
  );
}
