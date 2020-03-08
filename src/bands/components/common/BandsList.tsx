import React from 'react';

import { BandType } from '../../../band/band.types';
import { Band } from './Band';
 
interface Props {
  bands: BandType[]
}

export const BandsList: React.FC<Props> = ({ bands }) => {
  return (
    <div>
      {bands.length > 0 && bands.map((band: any) => <Band key={band.id} band={band} /> )}
      {bands.length === 0 && <strong>No bands found.</strong>}
    </div>
  );
}