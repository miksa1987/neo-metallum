import React from 'react';
import styled from 'styled-components';

import { BandType } from '../../common/types';

import { Image, Section } from '../../common';

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  band: BandType
}

export const BandInfo: React.FC<Props> = ({ band }) => {
  return (
    <Section>
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
      </FlexColumn>
    </Section>
  );
}