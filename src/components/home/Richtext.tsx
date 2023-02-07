import React, { useCallback, useMemo } from 'react';
import isHotkey from 'is-hotkey';
import { Editable, withReact, Slate } from 'slate-react';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';

import initialValue from '../../constant/initialValue';

import HOTKEYS from '../../constant/hotkey';

import { toggleMark } from '../../utils';
import ListToolbar from './ListToolbar';
import { Element, Leaf } from '../editor';
import { Card, CardBody } from '@chakra-ui/react';

const RichText = () => {
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <Card mt="14px">
      <CardBody>
        <Slate editor={editor} value={initialValue}>
          <ListToolbar />
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder="Enter some rich text…"
            spellCheck
            autoFocus
            onKeyDown={(event) => {
              for (const hotkey in HOTKEYS) {
                if (isHotkey(hotkey, event as any)) {
                  event.preventDefault();
                  const mark = HOTKEYS[hotkey];
                  toggleMark(editor, mark);
                }
              }
            }}
          />
        </Slate>
      </CardBody>
    </Card>
  );
};

export default RichText;
