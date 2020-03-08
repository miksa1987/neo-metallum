import React from 'react';
import styled from 'styled-components';
import { Field as FinalField } from 'react-final-form';

interface Props {
  field: FieldType
}

export interface FieldType {
  name: string
  component: 'input' | 'select' | 'textarea'
  type: string
  placeholder: string
}

const Layout = styled.div`
  display: grid;
  grid-template: 100% / 1fr 1fr;
  align-items: center;
`;

export const Field: React.FC<Props> = ({ field }) => {
  return (
    <Layout>
      <strong>{field.placeholder}</strong>
      <FinalField {...field} id={field.name.toLowerCase()} />
    </Layout>
  );
}