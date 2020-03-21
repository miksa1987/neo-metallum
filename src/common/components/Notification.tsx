import React from 'react';
import styled from 'styled-components';

interface Props {
  message: string
}

const Layout = styled.div`
  height: 5rem;
  border: 1px solid #ff79c6;
  color: #f1fa8c;
  background-color: #282a36;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Notification: React.FC<Props> = ({ message }) => {
  return (
    <Layout>
      <p>{message}</p>
    </Layout>
  );
}