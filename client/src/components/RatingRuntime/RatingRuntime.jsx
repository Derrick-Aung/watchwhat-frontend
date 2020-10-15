import React from 'react';
import styled from 'styled-components';
import constants from '../constants';
import { Typography } from '@material-ui/core';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import HourglassFullRoundedIcon from '@material-ui/icons/HourglassFullRounded';

const FlexCenterDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// All direct children has margin
const RatingRuntimeDiv = styled(FlexCenterDiv)`
  > * {
    font-size: 1.4rem !important;
    margin-right: 8px !important;
  }

  > p {
    margin-right: 16px !important;
  }
`;

const RatingRuntime = ({ runtime, vote_average, style }) => {
  return (
    <RatingRuntimeDiv style={style}>
      <HourglassFullRoundedIcon
        style={{
          color: `${constants.accentColorPrimary}`,
          transform: 'scale(1.4)',
        }}
      />
      <Typography>{runtime}</Typography>
      <StarRoundedIcon
        style={{
          color: `${constants.goldenYellow}`,
          transform: 'scale(1.4)',
        }}
      />
      <Typography>{vote_average}</Typography>
    </RatingRuntimeDiv>
  );
};

export default RatingRuntime;
