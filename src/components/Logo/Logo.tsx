import { HStack, Box, Heading } from '@chakra-ui/react';
import { FC } from 'react';

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return (
    <HStack>
      <Box bg="white" borderRadius="full" boxSize="50px"></Box>
      <Heading as="h3" fontSize="xl" fontWeight="400">
        Devmanlabs
      </Heading>
    </HStack>
  );
};
export default Logo;
