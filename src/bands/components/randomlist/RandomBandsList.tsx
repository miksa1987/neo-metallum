import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { Loader } from '../../../common';
import { BandsList } from '../common/BandsList';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GET_BANDS_QUERY = gql`
  query findBandsByLetter($name: String!, $genre: String!, $start: Int!) {
    bands(name: $name, genre: $genre, start: $start) {
      id
      name
      country
      genre
    }
  }
`;

export const RandomBandsList = () => {
  const [ letter, setLetter ] = useState('a');
  const [ genre, setGenre ] = useState('heavy');

  const letters = [ 
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0',
    '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ];
  const genres = [
    'heavy', 'black', 'thrash', 'death', 'power', 'metalcore',
    'doom', 'folk', 'gothic', 'speed', 'groove', 'symphonic',
    'progressive', 'industrial'
  ];

  const { data, loading, error } = useQuery(GET_BANDS_QUERY, { 
    variables: { name: `${letter}**`, genre, start: 0 } 
  });

  const getRandomItem = (items: string[]) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }

  useEffect(() => {
    setLetter(getRandomItem(letters));
    setGenre(getRandomItem(genres));
  }, []);

  if (loading) {
    return ( <Loader /> );
  }

  return (
    <Layout>
      <BandsList bands={data.bands} />
    </Layout>
  );
}