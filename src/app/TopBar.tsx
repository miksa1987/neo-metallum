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
    name: 'By country',
    value: 'bycountry',
    path: '/bands/bycountry'
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

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { target: { value } } = event;

    const selectedItem: Item | undefined = bandItems.find(item => item.value === value);

    if (selectedItem !== undefined) {
      history.push(selectedItem.path);
      setSelectedBandItem(selectedItem);
    }
  }

  const handleClick = () => {
    history.push(selectedBandItem.path);
  }

  return (
    <Layout>
      <CenteredDiv>
        <Link to='/'><h2>METALLUM</h2></Link>
        <select onChange={handleChange}>
          {bandItems.map((item, idx) => 
            <option 
              key={idx} 
              value={item.value}
              onClick={handleClick}
            >
              {item.name}
            </option>)}
        </select>

        <button onClick={() => history.push('/bands/search')}>
          Search
        </button>
      </CenteredDiv>
    </Layout>
  );
}