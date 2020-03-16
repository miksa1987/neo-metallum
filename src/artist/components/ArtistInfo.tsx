import React from 'react';
import { ArtistType } from '../../common/types';
import { Section } from '../../common';

interface Props {
  artist: ArtistType
}

export const ArtistInfo: React.FC<Props> = ({ artist }) => {
  return (
    <Section>
      <p>Real name: {artist.realName}</p>
      <p>Age: {artist.age}</p>
      <p>Gender: {artist.gender}</p>
      <p>Biography: {artist.biography}</p>
      <p>Trivia: {artist.trivia}</p>
    </Section>
  );
}
