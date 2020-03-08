import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  hidden: boolean
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  min-height: calc(100vh - 5rem);
  width: 25vw;
  left: 0px;

  background-color: #44475a;
  border: 1px solid black;
  padding: 10px;

  @media screen and (max-width: 600px) {
    display: ${(props: Props) => props.hidden ? 'none' : 'flex'};
    top: 4rem;
    left: 0px;
    bottom: 0px;
    margin: none;

    width: 85vw;
    z-index: 1000;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #282a36;
  border: 1px solid black;
  padding: 15px;
  margin: 5px;
`;

export const SideBar: React.FC<Props> = ({ hidden }) => {
  return (
    <Layout hidden={hidden}>
      <Section>
        <Link to='/'>Home</Link>
      </Section>
      <Section>
        <h2>Bands</h2>
        <Link to='/bands/byletter/a'>By letter</Link>
        {/*<Link to='/bands/bycountry/finland'>By country</Link>
        <Link to='/bands/bygenre/heavy_metal'>By genre</Link>*/}
        
        <Link to='/bands/search'>Search</Link>
        {/*<Link to='/bands/random'>Random</Link>*/}
      </Section>
      <Section>
        <Link to='/'>About</Link>
      </Section>
    </Layout>
  );
}