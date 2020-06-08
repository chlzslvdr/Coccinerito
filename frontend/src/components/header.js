import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import LOGO from '../images/logo-3.png';

export default function Header() {
  // const data = useStaticQuery(graphql`
  //     query HeaderQuery {
  //         site {
  //         siteMetadata {
  //             title
  //         }
  //         }
  //     }
  // `)

  const Header = styled.header`
    background: #e3caaa;
  `;

  const ImageDiv = styled.img`
    display: flex;
    height: 5rem;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
  `;

  return (
    <Header>
      <ImageDiv src={LOGO} alt="demo" className="logo" />
      {/* <h1>{data.site.siteMetadata.title}</h1> */}
    </Header>
  );
}
