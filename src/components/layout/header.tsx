import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Container,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Container as={Stack} maxW={'6xl'} py={1}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Box>Naufaldi</Box>

            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Header;
