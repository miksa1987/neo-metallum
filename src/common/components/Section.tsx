import styled from 'styled-components';

export const Section = styled.div`
  display: grid;
  grid-template: 100% / 1fr 1fr;
  background-color: #44475a;
  border: 1px solid black;
  margin-top: 5px;
  margin-bottom: 5px;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;