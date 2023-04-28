import React, { useState, useEffect } from 'react';
import { AnimesList } from '../Categories/styles';
import { Animes, BoxTodos } from '../Todos/styles';
import { useLocation, Link } from 'react-router-dom';
import Header from '../../componets/Header';
import { Contente } from '../Home/styles';
import { SidebarClosed } from '../../componets/SideBar/styles';
import Sidebar from '../../componets/SideBar';
import { FaBars } from 'react-icons/fa';
import { SearchContent } from './styles';

export default function SearchPage() {

  const [sidebar, setSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const { search } = useLocation();
  const query = new URLSearchParams(search).get('q');

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(query)}/`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [query]);

  return (
    <>
          <Contente>
      
      <SidebarClosed>
        <FaBars onClick={handleToggleSidebar} />
        {sidebar && <Sidebar active={setSidebar} />}
      </SidebarClosed>

        <Header/>
        
        </Contente>

        <SearchContent>

      
        <h1>Página de busca</h1>
        {loading ? (
          <p>Carregando resultados...</p>
        ) : results.length > 0 ? (
          <AnimesList>
            {results.map((anime) => (
              <Animes key={anime.id}>
                <Link to={`/details/${anime.id}`}>
                  <img src={anime.attributes.posterImage.medium} alt={anime.attributes.canonicalTitle} />
                </Link>
                <span>{anime.attributes.canonicalTitle}</span>
              </Animes>
            ))}
          </AnimesList>
        ) : (
          <p>Nenhum resultado encontrado para a pesquisa "{query}".</p>
        )}
      
      </SearchContent>
    </>
  );
}
