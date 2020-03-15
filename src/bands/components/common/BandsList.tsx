import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';

import { BandType } from '../../../common/types';
import { Band } from './Band';
import { CenteredDiv } from '../../../common';
 
interface Props {
  bands: BandType[]
}

const StyledMasonry = styled(Masonry)`
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  justify-content: center;
  margin-left: 0px; /* gutter size offset */
  width: auto;
`;

export const BandsList: React.FC<Props> = ({ bands }) => {
  const breakPoints = {
    default: 5,
    1400: 4,
    1100: 3,
    800: 2,
    600: 1
  }

  if (bands.length === 0) {
    return (
      <div>
        <strong>No bands found.</strong>
      </div>
    );
  }

  const bandItems = bands.map((band: BandType) => <Band key={band.id} band={band} /> );

  return (
    <CenteredDiv>
      <StyledMasonry 
        className='' 
        columnClassName=''
        breakpointCols={breakPoints}
      >
        {bandItems}
      </StyledMasonry>
    </CenteredDiv>
  );
}