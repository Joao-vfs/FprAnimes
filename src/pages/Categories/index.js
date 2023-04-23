import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Animes, AnimesList, BoxTodos } from './styles'

export default function Categories() {
  const { id } = useParams()
  const [animes, setAnime] = useState([])

  const categoryFilter = `filter[categories]=${id}`

  useEffect(() => {
    fetch(`https://kitsu.io/api/edge/anime?${categoryFilter}&page%5Blimit%5D=20&page%5Boffset%5D=0`)
      .then((response) => response.json())
      .then((data) => { setAnime(data.data) })
  }, [categoryFilter])

  return (
    <BoxTodos>
      <h1>CATEGORIAS</h1>
      <AnimesList>
        {animes.map(anime => {
          return (
            <Animes key={anime.id}>
              <img src={anime.attributes.posterImage.small} />
              <span>{anime.attributes.canonicalTitle}</span>
            </Animes>
          )
        })}
      </AnimesList>
    </BoxTodos>
  )
}
