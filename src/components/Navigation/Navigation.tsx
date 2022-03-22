import { FC } from 'react';

import Navbar from './Navbar/Navbar';

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
  const routes = [
    {
      name: 'Analytics',
      link: '/analytics',
    },
    {
      name: 'Risk Library',
      link: '/risk-library',
    },
  ];

  return (
    <>
      <Navbar routes={routes} />
    </>
  );
};
export default Navigation;
