import React from 'react';
import {
  MdCode,
  MdFormatAlignCenter,
  MdFormatAlignJustify,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatBold,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatQuote,
  MdFormatUnderlined,
  MdLooksOne,
  MdLooksTwo,
} from 'react-icons/md';
import BlockButton from '../common/BlockButton';

import { Toolbar } from '../common/index';
import MarkButton from '../common/MarkButton';
const ListToolbar = () => {
  return (
    <Toolbar>
      <MarkButton format="bold" icon={<MdFormatBold />} />
      <MarkButton format="italic" icon={<MdFormatItalic />} />
      <MarkButton format="underline" icon={<MdFormatUnderlined />} />
      <MarkButton format="code" icon={<MdCode />} />
      <BlockButton format="heading-one" icon={<MdLooksOne />} />
      <BlockButton format="heading-two" icon={<MdLooksTwo />} />
      <BlockButton format="block-quote" icon={<MdFormatQuote />} />
      <BlockButton format="numbered-list" icon={<MdFormatListNumbered />} />
      <BlockButton format="bulleted-list" icon={<MdFormatListBulleted />} />
      <BlockButton format="left" icon={<MdFormatAlignLeft />} />
      <BlockButton format="center" icon={<MdFormatAlignCenter />} />
      <BlockButton format="right" icon={<MdFormatAlignRight />} />
      <BlockButton format="justify" icon={<MdFormatAlignJustify />} />
    </Toolbar>
  );
};

export default ListToolbar;
