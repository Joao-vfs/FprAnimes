import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Busca, InputContainer, Lupa } from './styles';

export default function SearchInput() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      navigate(`/paginadebusca?q=${text}`);
    }
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    navigate(`/paginadebusca?q=${text}`);
  };

  return (
    <InputContainer>
      <Busca
        type="text"
        placeholder="Pesquisar anime"
        value={text}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Link to={`/paginadebusca?q=${text}`}>
        <Lupa onClick={handleButtonClick}></Lupa>
      </Link>
    </InputContainer>
  );
}
