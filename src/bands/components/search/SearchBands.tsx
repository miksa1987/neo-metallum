import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { Loader } from '../../../common';
import { BandType } from '../../../band/band.types';
import { BandsList } from '../common/BandsList';
import { Fields } from './Fields';
import { FieldType } from './Field';

export const GET_BANDS_QUERY = gql`
  query findBandsByLetter(
    $name: String!, 
    $start: Int!, 
    $genre: String!,
    $formationFrom: String!, 
    $formationTo: String!
  ) {
    bands(
      name: $name, 
      start: $start,
      genre: $genre,
      formationFrom: $formationFrom,
      formationTo: $formationTo
    ) {
      id
      name
      country
      genre
    }
  }
`;

export const SearchBands = () => {
  const [ variables, setVariables ] = useState({
    name: '',
    genre: '',
    formationFrom: '',
    formationTo: '',
    start: 0
  });

  const { data, loading, error } = useQuery(GET_BANDS_QUERY, { variables });

  console.log(data)
  const fields: FieldType[] = [
    {
      name: 'name',
      component: 'input',
      type: 'text',
      placeholder: 'Band name'
    },
    {
      name: 'genre',
      component: 'input',
      type: 'text',
      placeholder: 'Band genre'
    },
    {
      name: 'formationFrom',
      component: 'input',
      type: 'text',
      placeholder: 'Band formation from'
    },
    {
      name: 'formationTo',
      component: 'input',
      type: 'text',
      placeholder: 'Band formation to'
    }
  ];

  if (loading) {
    return (
      <div>
        <Fields fields={fields} setValues={setVariables} />
        <Loader />
      </div>
    );
  }

  const bands: BandType[] = data.bands;

  return (
    <div>
      <Fields fields={fields} setValues={setVariables} />
      <BandsList bands={bands} />
    </div>
  );
}