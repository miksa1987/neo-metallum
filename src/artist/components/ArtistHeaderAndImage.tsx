import React from 'react';
import { Section, Image } from '../../common';

interface Props {
  image: string
  name: string
}

export const ArtistHeaderAndImage: React.FC<Props> = ({ image, name }) => {
  return (
    <Section>
      <h2>{name}</h2>
      <Image src={image} alt='Artist image' id='artist-image' />
    </Section>
  );
}
