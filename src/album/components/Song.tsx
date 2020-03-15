import React from 'react';
import styled from 'styled-components';

import { ListItem } from '../../common';
import { SongType } from '../../common/types';

interface Props {
  song: SongType
}

const Layout = styled(ListItem)`
  grid-template: 1.5rem / 1fr 3fr 1fr;
`;

export const Song: React.FC<Props> = ({ song }) => {
  return (
    <Layout>
      <p>{song.number}</p>
      <strong>{song.title}</strong>
      <p>{song.length}</p>
    </Layout>
  );
}
