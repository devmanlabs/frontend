import { Flex, Box, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';

interface IntervalTogglerProps {
  dayInterval: number;
  changeIntervalHandler: (days: number) => void;
}

const IntervalToggler: FC<IntervalTogglerProps> = ({
  dayInterval,
  changeIntervalHandler,
}) => {
  return (
    <Flex
      justify="space-between"
      p={{ base: 2, sm: 4 }}
      flexDir={{ base: 'column-reverse', sm: 'row' }}
    >
      <Flex gap={{ base: 2, sm: 4 }}>
        <VStack spacing={0}>
          <Text fontSize={{ base: 'x-small', sm: 'sm' }}>AAVE v2 </Text>
          <Text fontWeight="bold" fontSize={{ base: 'sm', sm: 'xl' }}>
            22.4%
          </Text>
        </VStack>
        <VStack spacing={0}>
          <Text fontSize={{ base: 'x-small', sm: 'sm' }}>Compound </Text>
          <Text fontWeight="bold" fontSize={{ base: 'sm', sm: 'xl' }}>
            33.24%
          </Text>
        </VStack>
      </Flex>
      <Flex gap={{ base: 1, sm: 2, md: 4 }}>
        {[30, 60, 90].map((days) => (
          <Box
            fontSize={{ base: 'sm', sm: 'xl' }}
            fontWeight={dayInterval === days ? 'bold' : 'normal'}
            key={days}
            onClick={() => changeIntervalHandler(days)}
          >{`${days}D`}</Box>
        ))}
      </Flex>
    </Flex>
  );
};
export default IntervalToggler;
