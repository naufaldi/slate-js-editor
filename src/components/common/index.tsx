import React, { Ref, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

import { Box, Container, Flex } from '@chakra-ui/react';

interface BaseProps {
  className: string;
  [key: string]: unknown;
}
type OrNull<T> = T | null;

export const Button = React.forwardRef(
  (
    {
      active,
      reversed,
      ...props
    }: PropsWithChildren<
      {
        active: boolean;
        reversed: boolean;
      } & BaseProps
    >,
    ref: Ref<OrNull<null>>
  ) => (
    <Box
      as={motion.span}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
      boxSize={'20px'}
      cursor={'pointer'}
      color={reversed ? (active ? 'white' : '#aaa') : active ? 'black' : '#ccc'}
      {...props}
      ref={ref}
    />
  )
);

export const Icon = React.forwardRef(
  ({ ...props }: PropsWithChildren<BaseProps>, ref: Ref<OrNull<null>>) => (
    <Box
      as="span"
      {...props}
      ref={ref}
      fontSize="20px"
      verticalAlign="text-bottom"
    />
  )
);

export const Menu = React.forwardRef(
  (
    { ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<OrNull<HTMLDivElement>>
  ) => (
    <Container maxW="6xl">
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        {...props}
        ref={ref}
        position="relative"
        flexWrap={'wrap'}
        gap="2px"
        padding="18px"
        margin="0 -20px"
        borderBottom="2px solid #eee"
        marginBottom="20px"
        sx={{
          '& > *': {
            display: 'inline-block',
          },
          '& > * + *': {
            marginLeft: '15px',
          },
        }}
      />
    </Container>
  )
);

export const Portal = ({ children }) => {
  return typeof document === 'object'
    ? ReactDOM.createPortal(children, document.body)
    : null;
};
