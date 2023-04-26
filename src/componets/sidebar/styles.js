import styled from 'styled-components';

export const SidebarContainer = styled.div`
  background-color: #F46D1B;
  position: fixed;
  height: 100%;
  top: 0px;
  left: ${({ sidebar }) => sidebar ? '0px' : '-300px'};
  width: 300px;
  animation: ${({ sidebar }) => sidebar ? 'showSidebar .4s' : 'hideSidebar .4s'};
  overflow: auto;
  color: #484747;

  svg {
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
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
`;
