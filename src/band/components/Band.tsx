import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { 
  Loader, InformationLayout 
} from '../../common';
import { BandInfo } from './BandInfo';
import { Albums } from './Albums';
import { Members } from '../../common';

export const GET_BAND_QUERY = gql`
  query findBand($id: String!) {
    band(id: $id) {
      name
      genre
      country
      location
      status
      label
      yearsActive
      photoUrl
      logoUrl
      albums {
        id
        name
        type
        releaseDate
      }
      members {
        id
        name
        role
      }
    }
  }
`;

export const Band = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_BAND_QUERY, { variables: { id }});

  if (loading) {
    return ( <Loader /> );
  }

  const { band: { name, genre, country, location, status, label, yearsActive, photoUrl, logoUrl } } = data;
  const band = { name, genre, country, location, status, label, yearsActive, photoUrl, logoUrl };

  const members = data.band.members;
  const albums = data.band.albums;

  return (
    <InformationLayout>
      <BandInfo band={band} />
      <div>
        <Members members={members} />
        <Albums albums={albums} />
      </div>
    </InformationLayout>
  );
}