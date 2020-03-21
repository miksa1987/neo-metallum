import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { 
  Loader, Members, Notification
} from '../../common';

import { Songs } from './Songs';
import { AlbumInfo } from './AlbumInfo';
import { Header } from './Header';
import { Reviews } from './Reviews';

export const GET_ALBUM_QUERY = gql`
  query album($id: String!){
	  album(id: $id) {
      id
      name
      releaseDate
      label
      format
      type
      coverUrl
      lineup {
        id
        name
        role
      }
      band {
        id
        name
      }
      reviews {
        id
        title
        rating
      }
      musics {
        id
        title
        length
        number
      }
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

export const Album = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_ALBUM_QUERY, { variables: { id } });
 
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

  console.log(data);

  const band = data.album.band;
  const reviews = data.album.reviews;
  const lineup = data.album.lineup;
  const songs = data.album.musics;

  const { album: { name, releaseDate, label, format, type, coverUrl } } = data;
  const album = { name, releaseDate, label, format, type, coverUrl };

  const items = [
    <Header albumName={album.name} albumImgUrl={album.coverUrl} bandName={band.name} bandId={band.id} />,
    <AlbumInfo album={album} />,
    <Members members={lineup} />,
    <Songs songs={songs} />,
    <Reviews reviews={reviews} />
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
