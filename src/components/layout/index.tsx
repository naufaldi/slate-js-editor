import { Box, Container, Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import Footer from './footer';
import Header from './header';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

const variants = {
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeInOut' },
  },
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex minH={'100vh'} flexDir="column">
      <Header />
      <Container
        as={motion.div}
        initial="hidden"
        animate="visible"
        variants={variants}
        maxW={'6xl'}
      >
        {children}
      </Container>
      <Footer />
    </Flex>
  );
};

export default Layout;
