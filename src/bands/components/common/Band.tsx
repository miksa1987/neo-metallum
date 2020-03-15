import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Image } from '../../../common';
import { BandType } from '../../../common/types';

interface Props {
  band: BandType
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #44475a;
  border: 1px solid black;
  margin: -4px -8px;
  padding: 0px;
`;

const images = [
  '/images/band/01.jpg',
  '/images/band/02.jpg',
  '/images/band/03.jpg',
  '/images/band/04.jpg',
  '/images/band/05.jpg',
  '/images/band/06.jpg',
  '/images/band/07.jpg',
  '/images/band/08.jpg',
  '/images/band/09.jpg',
  '/images/band/10.jpg',
  '/images/band/11.jpg',
  '/images/band/12.jpg',
];

export const Band: React.FC<Props> = ({ band }) => {
  const [ image, setImage ] = useState('/images/band/00.jpg');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length - 1);
    setImage(images[randomIndex]);
  }, []);

  return (
    <div>
    <Layout>
      <Link id='band-info-link' to={`/band/${band.id}`}>
        <h2>{band.name}</h2>
      </Link>
      <Image src={image} alt='band' />
      <strong>{band.country}</strong>
      <p>{band.genre}</p>
    </Layout>
    </div>
  );
}