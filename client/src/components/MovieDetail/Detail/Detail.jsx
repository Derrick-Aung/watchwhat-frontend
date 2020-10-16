import React from 'react';
import styled from 'styled-components';
import constants from '../../constants';
import { Typography } from '@material-ui/core';
import RatingRuntime from '../../RatingRuntime/RatingRuntime';
import Vote from '../../Vote/Vote';

const DetailDiv = styled.div`
  padding: 30px;
`;

const Title = styled.div`
  font-family: ${constants.primaryFont} !important;
  font-weight: 600;
`;

const FlexCenterDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Genres = ({ genres = [], style }) => {
  const content = genres.map((g) => g.name).join(', ');
  return (
    <Typography variant="h5" style={style}>
      {content}
    </Typography>
  );
};

const MetaData = ({ title, content, style }) => (
  <div style={style}>
    <Typography variant="h6" style={{ color: constants.primaryTextColorMuted }}>
      {title}
    </Typography>
    <Typography variant="h6">{content}</Typography>
  </div>
);

const Detail = ({
  title,
  vote_average,
  runtime,
  genres,
  release_date,
  budget,
  overview,
}) => {
  return (
    <DetailDiv>
      <Typography variant="h3" component="h1">
        <Title>{title}</Title>
        <Vote
          style={{
            position: 'fixed',
            bottom: '16px',
            right: '16px',
          }}
        />
        <RatingRuntime
          style={{ marginTop: '1rem' }}
          runtime={runtime}
          vote_average={vote_average}
        />
        <div>
          <Genres genres={genres} style={{ marginTop: '1rem' }} />
        </div>

        <FlexCenterDiv style={{ marginTop: '1rem' }}>
          <MetaData
            title="Release Date"
            content={release_date}
            style={{ marginRight: '1.4rem' }}
          />
          <MetaData title="Budget" content={budget} />
        </FlexCenterDiv>

        <MetaData
          title="Overview"
          content={overview}
          style={{ marginTop: '1rem' }}
        />
      </Typography>
    </DetailDiv>
  );
};

export default Detail;
