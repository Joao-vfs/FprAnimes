import { useEffect, useState } from 'react'
import { Animes, AnimesList, BoxTodos, } from './styles'

import {Link} from 'react-router-dom'

export default function Todos() {

  const [animes, setAnimes] = useState([])

  useEffect(() => {

    fetch("https://kitsu.io/api/edge/anime")
      .then(response => response.json())
      .then(data => setAnimes(data.data))

  }, [])

  return (
    <BoxTodos>
      <h1>Todos</h1>
      <AnimesList>

        {animes.map(anime => {
          return (
            <Animes key={animes.id}>
              <Link to={`/Details/${anime.id}`}><img src={anime.attributes.posterImage.small} alt={anime.titles} /></Link>
              <span>{anime.attributes.canonicalTitle}</span>
            </Animes>
          )
        })}
      </AnimesList>
    </BoxTodos>
  )
}
