import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  band: any
}

const Layout = styled.div`
  display: grid;
  grid-template: 100% / 1fr 10rem 1fr;

  background-color: #44475a;
  border: 1px solid black;
  margin: 5px;
  padding: 10px;

  align-items: center;

  @media screen and (max-width: 600px) {
    grid-template: 3rem / 1fr 1fr;
  }
`;

export const Band: React.FC<Props> = ({ band }) => {
  return (
    <Layout>
      <Link to={`/band/${band.id}`}>{band.name}</Link>
      <p>{band.country}</p>
      <p>{band.genre}</p>
    </Layout>
  );
}