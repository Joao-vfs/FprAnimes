import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Cabecalho, SidebarContainer } from './styles';
import logo from '../../img/logo (2).png';
import { FaBars } from 'react-icons/fa';
import SearchInput from '../Search/SearchInput';
import Sidebar from '../sidebar';


export default function Header_Home() {

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

        <FaBars  onClick={handleToggleSidebar} />

        {sidebar && <Sidebar active={setSidebar} />}

      </SidebarContainer>

      <Cabecalho>
      
        <img src={logo} />
        
      
      
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
    </Cabecalho>
    </>
  );
}
