import {
  GridItem,
  VStack,
  Heading,
  Stack,
  HStack,
  Icon,
  Button,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { IPackageCard } from '~/types/IPackageCard';

interface PackageCardProps {
  item: IPackageCard;
  index: number;
}

const PackageCard: FC<PackageCardProps> = ({ item, index }) => {
  return (
    <GridItem
      key={item.name}
      boxShadow="xl"
      borderRadius="lg"
      overflow="hidden"
      role="group"
    >
      <VStack
        transition="0.3s ease"
        py={4}
        px="4"
        _groupHover={{
          bg: 'pink.500',
          color: 'white',
        }}
      >
        <Heading as="h3" size="md">
          {item.name}
        </Heading>
      </VStack>
      <VStack py={4} px="4">
        <Text fontSize="md" textAlign="center">
          {index + 1}X <br /> Staking Rewards
        </Text>
        <Stack>
          {item.benefits.map((benefit) => (
            <HStack spacing="0" key={benefit.text}>
              <Icon color={!benefit.access ? 'gray.200' : 'purple.700'}>
                {benefit.icon}
              </Icon>
              <Text
                color={!benefit.access ? 'gray.200' : 'purple.700'}
                fontSize="sm"
              >
                {benefit.text}
              </Text>
            </HStack>
          ))}
        </Stack>
        <Button
          transition="0.3s ease"
          _hover={{ opacity: 0.8 }}
          _groupHover={{
            bg: 'pink.500',
            color: 'white',
          }}
          variant="outline"
          w="80%"
        >
          {item.price === 0 ? (
            'Free'
          ) : (
            <>
              {`$${item.price} per month*`}
              <Icon>
                <FaArrowRight />
              </Icon>
            </>
          )}
        </Button>
      </VStack>
    </GridItem>
  );
};
export default PackageCard;
