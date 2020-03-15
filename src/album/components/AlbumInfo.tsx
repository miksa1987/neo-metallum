import React from 'react';
import { AlbumType } from '../../common/types';
import { Section } from '../../common';

interface Props {
  album: AlbumType
}

export const AlbumInfo: React.FC<Props> = ({ album }) => {
  return (
    <Section>
      <p>Released in: {album.releaseDate}</p>
      <p>Type: {album.type}</p>
      <p>Format: {album.format}</p>
      <p>Label: {album.label}</p>
    </Section>
  );
}