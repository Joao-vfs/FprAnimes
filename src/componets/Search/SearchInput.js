import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Busca, ContainerInput, InputContent } from './styles';
import Lupa from '../../img/magnifying-glass.png'

export default function SearchInput() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      navigate(`/search?q=${text}`);
    }
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    navigate(`/search?q=${text}`);
  };

  return (
    <ContainerInput>
      <InputContent>
      <input
        type="text"
        placeholder="Buscar"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></input>
      <Link to={`/sarch?q=${text}`}>
        <button onClick={handleButtonClick}><img src={Lupa} alt='lupa' className='lupa'/></button> 
      </Link>
      </InputContent>
    </ContainerInput>
  );
}
