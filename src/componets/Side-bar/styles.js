import styled from 'styled-components';


export const SidebarClosed = styled.div`
  
  padding: 1rem;
  background-color: #F46D1B;
  

  svg{
    color: white;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: white;
  }

  ul {
    list-style: none;
  }
`

export const SidebarContainer = styled.div`
  background-color: #F46D1B;
  position: fixed;
  height: 100%;
  top: 0px;
  left: ${({ sidebar }) => sidebar ? '0px' : '-300px'};
  width: 300px;
  animation: ${({ sidebar }) => sidebar ? 'showSidebar .4s' : 'hideSidebar .4s'};
  overflow: auto;
  color: white;
  z-index: 1;

  svg {
    color: white;
    width: 30px;
    height: 30px;
    margin-left: 1rem;
    margin-top: 1rem;
    cursor: pointer;
    
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }

  @keyframes hideSidebar {
    from {
      opacity: 1;
      width: 300px;
    }
    to {
      opacity: 0;
      width: 0;
    }
  }

`;

export const SidebarContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  margin: 20% 0 10% 10%;
  cursor: pointer;

 a {
    transition: all 0.3s;
    color: white;
  }

 a:hover {
    transform: scale(0.9);
  }

  img{
    padding: 0.5rem;
  }

`;
