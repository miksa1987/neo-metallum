import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { Loader } from '../../../common';
import { BandsList } from '../common/BandsList';
import {
  alphabets, genres
} from '../../../common';

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

  const { data, loading, error } = useQuery(GET_BANDS_QUERY, { 
    variables: { name: `${letter}**`, genre, start: 0 } 
  });

  const getRandomItem = (items: string[]) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }

  useEffect(() => {
    setLetter(getRandomItem(alphabets));
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