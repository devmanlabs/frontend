import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
} from '@chakra-ui/react';
import { FC } from 'react';

interface NavbarProps {
  routes: {
    name: string;
    link: string;
  }[];
}

const Navbar: FC<NavbarProps> = ({ routes }) => {
  return (
    <Box as="nav" bg="purple.500" color="white">
      <Container
        h="70px"
        maxW="container.xl"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Brand */}
        <HStack>
          <Box bg="white" borderRadius="full" boxSize="50px"></Box>
          <Heading as="h3" fontSize="xl" fontWeight="400">
            Devmanlabs
          </Heading>
        </HStack>
        <HStack spacing="4">
          <Flex gap="4">
            {routes.map((route) => (
              <Box
                borderBottom="2px solid transparent"
                _hover={{
                  borderBottom: '2px solid white',
                }}
                fontSize="md"
                key={route.name}
              >
                {route.name}
              </Box>
            ))}
          </Flex>
          <Button
            color="white"
            borderColor="white"
            variant="outline"
            borderRadius="full"
            _hover={{ color: 'black', bg: 'white' }}
          >
            0xcCB6812d853EC
          </Button>
        </HStack>
      </Container>
    </Box>
  );
};
export default Navbar;
