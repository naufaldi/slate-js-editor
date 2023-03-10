import { Button, Icon } from '.';
import { useSlate } from 'slate-react';
import { isBlockActive, toggleBlock } from '../../utils';
import TEXT_ALIGN_TYPES from '../../constant/textAlign';
const BlockButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      active={isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
      )}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};

export default BlockButton;
