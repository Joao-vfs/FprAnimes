/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'

import { Box, Pop_Container, Classfilds_Container } from './styles'

import { BiStar, BiLike } from "react-icons/bi";

import { Link } from 'react-router-dom'

import banner from '../../img/banner.png'
import banner_i from '../../img/banner interno 1.png'



export default function Home() {

    const [pop, setPop] = useState([])

    const [classified, setClassified] = useState([])

    useEffect(() => {
        fetch("https://kitsu.io/api/edge/anime?sort=-popularityRank,-popularityRank")
            .then(response => response.json())
            .then(data => setPop(data.data))
    }, [])

    useEffect(() => {
        fetch("https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-average_rating")
            .then(response => response.json())
            .then(data => setClassified(data.data))
    }, [])

    return (
        <Box>
            <img src={banner} />
            <h2><strong><BiStar/> Animes</strong> Mais Populares</h2>
            <Pop_Container>
                {pop.map(pops => {
                    return (
                        <div key={pop.id}>

                            <img src={pops.attributes.posterImage.small} />

                        </div>

                    )
                })}
            </Pop_Container>

            <section>
                <img src={banner_i} />
            </section>

            <h2><strong><BiLike /> Animes</strong> Mais bem Classificados</h2>
            <Classfilds_Container>
                {classified.map(classifieds => {
                    return (
                        <div key={classified.id}>

                            <img src={classifieds.attributes.posterImage.small} />

                        </div>

                    )
                })}
            </Classfilds_Container>

        </Box>
    )
}
