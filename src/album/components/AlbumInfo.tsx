import React from 'react';
import styled from 'styled-components';
import { AlbumType } from '../../common/types';
import { Section } from '../../common';

interface Props {
  album: AlbumType
}

const Layout = styled(Section)`
  display: flex;
  flex-direction: column;
`;

export const AlbumInfo: React.FC<Props> = ({ album }) => {
  return (
    <Layout>
      <p>Released in: {album.releaseDate}</p>
      <p>Type: {album.type}</p>
      <p>Format: {album.format}</p>
      <p>Label: {album.label}</p>
    </Layout>
  );
}