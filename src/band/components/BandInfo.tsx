import React from 'react';
import styled from 'styled-components';

import { BandType, ArtistType } from '../band.types';

import { Image } from '../../common';
import { Members } from './Members';

const Layout = styled.div`
  display: grid;
  grid-template: 100% / 1fr 1fr;
  background-color: #44475a;
  border: 1px solid black;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  band: BandType
  members: ArtistType[]
}

export const BandInfo: React.FC<Props> = ({ band, members }) => {
  return (
    <Layout>
      <FlexColumn>
        <h1>{band.name}</h1>
        <Image src={band.logoUrl} alt='band logo' />
        <Image src={band.photoUrl} alt='band photo' />
      </FlexColumn>
      <FlexColumn>
        <p>Country: {band.country}</p>
        <p>Location: {band.location}</p>
        <p>Genre: {band.genre}</p>
        <p>Status: {band.status}</p>
        <p>Years active: {band.yearsActive}</p>
        <p>Label: {band.label}</p>
        <Members members={members} />
      </FlexColumn>
    </Layout>
  );
}