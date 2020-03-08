import React from 'react';
import styled from 'styled-components';

import {
  CenteredButton,
  CenteredDiv
} from '../common';

interface Props {
  setSidebarVisible: () => void
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #44475a;
  border: 1px solid black;

  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;

  height: 3rem;

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template: 3rem / 3rem 1fr;
  }
`;

export const TopBar: React.FC<Props> = ({ setSidebarVisible }) => {
  return (
    <Layout>
      <CenteredButton className='sidebar-menu-button' onClick={setSidebarVisible}>=</CenteredButton>
      <CenteredDiv>
        METALLUM
      </CenteredDiv>
    </Layout>
  );
}