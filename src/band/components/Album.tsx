import React from 'react';
import styled from 'styled-components';
import { AlbumType } from '../band.types';

interface Props {
  album: AlbumType
}

const Layout = styled.div`
  display: grid;
  grid-template: 1.5rem / 2fr 1fr 1fr;
  align-items: center;
  border: 1px solid grey;
  margin: 5px;
  padding: 10px;

  background-color: #44475a;
  border: 1px solid black;
`;

export const Album: React.FC<Props> = ({ album }) => {
  console.log(album)
  return (
    <Layout>
      <strong>{album.name}</strong>
      <p>{album.releaseDate}</p>
      <p>{album.type}</p>
    </Layout>
  );
}
