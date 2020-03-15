import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ListItem } from '../../common';
import { AlbumType } from '../../common/types';

interface Props {
  album: AlbumType
}

const Layout = styled(ListItem)`
  grid-template: 1.5rem / 2fr 1fr 1fr;
`;

export const Album: React.FC<Props> = ({ album }) => {
  return (
    <Layout>
      <Link to={`/album/${album.id}`}>{album.name}</Link>
      <p>{album.releaseDate}</p>
      <p>{album.type}</p>
    </Layout>
  );
}
