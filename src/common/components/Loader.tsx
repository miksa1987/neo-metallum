import React from 'react';
import styled from 'styled-components';

import { RingLoader } from 'react-spinners';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;

  @media screen and (max-width: 900px) {
    left: 25vw;
  }
`;

export const Loader = () => {
  return (
    <Layout>
      <RingLoader size='200px' color='#ff5555' />
    </Layout>
  );
}