
import React, { useState, useEffect } from 'react'
import { Container, Content } from './styles'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom';



export default function Sidebar({ active }) {

  const [categories, setCategories] = useState([]);

  const closeSidebar = () => {
    active(false)
  }

  useEffect(() => {
    fetch('https://kitsu.io/api/edge/categories?page%5Blimit%5D=40&sort=-total_media_count')
      .then((response) => response.json())
      .then((data) => setCategories(data.data))
  }, [])

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content key={categories.id}>
        <h1>CATEGORIAS</h1>
        {categories.map(categorie => {
          return (
            <ul>
              <Link to={`/Categories/${categorie.id}`}><li >{categorie.attributes.title}</li></Link>
            </ul>
          )
        })}
      </Content>
    </Container>
  )
}

