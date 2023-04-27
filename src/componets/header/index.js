import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Cabecalho, Logo, SidebarContainer } from './styles';
import logo from '../../img/Untitled-1 4.png';
import { FaBars } from 'react-icons/fa';
import SearchInput from '../Search/SearchInput';
import Sidebar from '../sidebar';


export default function Header() {

  const [text, setText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSearch = async (page = 1) => {
    if (text.trim()) {
      const query = encodeURIComponent(text.trim());
      const response = await fetch(`https://kitsu.io/api/edge/anime?`);
      const results = response.data;
      navigate(`/paginadebusca?q=${query}&page=${page}`, { state: { results } });
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

  return (

    <>
    
      <SidebarContainer>
        <FaBars className='Bars' onClick={handleToggleSidebar} />

        {sidebar && <Sidebar active={setSidebar} />}
      </SidebarContainer>
      
      <Cabecalho>
      <Link to="/">
        <img src={logo} />
      </Link>
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
    </Cabecalho></>
  );
}
