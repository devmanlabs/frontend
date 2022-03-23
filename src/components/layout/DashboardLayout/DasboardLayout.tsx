import {
  Box,
  Flex,
  Heading,
  Icon,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import { FaBars } from 'react-icons/fa';

import LeftSideDrawer from '../LeftSideDrawer';

import UserSideBar from './UserSideBar';

interface DashboardLayoutProps {
  children: ReactNode;
  text: string;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children, text }) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const [isLessThan786] = useMediaQuery('(max-width: 786px)');
  return (
    <>
      <Box
        bg="pink.500"
        fontWeight="semibold"
        fontSize="25"
        p={5}
        pl={8}
        display="flex"
        justifyContent="space-between"
        color="white"
        textTransform="uppercase"
      >
        <Icon onClick={onToggle}>
          <FaBars />
        </Icon>
        <Heading fontSize="xl" opacity="0.9">
          {text}
        </Heading>
      </Box>
      <Flex>
        {isLessThan786 ? (
          <LeftSideDrawer onClose={onClose} isOpen={isOpen}>
            <UserSideBar isDrawer />
          </LeftSideDrawer>
        ) : (
          <>
            {isOpen && (
              <Box w="250px">
                <UserSideBar />
              </Box>
            )}
          </>
        )}

        <Box flex="1">
          <Box marginTop={0}> {children}</Box>
        </Box>
      </Flex>
    </>
  );
};

export default DashboardLayout;
