import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Busca } from './styles';
import Lupa from '../../img/magnifying-glass.png'

export default function SearchInput() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyPress = (event) => {
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
    <div>
      <Busca
        type="text"
        placeholder="Buscar"
        value={text}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Link to={`/sarch?q=${text}`}>
        <button onClick={handleButtonClick}><img src={Lupa} alt='lupa' className='lupa'/></button> 
      </Link>
    </div>
  );
}
