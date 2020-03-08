import React from 'react';
import styled from 'styled-components';
import { ArtistType } from '../band.types';

interface Props {
  member: ArtistType
}

const Layout = styled.div`
  display: grid;
  grid-template: 1.5rem / 1fr 1fr;
  align-items: center;
`;

export const Member: React.FC<Props> = ({ member }) => {
  return (
    <Layout>
      <strong>{member.name}</strong>
      <p>{member.role}</p>
    </Layout>
  );
}