import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import { Cointainer } from './styles'

export default function Details() {

    const { id } = useParams()


    const [anime, setAnime] = useState({})

    useEffect(() => {
        fetch('https://kitsu.io/api/edge/anime')
            .then((response) => response.json())
            .then(data => {
                const anime = {
                    id,
                    title: data.data.attributes.canonicalTitle,
                    date: data.data.attributes.startDate,
                    descricacao: data.data.attributes.description,
                    sinopse: data.data.attributes.synopsis,
                    image: data.data.attributes.coverImage.original
                }
                console.log(anime)
                setAnime(data.data)
            })
    }, [id])


    return (
        <Cointainer>
            <h1>Pagina de detalhes</h1>
        </Cointainer>
    )
}
