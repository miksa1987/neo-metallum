import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { Loader } from '../../common';
import { BandInfo } from './BandInfo';
import { Albums } from './Albums';

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

  // Not completely sure if I like this destructuring way. REMOVE COMMENT BEFORE COMMITTING.
  const { band: { name, genre, country, location, status, label, yearsActive, photoUrl, logoUrl } } = data;
  const band = { name, genre, country, location, status, label, yearsActive, photoUrl, logoUrl };

  const members = data.band.members;
  const albums = data.band.albums;

  return (
    <div>
      <BandInfo band={band} members={members} />
      <Albums albums={albums} />
    </div>
  );
}