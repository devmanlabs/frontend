import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  Select,
  Text,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { FC } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
interface stakingProps {}

const staking: FC<stakingProps> = () => {
  return (
    <Container maxW="container.xl">
      <Heading my={4} fontWeight="300" fontSize="2xl" textAlign="center">
        Provide Funds and Earn Staking Rewards to <br /> Maintain you Access{' '}
        <b>Forever</b>
      </Heading>

      <Formik
        initialValues={{ amount: '', cmkValue: '', token: '' }}
        onSubmit={() => {
          console.log('submit');
        }}
      >
        <Form>
          <Flex
            gap="2"
            align="end"
            mx="auto"
            justifyContent="space-between"
            w="700px"
          >
            {' '}
            <Flex>
              <FormControl w="200px">
                <FormLabel as="legend" fontSize="sm">
                  Amount to be staked
                </FormLabel>
                <HStack boxShadow="md">
                  <Input
                    borderRadius="none"
                    borderLeftRadius="md"
                    focusBorderColor="none"
                    border="none"
                    //   value={0}
                  />
                  <HStack px="4">
                    <Text color="gray.100" fontSize="xs">
                      USDC
                    </Text>
                    <Button
                      bg="purple.200"
                      color="white"
                      size="xs"
                      borderRadius="full"
                    >
                      Max
                    </Button>
                  </HStack>
                </HStack>
              </FormControl>
              <FormControl w="150px">
                <FormLabel as="legend" fontSize="sm">
                  Value in CMK
                </FormLabel>
                <HStack boxShadow="md">
                  <Input
                    borderRadius="none"
                    borderLeftRadius="md"
                    focusBorderColor="none"
                    border="none"
                    //   value={0}
                    w="150px"
                  />

                  <Text px="4" color="gray.100" fontSize="xs">
                    CMK
                  </Text>
                </HStack>
              </FormControl>
              <FormControl w="150px">
                <FormLabel as="legend" fontSize="sm">
                  Token
                </FormLabel>
                <HStack boxShadow="md">
                  <Select
                    borderRadius="none"
                    borderLeftRadius="md"
                    focusBorderColor="none"
                    border="none"
                  >
                    <option value="option1">USDC</option>
                    <option value="option2">ETH</option>
                    <option value="option3">ETH</option>
                  </Select>
                </HStack>
              </FormControl>
            </Flex>
            <HStack>
              {' '}
              <Button minW="200px" bg="rgba(0,0,0,0.1)">
                Mint NFT
              </Button>
              <Icon color="purple.300" fontSize="xl">
                {' '}
                <AiOutlineQuestionCircle />
              </Icon>
            </HStack>
          </Flex>
        </Form>
      </Formik>
    </Container>
  );
};
export default staking;
