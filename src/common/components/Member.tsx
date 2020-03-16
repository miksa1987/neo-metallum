import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ArtistType } from '../types';
import { ListItem } from '../../common';

interface Props {
  member: ArtistType
}

const Layout = styled(ListItem)`
  grid-template: 100% / 1fr 1fr;
`;

export const Member: React.FC<Props> = ({ member }) => {
  return (
    <Layout>
      <Link to={`/artist/${member.id}`}>
        <strong>{member.name}</strong>
      </Link>
      <p>{member.role}</p>
    </Layout>
  );
}