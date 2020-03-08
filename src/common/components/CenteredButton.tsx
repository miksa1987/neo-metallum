import styled from 'styled-components';

export const CenteredButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;