import styled from 'styled-components';

export const Container = styled.div`
  background-color: #484747;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
  animation: showSidebar .4s;
  overflow: auto;
  color: #F46D1B;

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
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  margin: 20% 0 10% 10% ;
  cursor: pointer;

  li{
  transition: all 0.3s;
  text-decoration: none;
  color: white;
}

  li:hover{
  transform: scale(0.9)
  }
`;