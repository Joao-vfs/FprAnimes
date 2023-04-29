import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import SearchInput from '../Search/SearchInput';

import { ContainerHeaderHome } from './styles';

import Logo from '../../assets/images/logo (2).png';



export default function HeaderHome() {

  const [text, setText] = useState('');

  const [searchText, setSearchText] = useState('');

  const navigate = useNavigate();

  const location = useLocation();

  const handleSearch = async (page = 1) => {

    if (text.trim()) {

      const query = encodeURIComponent(text.trim());

      const response = await fetch(`https://kitsu.io/api/edge/anime?`);

      const results = response.data;

      navigate(`/saerch?q=${query}&page=${page}`, { state: { results } });
      setText('');

    }
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };


  return (
    
      <ContainerHeaderHome>
      
        <img src={Logo} alt='Logo da Fpr-Animes da Pagina Principal' />
        
      <SearchInput
        text={searchText}
        handleChange={handleInputChange}
        handleKeyPress={handleEnterKeyPress}
        handleButtonClick={handleSearch}
      />

      {location.state?.results?.pagination && (

        <div>

          {Array.from(Array(location.state.results.pagination.total_pages), (_, i) => i + 1).map((page) => (

            <button key={page} onClick={() => handleSearch(page)}>
              {page}
            </button>

          ))}

        </div>

      )}

    </ContainerHeaderHome>
  );
}
