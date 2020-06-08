import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './header';
import Seo from './seo';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    background-image: black;
  }
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle/>
    <Seo />
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;
