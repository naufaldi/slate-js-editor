import { Box, Container, Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import Footer from './footer';
import Header from './header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex minH={'100vh'} flexDir="column">
      <Header />
      <Container maxW={'6xl'}>{children}</Container>
      <Footer />
    </Flex>
  );
};

export default Layout;
