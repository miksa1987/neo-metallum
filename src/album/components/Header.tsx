import React from 'react';
import { Link } from 'react-router-dom';

import { Section, Image } from '../../common';

interface Props {
  albumName: string
  albumImgUrl: string
  bandName: string
  bandId: string
}

export const Header: React.FC<Props> = ({ albumName, albumImgUrl, bandName, bandId }) => {
  return (
    <Section>
      <h2>{albumName} by <Link to={`/band/${bandId}`}>{bandName}</Link></h2>
      <Image src={albumImgUrl} />
    </Section>
  );
}
