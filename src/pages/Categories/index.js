import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Animes, AnimesList, BoxTodos, Container, Btn } from './styles'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import Header from '../../componets/header'

export default function Categories() {
  const { id } = useParams()
  const [animes, setAnime] = useState([])
  const [url, setUrl] = useState(
    `https://kitsu.io/api/edge/categories/${id}/anime?page[limit]=20`
  )
  const [prev, setPrev] = useState('')
  const [next, setNext] = useState('')

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAnime(data.data)
        setPrev(data.links?.prev)
        setNext(data.links?.next)
      })
  }, [url])

  function handlePrevClick() {
    setUrl(prev)
  }

  function handleNextClick() {
    setUrl(next)
  }

  useEffect(() => {
    setUrl(`https://kitsu.io/api/edge/categories/${id}/anime?page[limit]=20`)
  }, [id])

  return (
    <>
    <Header />
    <BoxTodos>
      <h1>CATEGORIAS</h1>

      <Container>
        {prev && (
          <Btn onClick={handlePrevClick}>
            <FaArrowCircleLeft />
          </Btn>
        )}

        {next && (
          <Btn onClick={handleNextClick}>
            <FaArrowCircleRight />
          </Btn>
        )}
      </Container>

      <AnimesList>
        {animes.map((anime) => (
          <Animes key={anime.id}>
            <Link to={`/details/${anime.id}`}>
              <img
                src={
                  anime.attributes?.posterImage?.small ||
                  'https://telhafer.com.br/image/no_image.jpg'
                }
                alt={anime.titles}
              />
            </Link>
            <span>{anime.attributes.canonicalTitle}</span>
          </Animes>
        ))}
      </AnimesList>

      <Container>
        {prev && (
          <Btn onClick={handlePrevClick}>
            <FaArrowCircleLeft />
          </Btn>
        )}

        {next && (
          <Btn onClick={handleNextClick}>
            <FaArrowCircleRight />
          </Btn>
        )}
      </Container>
    </BoxTodos>
    </>
  )
}
