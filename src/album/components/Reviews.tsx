import React from 'react';

import { ReviewType } from '../../common/types';
import { Section } from '../../common';

import { Review } from './Review';

interface Props {
  reviews: ReviewType[]
}

export const Reviews: React.FC<Props> = ({ reviews }) => {
  if (reviews.length === 0) return (
    <Section>
      <strong>No reviews yet.</strong>
    </Section>
  );

  return (
    <Section>
      <strong>Reviews</strong>
      {reviews.map((review, idx) => <Review key={idx} review={review} />)}
    </Section>
  );
}