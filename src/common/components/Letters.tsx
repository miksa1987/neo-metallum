import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { alphabets } from '../constants';

interface Props {
  path: string
}

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;

  background-color: #44475a;
  border: 1px solid black;

  @media screen and (max-width: 1050px) {
    min-height: 7rem;
  }

  @media screen and (max-width: 750px) {
    min-height: 10rem;
  }

  @media screen and (max-width: 650px) {
    min-height: 13rem;
  }

  @media screen and (max-width: 750px) {
    min-height: 7rem;
  }
`;

const StyledLink = styled(Link)`
  margin-right: 1rem;
  font-size: 150%;
`;

export const Letters: React.FC<Props> = ({ path }) => {
  return (
    <Layout>
      {alphabets.map((letter, i) =>
        <StyledLink
          id={`${letter}-link`}
          key={i} 
          to={`${path}/${letter}`}
        >
          {letter.toUpperCase()}
        </StyledLink>)}
    </Layout>
  );
}