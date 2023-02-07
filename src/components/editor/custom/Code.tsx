import { Box } from '@chakra-ui/react';
import React, { FC } from 'react';
import { CustomEditorProps } from '../../../types';
import { Code as CodeEditor } from '@chakra-ui/react';
export const Code: FC<CustomEditorProps> = ({
  children,
  attributes,
  style,
}) => {
  return (
    <CodeEditor {...attributes} style={{ ...style }} as="code">
      {children}
    </CodeEditor>
  );
};
