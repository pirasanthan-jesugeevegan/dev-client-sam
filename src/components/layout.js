/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import { rgba } from 'polished';
export default function Layout({ children }) {
  return (
    <Flex
      sx={{
        minHeight: '100vh',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: rgba('#FFF5ED', 0.5),
      }}
    >
      <Header />
      <main
        sx={{
          variant: 'layout.main',
        }}
      >
        {children}
      </main>
      <Footer />
    </Flex>
  );
}
