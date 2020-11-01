import React from 'react';
import styled from 'styled-components';
import constants from '../../constants';

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentDiv = styled.div`
  background-color: black;
  padding-bottom: 6rem;
`;

const BackdropDiv = styled.div`
  min-height: 70vh;
  background-color: black;
  background-image: url(${({ imageLink }) => imageLink});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  &:after {
    position: relative;
    display: inline-block;
    background-image: linear-gradient(to top, rgb(0, 0, 0), transparent);
    content: '';
    width: 100%;
    height: 60px;
    top: 70vh;
    transform: translateY(-60px);
  }
`;

const VerticalWrapper = ({ children, backdrop }) => {
  return (
    <MainDiv>
      <BackdropDiv imageLink={backdrop}></BackdropDiv>
      <ContentDiv>{children}</ContentDiv>
    </MainDiv>
  );
};

export default VerticalWrapper;
