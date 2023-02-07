import React, { Ref, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

import { Box } from '@chakra-ui/react';

interface BaseProps {
  className: string;
  [key: string]: unknown;
}
type OrNull<T> = T | null;

export const Button = React.forwardRef(
  (
    {
      className,
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
      as="span"
      cursor={'pointer'}
      color={reversed ? (active ? 'white' : '#aaa') : active ? 'black' : '#ccc'}
      {...props}
      ref={ref}
    />
  )
);

export const Icon = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<OrNull<null>>
  ) => (
    <Box
      as="span"
      {...props}
      ref={ref}
      fontSize="18px"
      verticalAlign="text-bottom"
      className="material-icons"
    />
  )
);

export const Menu = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<OrNull<HTMLDivElement>>
  ) => (
    <Box
      {...props}
      ref={ref}
      position="relative"
      padding="1px 18px 17px"
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
  )
);

export const Portal = ({ children }) => {
  return typeof document === 'object'
    ? ReactDOM.createPortal(children, document.body)
    : null;
};

export const Toolbar = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<OrNull<HTMLDivElement>>
  ) => <Menu {...props} ref={ref} />
);
