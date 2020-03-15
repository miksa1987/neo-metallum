import styled from 'styled-components';

export const InformationLayout = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr;

  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
  }
`;