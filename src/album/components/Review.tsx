import React from 'react';
import styled from 'styled-components';

import { ListItem } from '../../common';
import { ReviewType } from '../../common/types';

interface Props {
  review: ReviewType
}

const Layout = styled(ListItem)`
  grid-template: 1.5rem / 4fr 1fr;
`;

export const Review: React.FC<Props> = ({ review }) => {
  return (
    <Layout>
      <strong>{review.title}</strong>
      <p>{review.rating}</p>
    </Layout>
  );
}
