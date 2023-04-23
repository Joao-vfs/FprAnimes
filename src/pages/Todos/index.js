import { useEffect, useState } from 'react'
import { Animes, AnimesList, BoxTodos, Btn, Container } from './styles'

import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'

import { Link } from 'react-router-dom'

export default function Todos() {

  const [animes, setAnimes] = useState([])


  const [url, setUrl] = useState("https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&page%5Boffset%5D=0")

  const [prev, setPrev] = useState("");
  const [next, setNext] = useState("");

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setAnimes(data.data)
        setPrev(data.links?.prev)
        setNext(data.links.next)
      })
  }, [url])

  return (
    <BoxTodos>

      <h1>Todos</h1>

      <Container>

{prev &&
  <Btn
    onClick={(() => {
      setUrl(prev)
    })}
  >
    <FaArrowCircleLeft/>

  </Btn>
}

<Btn
  onClick={(() => {
    setUrl(next)
  })}
>
  <FaArrowCircleRight/>
</Btn>


</Container>

      <AnimesList>

        {animes.map(anime => {
          return (
            <Animes key={animes.id}>
              <Link to={`/Details/${anime.id}`}>
                <img
                  src={anime.attributes?.posterImage?.small
                    ? anime.attributes?.posterImage?.small
                    : "https://telhafer.com.br/image/no_image.jpg"}
                  alt={anime.titles}
                />
              </Link>
              <span>{anime.attributes.canonicalTitle}</span>
            </Animes>
          )
        })}
      </AnimesList>

      <Container>

        {prev &&
          <Btn
            onClick={(() => {
              setUrl(prev)
            })}
          >
            <FaArrowCircleLeft/>
          </Btn>
        }

        <Btn
          onClick={(() => {
            setUrl(next)
          })}
        >
          <FaArrowCircleRight/>
        </Btn>


      </Container>


    </BoxTodos>
  )
}
