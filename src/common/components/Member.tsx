import React from 'react';
import styled from 'styled-components';
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
      <strong>{member.name}</strong>
      <p>{member.role}</p>
    </Layout>
  );
}