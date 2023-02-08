import {
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { BlockQuote } from './custom';
import { Code } from './custom/Code';

export const Element = ({ attributes, children, element }) => {
  const style = { textAlign: element.align };
  switch (element.type) {
    case 'block-quote':
      return (
        <BlockQuote style={style} {...attributes}>
          {children}
        </BlockQuote>
      );
    case 'code':
      return (
        <Code style={style} {...attributes}>
          {children}
        </Code>
      );

    case 'bulleted-list':
      return (
        <UnorderedList style={style} {...attributes}>
          {children}
        </UnorderedList>
      );
    case 'heading-one':
      return (
        <Heading as="h1" style={style} {...attributes}>
          {children}
        </Heading>
      );
    case 'heading-two':
      return (
        <Heading as="h2" style={style} {...attributes}>
          {children}
        </Heading>
      );
    case 'list-item':
      return (
        <ListItem style={style} {...attributes}>
          {children}
        </ListItem>
      );
    case 'numbered-list':
      return (
        <OrderedList style={style} {...attributes}>
          {children}
        </OrderedList>
      );
    default:
      return (
        <Text style={style} {...attributes}>
          {children}
        </Text>
      );
  }
};
