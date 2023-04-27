import React, { useState, useEffect } from 'react'

import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { SidebarContainer, SidebarContent } from './styles';

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
    <SidebarContainer sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <SidebarContent key={categories.id}>
        <h1>CATEGORIAS</h1>
        <>
          {categories.map(categorie => {
            return (
              <Link to={`/categories/${categorie.id}`}>
                <span>{categorie.attributes.title}</span>
              </Link>
            )
          })}
        </>
      </SidebarContent>
    </SidebarContainer>
  )
}
