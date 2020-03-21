import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Loader, Notification } from '../../../common';

const GET_RANDOM_BAND_QUERY = gql`
  query {
	  randomBand {
      id
    }
  }
`;

export const RandomBand = () => {
  const { data, loading, error } = useQuery(GET_RANDOM_BAND_QUERY, { fetchPolicy: 'network-only' });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Notification message='Something went wrong. Could not find album.' />
    );
  }

  const id = data.randomBand.id;

  return (
    <Redirect to={`/band/${id}`} />
  );
}
