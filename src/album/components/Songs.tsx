import React from 'react';
import styled from 'styled-components';

import { SongType } from '../../common/types';
import { Section } from '../../common';
import { Song } from './Song';

interface Props {
  songs: SongType[]
}

export const Songs: React.FC<Props> = ({ songs }) => {
  if (songs.length === 0) return null;

  return (
    <Section>
      <strong>Songs</strong>
      {songs.map((song, idx) => <Song key={idx} song={song} />)}
    </Section>
  );
}