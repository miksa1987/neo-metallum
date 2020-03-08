import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { Loader } from '../../../common';
import { Letters } from '../../../common';
import { SwipeablePage, PageChangerButtons } from '../../../common';
import { BandsList } from '../common/BandsList';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GET_BANDS_QUERY = gql`
  query findBandsByLetter($letters: String!, $start: Int!) {
    bands(name: $letters, start: $start) {
      id
      name
      country
      genre
    }
  }
`;

export const BandsByLetter = () => {
  const [ start, setStart ] = useState(0);
  const { letter } = useParams();

  const letters = `${letter}**`;

  const { data, loading, error } = useQuery(GET_BANDS_QUERY, { variables: { letters, start } });

  const decrementStart = () => {
    if (start > 0) {
      setStart(start - 200);
    }
  }

  const incrementStart = () => setStart(start + 200);

  if (loading) {
    return ( <Loader /> );
  }
  return (
    <Layout>
      <h2>Bands by letter</h2>
      <Letters path='/bands/byletter' />
      <SwipeablePage decrementPageCounter={decrementStart} incrementPageCounter={incrementStart}>
        <BandsList bands={data.bands} />
      </SwipeablePage>
      <PageChangerButtons incrementPageCounter={incrementStart} decrementPageCounter={decrementStart} />
    </Layout>
  );
}