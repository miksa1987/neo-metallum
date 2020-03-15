import React from 'react';
import styled from 'styled-components';
import { ArtistType } from '../types';
import { Member } from './Member';

interface Props {
  members: ArtistType[]
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #44475a;
  border: 1px solid black;
`;

export const Members: React.FC<Props> = ({ members }) => {
  return (
    <Layout>
      <h3>Members: </h3>
      {members.length > 0 && members.map((member, idx) => <Member key={idx} member={member} />)}
      {members.length === 0 && <p>Unknown</p>}
    </Layout>
  );
}