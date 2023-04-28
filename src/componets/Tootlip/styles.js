import styled from "styled-components";

export const ToolTipContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover > div {
    display: block;
  }
`;

export const TooltipContent = styled.div`
  display: block;
  position: absolute;
  background-color: #262626;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  border: none;
  z-index: 1;
  width: 226px;
  padding: 0.5rem;
  top: 100%;
  left: 0;
  display: none;
  text-align: center;

  h3{
    font-size: 20px ;
    color: white;
  }

  .rating{
    color: #16A085;
    font-size: 20px;
    font-weight: bold;
  }

  .pop{
    font-size: 14px;
    color: white;
  }

  .rank{
    font-size: 14px;
    color: white;
  }

  span{
    font-size: 12px;
    color: white;
  }

  .star{
    color: #FFE145;
}

.heart{
    color: #FF4545
}

`;