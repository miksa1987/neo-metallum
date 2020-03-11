import React from 'react';
import styled from 'styled-components';

interface Props {
  incrementPageCounter: () => void
  decrementPageCounter: () => void
}

const Layout = styled.div`
  display: grid;
  grid-template: 2rem / 4rem 1fr 4rem;
  background-color: #44475a;
  border: 1px solid black;

  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const PageChangerButtons: React.FC<Props> = ({ incrementPageCounter, decrementPageCounter }) => {
  return (
    <Layout>
      <button id='nav-button-back' onClick={decrementPageCounter}>{'<<<'}</button>
      <div></div>
      <button id='nav-button-forward' onClick={incrementPageCounter}>{'>>>'}</button>
    </Layout>
  );
}