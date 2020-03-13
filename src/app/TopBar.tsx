import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

import {
  CenteredDiv
} from '../common';

const Layout = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #44475a;
  border: 1px solid black;

  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;

  height: 3rem;
`;

const Image = styled.img`
  width: 10rem;
  height: auto;
`;

interface Item {
  name: string
  value: string
  path: string
}

const bandItems: Item[] = [
  {
    name: 'Bands',
    value: 'default',
    path: '/'
  },
  {
    name: 'By letter',
    value: 'byletter',
    path: '/bands/byletter/a'
  },
  {
    name: 'Random band',
    value: 'random',
    path: '/bands/random'
  },
  {
    name: 'By genre',
    value: 'bygenre',
    path: '/bands/bygenre'
  }
];

export const TopBar = () => {
  const history = useHistory();

  const [ selectedBandItem, setSelectedBandItem ] = useState(bandItems[0]);

  const handleBandSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { target: { value } } = event;

    const selectedItem: Item | undefined = bandItems.find(item => item.value === value);

    if (selectedItem !== undefined) {
      history.push(selectedItem.path);
      setSelectedBandItem(selectedItem);
    }
  }

  const handleBandSelectClick = () => {
    history.push(selectedBandItem.path);
  }

  const handleHomeClick = () => {
    // TYPING
    const bandsSelect: any = document.getElementById('bands-select-path');
    if (bandsSelect.value !== null) {
      bandsSelect.value = 'default';
    }
  }

  return (
    <Layout>
      <CenteredDiv>
        <Link to='/' onClick={handleHomeClick} id='neo-metallum-logo'>
          <Image src='/images/logo.png' />
        </Link>

        <select id='bands-select-path' onChange={handleBandSelectChange}>
          {bandItems.map((item, idx) => 
            <option 
              key={idx} 
              id={`bands-select-${item.value}`}
              value={item.value}
              onClick={handleBandSelectClick}
            >
              {item.name}
            </option>)}
        </select>

        <button id='search-bands-button' onClick={() => history.push('/bands/search')}>
          Search
        </button>
      </CenteredDiv>
    </Layout>
  );
}