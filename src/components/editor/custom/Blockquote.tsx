import { Box, useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';
import { CustomEditorProps } from '../../../types';

export const BlockQuote: FC<CustomEditorProps> = ({
  children,
  attributes,
  style,
}) => {
  return (
    <Box
      {...attributes}
      style={{ ...style }}
      as="blockquote"
      backgroundColor={useColorModeValue('gray.200', 'gray.600')}
      borderLeft="10px solid #ccc"
      margin="1.5em 10px"
      padding="0.5em 10px"
      sx={{
        quotes: '"\\201C""\\201D""\\2018""\\2019"',
        'blockquote p': {
          display: 'inline',
        },
      }}
      _before={{
        color: '#ccc',
        content: 'open-quote',
        fontSize: '4em',
        lineHeight: '0.1em',
        marginRight: '0.25em',
        verticalAlign: '-0.4em',
      }}
    >
      {children}
    </Box>
  );
};
