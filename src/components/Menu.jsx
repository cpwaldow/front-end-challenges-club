import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: var(--azul-escuro);
  padding: 1.5rem;
  margin: 0;
  text-align: center;
`;

const Anchor = styled(Link)`
  font-size: 1.5rem;
  text-decoration: underline;
  color: var(--branco);
  margin: 0 20px;
`;

const Menu = () => {
  return (
    <header>
      <Nav>
        <Anchor to='/'>Home</Anchor>
        <Anchor to='/pokemon'>Pokemon</Anchor>
      </Nav>
    </header>
  );
};

export default Menu;
