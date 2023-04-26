/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'



import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { Box, Pop_Container, Classfilds_Container, Image_Home, Image_Carousel, Carousel_div, Banner } from './styles'

import { BiStar, BiLike } from "react-icons/bi";

import { Link } from 'react-router-dom'

import banner from '../../img/banner.png'

import banner1 from '../../img/banner interno 1.png'
import banner2 from '../../img/banner interno 2.png'
import banner3 from '../../img/banner interno 3.png'
import Header_Home from '../../componets/header_home';



export default function Home() {

    const [pop, setPop] = useState([])

    const [classified, setClassified] = useState([])

    const carouselBanners = [
        banner1,
        banner2,
        banner3
    ]


    useEffect(() => {
        fetch("https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=popularityRank")
            .then(response => response.json())
            .then(data => setPop(data.data))
    }, [])

    useEffect(() => {
        fetch("https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-average_rating")
            .then(response => response.json())
            .then(data => setClassified(data.data))
    }, [])

    return (
        <>
        
        <Header_Home/>

        <Box>
            
            

            
            <h2><strong><BiStar /> Animes</strong> Mais Populares</h2>
            <Pop_Container>
                {pop.map(pops => {
                    return (
                        <div key={pop.id}>
                            <Link to={`/Details/${pops.id}`}>
                                <Image_Home src={pops.attributes.posterImage.small} />
                            </Link>

                        </div>

                    )
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
                        {carouselBanners.map(img => (
                            <img src={img} key={img} />
                        ))

                        }
                    </Carousel>

                </Carousel_div>

            </Carousel_div>

            <h2><strong><BiLike /> Animes</strong> Mais bem Classificados</h2>
            <Classfilds_Container>
                {classified.map(classifieds => {
                    return (
                        <div key={classified.id}>
                            <Link to={`Details/${classifieds.id}`}>
                                <Image_Home src={classifieds.attributes.posterImage.small} />
                            </Link>

                        </div>

                    )
                })}
            </Classfilds_Container>

        </Box>

        </>
    )
}
