import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Cabecalho } from './styles';
import lupa from '../../img/magnifying-glass.png';
import logo from '../../img/Untitled-1 4.png';
import { FaBars } from 'react-icons/fa';
import SearchInput from '../Search/SearchInput';
import Sidebar from '../sidebar';
import { Lupa } from '../Search/styles';
import axios from 'axios';

export default function Header() {
  const [text, setText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSearch = async () => {
    if (text.trim()) {
      const results = await searchApi(text.trim());
      navigate(`/paginadebusca?q=${encodeURIComponent(text.trim())}`, { state: { results } });
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

  const handleToggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const searchApi = async (query) => {
    const response = await axios.get(`https://suaapi.com/busca?q=${query}`);
    return response.data;
  };

  return (
    <Cabecalho>
      <div>
        <FaBars onClick={handleToggleSidebar} />

        {sidebar && <Sidebar active={setSidebar} />}
      </div>
      <Link to="/">
        <img src={logo} />
      </Link>
      <SearchInput
        text={searchText}
        handleChange={handleInputChange}
        handleKeyPress={handleEnterKeyPress}
        handleButtonClick={handleSearch}
      />
      <Lupa src={lupa} alt="Search" onClick={handleSearch} />
    </Cabecalho>
  );
}
