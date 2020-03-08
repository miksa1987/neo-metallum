import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  const letters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'z', 'å', 'ä', 'ö', '0', '1',
    '2', '3', '4', '5', '6', '7', '8', '9'
  ];

  return (
    <Layout>
      {letters.map((letter, i) =>
        <StyledLink key={i} to={`${path}/${letter}`}>
          {letter.toUpperCase()}
        </StyledLink>)}
    </Layout>
  );
}