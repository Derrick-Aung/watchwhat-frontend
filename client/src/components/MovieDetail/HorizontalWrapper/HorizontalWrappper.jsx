import React from 'react';
import styled from 'styled-components';
import constants from '../../constants';

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

const ContentDiv = styled.div`
  width: 30%;
  background-color: black;
`;

const BackdropDiv = styled.div`
  width: 70%;
  background-color: black;
  background-image: url(${({ imageLink }) => imageLink});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  &:before {
    position: relative;
    display: inline-block;
    background-image: linear-gradient(to right, rgb(0, 0, 0), transparent);
    content: '';
    width: 200px;
    height: 100%;
  }
`;

// TODO check if its called render by convention instead
const HorizontalWrappper = ({
  children,
  backdrop = 'https://image.tmdb.org/t/p/original/aO5ILS7qnqtFIprbJ40zla0jhpu.jpg',
}) => {
  return (
    <MainDiv>
      <ContentDiv>{children}</ContentDiv>
      <BackdropDiv imageLink={backdrop}></BackdropDiv>
    </MainDiv>
  );
};

export default HorizontalWrappper;
