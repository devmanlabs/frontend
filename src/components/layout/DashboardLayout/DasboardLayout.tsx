import { Box, Flex, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

import Navigation from '~/components/Navigation/Navigation';

import LeftSideDrawer from '../LeftSideDrawer';

import UserSideBar from './UserSideBar';

interface DashboardLayoutProps {
  children: ReactNode;
  text: string;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const [isLessThan786] = useMediaQuery('(max-width: 786px)');
  return (
    <>
      <Navigation onToggle={onToggle} />
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
