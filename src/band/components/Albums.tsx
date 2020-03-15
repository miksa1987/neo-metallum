import React from 'react';
import styled from 'styled-components';
import { AlbumType } from '../../common/types';
import { Album } from './Album';

interface Props {
  albums: AlbumType[]
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 5px;
  background-color: #44475a;
  border: 1px solid black;
`;

export const Albums: React.FC<Props> = ({ albums }) => {
  return (
    <Layout>
      <h3>Albums: </h3>
      {albums.length > 0 && albums.map((album) => <Album key={album.id} album={album} />)}
      {albums.length === 0 && <p>Unknown</p>}
    </Layout>
  );
}