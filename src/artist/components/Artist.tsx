import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import { useParams, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { 
  Loader, Notification
} from '../../common';
import { ArtistInfo } from './ArtistInfo';
import { ArtistHeaderAndImage } from './ArtistHeaderAndImage';

export const GET_ARTIST_QUERY = gql`
  query artist($id: String!){
	  artist(id: $id) {
      id
      name
      realName
      age
      origin
      gender
      photoUrl
      biography
      trivia
    }
  }
`;

const StyledMasonry = styled(Masonry)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  margin-left: 0px; 
  width: auto;
`;

export const Artist = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_ARTIST_QUERY, { variables: { id } });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Notification message='Something went wrong. Could not find album.' />
    );
  }

  const breakPoints = {
    default: 2,
    1400: 3,
    1000: 2,
    600: 1
  }

  const { artist: { realName, age, gender, biography, trivia, name, photoUrl } } = data;
  const artist = { realName, age, gender, biography, trivia };

  const items = [
    <ArtistHeaderAndImage name={name} image={photoUrl} />,
    <ArtistInfo artist={artist} />
  ];

  return (
    <StyledMasonry
      className='' 
      columnClassName=''
      breakpointCols={breakPoints}
    >
      {items}
    </StyledMasonry>
  );
}
