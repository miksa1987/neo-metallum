import React from 'react';
import styled from 'styled-components';
import { Form } from 'react-final-form';

import { Field, FieldType } from './Field';

interface Props {
  fields: FieldType[]
  setValues: any
}

const Layout = styled.div`  
  background-color: #44475a;
  border: 1px solid black;
`;

export const Fields: React.FC<Props> = ({ fields, setValues }) => {
  const onSubmit = async (values: any) => {
    setValues({
      start: 0,
      name: values.name || '',
      genre: values.genre || '',
      formationFrom: values.formationFrom || '',
      formationTo: values.formationTo || ''
    });
  }

  return (
    <Layout>
      <Form 
        // @ts-ignore onSubmit not on type for some reason. Works fine though. 
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {fields.map((field, i) => <Field key={i} field={field} /> )}
            <button type='submit' id='submit-search'>
              Search
            </button>
          </form>
        )}
      />
    </Layout>
  );
}